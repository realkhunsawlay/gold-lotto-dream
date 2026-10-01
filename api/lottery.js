// GET /api/lottery              → latest draw
// GET /api/lottery?date=2026-09-16 → a specific draw
import { fetchLottery } from "../www/lotto.js";

export default async function handler(req, res) {
  const date = new URL(req.url, "http://localhost").searchParams.get("date");
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ error: "date must be YYYY-MM-DD" });
  }

  try {
    const result = await fetchLottery(date);
    // Past draws never change; the latest one is cached for 10 minutes.
    res.setHeader("Cache-Control", date
      ? "s-maxage=86400, stale-while-revalidate=604800"
      : "s-maxage=600, stale-while-revalidate=3600");
    return res.status(200).json(result);
  } catch (err) {
    return res.status(err.notFound ? 404 : 502).json({ error: err.message });
  }
}
