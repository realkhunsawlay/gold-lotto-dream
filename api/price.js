// Returns the latest Thai gold price as JSON for the website.
// Proxying through our own endpoint avoids browser CORS issues and adds caching.

const GOLD_API = "https://api.chnwt.dev/thai-gold-api/latest";

export default async function handler(req, res) {
  try {
    const r = await fetch(GOLD_API, { headers: { "User-Agent": "gold-site" } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    if (data.status !== "success") throw new Error("source returned an error");

    // Cache at Vercel's edge for 5 minutes so we don't hammer the source.
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json(data.response);
  } catch (err) {
    return res.status(502).json({ error: err.message });
  }
}
