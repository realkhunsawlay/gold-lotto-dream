// Local web server: serves the site in www/ plus the /api routes, like Vercel does.
// Usage: npm start  →  http://localhost:3000   (no npm install needed for this)

import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";
import price from "./api/price.js";
import lottery from "./api/lottery.js";

const PORT = process.env.PORT || 3000;
const WWW = fileURLToPath(new URL("./www/", import.meta.url));
const ROOT = fileURLToPath(new URL("./", import.meta.url));
const ROUTES = { "/api/price": price, "/api/lottery": lottery };
// Paths served straight from the repo root, same as Vercel does for anything outside www/ and api/.
const ROOT_PREFIXES = ["/dream-images/"];
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".woff2": "font/woff2", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json",
};

// Give Node's plain response the small Vercel-style helpers the api/ files use.
function vercelRes(res) {
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (obj) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(obj));
    return res;
  };
  return res;
}

http.createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  try {
    if (ROUTES[path]) return await ROUTES[path](req, vercelRes(res));

    const fromRoot = ROOT_PREFIXES.some((p) => path.startsWith(p));
    const base = fromRoot ? ROOT : WWW;
    const file = join(base, normalize(path === "/" ? "index.html" : path));
    if (!file.startsWith(base) || file.includes(`${sep}..`)) throw { code: "ENOENT" };
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
    res.end(body);
  } catch (err) {
    if (err.code === "ENOENT" || err.code === "EISDIR") { res.writeHead(404, { "Content-Type": "text/plain" }); return res.end("Not found"); }
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server error: " + err.message);
  }
}).listen(PORT, () => console.log(`Site running → http://localhost:${PORT}`));
