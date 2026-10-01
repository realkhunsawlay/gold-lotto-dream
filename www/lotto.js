// Thai Government Lottery results: fetching + normalizing.
// Lottery fetching + parsing. Shared by the website (api/lottery.js) and the Android app (loaded directly by index.html).
//
// Output shape (same for every source):
// {
//   date: "2026-09-16",            // draw date (Gregorian, ISO)
//   source: "glo" | "rayriffy",
//   prizes: {
//     first:  { reward: 6000000, numbers: ["123456"] },
//     near1:  { reward: 100000,  numbers: [...] },
//     second, third, fourth, fifth,
//     last3f: { reward: 4000, numbers: ["123", "456"] },   // first 3 digits
//     last3b: { reward: 4000, numbers: [...] },            // last 3 digits
//     last2:  { reward: 2000, numbers: ["12"] }            // last 2 digits
//   }
// }

export const PRIZE_KEYS = ["first", "near1", "second", "third", "fourth", "fifth", "last3f", "last3b", "last2"];

// Standard GLO prize amounts (baht), used if a source doesn't send the amount.
export const DEFAULT_REWARDS = {
  first: 6000000, near1: 100000, second: 200000, third: 80000, fourth: 40000,
  fifth: 20000, last3f: 4000, last3b: 4000, last2: 2000,
};
const DIGITS_LEN = { last3f: 3, last3b: 3, last2: 2 };

const GLO_LATEST = "https://www.glo.or.th/api/lottery/getLatestLottery";
const GLO_BY_DATE = "https://www.glo.or.th/api/checking/getLotteryResult";
const RAYRIFFY = "https://lotto.api.rayriffy.com";

const THAI_MONTHS = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

const pad2 = (n) => String(n).padStart(2, "0");

/** "2026-09-16" | "16 กันยายน 2569" | {date,month,year} → "2026-09-16" (or null) */
export function toIsoDate(v) {
  if (!v) return null;
  if (typeof v === "object") {
    const d = v.date ?? v.day, m = v.month, y = v.year;
    if (d && m && y) {
      let year = Number(y); if (year > 2400) year -= 543;
      const month = /^\d+$/.test(String(m)) ? Number(m) : THAI_MONTHS.indexOf(String(m)) + 1;
      if (month > 0) return `${year}-${pad2(month)}-${pad2(d)}`;
    }
    return null;
  }
  const s = String(v).trim();
  let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) { let y = Number(m[1]); if (y > 2400) y -= 543; return `${y}-${m[2]}-${m[3]}`; }
  m = s.match(/(\d{1,2})\s+([ก-๙]+)\s+(\d{4})/);
  if (m) {
    const month = THAI_MONTHS.indexOf(m[2]) + 1;
    if (month > 0) return `${Number(m[3]) - 543}-${pad2(month)}-${pad2(m[1])}`;
  }
  return null;
}

/** Search nested object for the first object that has all given keys. */
function findObjWith(obj, keys, seen = new Set()) {
  if (!obj || typeof obj !== "object" || seen.has(obj)) return undefined;
  seen.add(obj);
  if (!Array.isArray(obj) && keys.every((k) => k in obj)) return obj;
  for (const v of Object.values(obj)) {
    const found = findObjWith(v, keys, seen);
    if (found) return found;
  }
  return undefined;
}
function findValue(obj, keys, seen = new Set()) {
  if (!obj || typeof obj !== "object" || seen.has(obj)) return undefined;
  seen.add(obj);
  for (const k of keys) if (obj[k] !== undefined && obj[k] !== null && obj[k] !== "") return obj[k];
  for (const v of Object.values(obj)) {
    const found = findValue(v, keys, seen);
    if (found !== undefined) return found;
  }
  return undefined;
}

function cleanNumbers(list, len) {
  return (list || [])
    .map((x) => (x && typeof x === "object" ? x.value ?? x.number : x))
    .map((x) => String(x ?? "").replace(/\D/g, ""))
    .filter((x) => x.length === len);
}
const toReward = (v, key) => {
  const n = Number(String(v ?? "").replace(/[^\d.]/g, ""));
  return n > 0 ? n : DEFAULT_REWARDS[key];
};

/** GLO shape: data.first = { price, number: [{ round, value }] } */
export function normalizeGlo(json, requestedDate = null) {
  const data = findObjWith(json, ["first", "last2"]);
  if (!data) return null;
  const prizes = {};
  for (const key of PRIZE_KEYS) {
    const p = data[key] || {};
    prizes[key] = { reward: toReward(p.price, key), numbers: cleanNumbers(p.number, DIGITS_LEN[key] || 6) };
  }
  // For a by-date request, fall back to the requested date if the response doesn't state one.
  const date = toIsoDate(findValue(json, ["date"])) || toIsoDate(findValue(json, ["displayDate"])) || requestedDate;
  return valid({ date, source: "glo", prizes });
}

/** rayriffy shape: response.prizes[] / runningNumbers[] with ids */
const RAY_IDS = {
  prizeFirst: "first", prizeFirstNear: "near1", prizeSecond: "second", prizeThrid: "third",
  prizeForth: "fourth", prizeFifth: "fifth", runningNumberFrontThree: "last3f",
  runningNumberBackThree: "last3b", runningNumberBackTwo: "last2",
};
export function normalizeRayriffy(json) {
  const r = json && json.response;
  if (!r) return null;
  const prizes = Object.fromEntries(PRIZE_KEYS.map((k) => [k, { reward: DEFAULT_REWARDS[k], numbers: [] }]));
  for (const p of [...(r.prizes || []), ...(r.runningNumbers || [])]) {
    const key = RAY_IDS[p.id];
    if (key) prizes[key] = { reward: toReward(p.reward, key), numbers: cleanNumbers(p.number, DIGITS_LEN[key] || 6) };
  }
  return valid({ date: toIsoDate(r.date), source: "rayriffy", prizes });
}

function valid(result) {
  return result.date && result.prizes.first.numbers.length === 1 ? result : null;
}

async function getJson(url, body) {
  const r = await fetch(url, {
    method: body ? "POST" : "GET",
    headers: { "Content-Type": "application/json", "User-Agent": "Mozilla/5.0 (thai-lotto-checker)" },
    body: body ? JSON.stringify(body) : undefined,
    signal: typeof AbortSignal.timeout === "function" ? AbortSignal.timeout(10000) : undefined,
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

/** Fetch a draw. isoDate = "2026-09-16", or null for the latest draw. */
export async function fetchLottery(isoDate) {
  const errors = [];
  const attempts = [];

  if (isoDate) {
    const [y, m, d] = isoDate.split("-");
    attempts.push(["glo", () => getJson(GLO_BY_DATE, { date: d, month: m, year: y }).then((j) => normalizeGlo(j, isoDate))]);
  } else {
    attempts.push(["glo", () => getJson(GLO_LATEST, {}).then(normalizeGlo)]);
  }

  for (const [name, run] of attempts) {
    try {
      const result = await run();
      // For a specific date, make sure the source actually returned that draw.
      if (result && (!isoDate || result.date === isoDate)) return result;
      errors.push(`${name}: no result`);
    } catch (e) {
      errors.push(`${name}: ${e.message}`);
    }
  }
  const err = new Error(errors.join("; "));
  // "No draw that day" if any source answered but had no result (another may simply be offline).
  err.notFound = errors.some((e) => e.endsWith("no result"));
  throw err;
}
