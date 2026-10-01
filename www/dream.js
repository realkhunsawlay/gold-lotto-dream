/* Dream dictionary tab: search, category filter, favorites, pagination.
   Relies on globals already defined in index.html's main script: $, store, t, esc, lang, IS_APP.
   DREAM_DATA comes from dream-data.js (loaded just before this file). */
(function () {
  // The 1,000 illustrations (~56 MB) live at the repo root (/dream-images), NOT inside www/,
  // so Capacitor's `cap sync` does NOT bundle them into the Android app — that would make the
  // installed app ~56 MB bigger. The website serves them locally (fast, same origin).
  // The Android app instead streams them from GitHub's raw CDN at runtime.
  //
  // >>> EDIT THIS once you've pushed the repo to GitHub: <<<
  const GITHUB_OWNER = "YOUR-GITHUB-USERNAME";
  const GITHUB_REPO = "gold-lotto";
  const GITHUB_BRANCH = "main";
  const REMOTE_IMAGE_BASE = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/dream-images`;

  function imgSrc(no) {
    return (typeof IS_APP !== "undefined" && IS_APP) ? `${REMOTE_IMAGE_BASE}/${no}.png` : `/dream-images/${no}.png`;
  }
  const IMG_FALLBACK = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100' height='100' fill='%23eee'/></svg>";

  const CATS = [
    ["all", "dreamAll"],
    ["animal", "dreamAnimal"],
    ["item", "dreamItem"],
    ["people", "dreamPeople"],
  ];

  let favorites = store.get("dreamFav", {});
  let dreamState = { cat: "all", query: "", shown: 30 };
  const PAGE = 30;
  let dreamStarted = false;

  function dreamTitle(it) { return lang === "en" ? it.e : it.m; }
  function normalize(s) { return (s || "").toString().toLowerCase(); }

  function filtered() {
    let list = DREAM_DATA;
    if (dreamState.cat !== "all") list = list.filter((it) => it.c === dreamState.cat);
    const q = normalize(dreamState.query).trim();
    if (q) list = list.filter((it) => normalize(it.m).includes(q) || normalize(it.e).includes(q) || it.n.includes(q) || it.no.includes(q));
    return list;
  }

  function cardHTML(it) {
    const on = !!favorites[it.no];
    return `<div class="dream-card">
      <div class="dream-img"><img src="${imgSrc(it.no)}" alt="${esc(dreamTitle(it))}" loading="lazy" onerror="this.onerror=null;this.src='${IMG_FALLBACK}';"></div>
      <div class="dream-body">
        <div class="dream-top">
          <span class="dream-no">#${it.no}</span>
          <button class="dream-star ${on ? "on" : ""}" data-fav="${it.no}" aria-label="${esc(t("dreamFav"))}">${on ? "★" : "☆"}</button>
        </div>
        <div class="dream-title">${esc(dreamTitle(it))}</div>
        <div class="dream-bottom"><span class="dream-numb num">${it.n}</span></div>
      </div>
    </div>`;
  }

  function renderSeg() {
    $("dream-seg").innerHTML = CATS.map(([key, label]) =>
      `<button type="button" data-cat="${key}" aria-pressed="${key === dreamState.cat}">${esc(t(label))}</button>`).join("");
  }

  window.renderDream = function renderDream() {
    if (!dreamStarted) return;
    renderSeg();
    const list = filtered();
    const toShow = list.slice(0, dreamState.shown);
    $("dream-grid").innerHTML = toShow.map(cardHTML).join("");
    $("dream-empty").hidden = list.length !== 0;
    $("dream-count").textContent = list.length ? t("dreamResultsN", { n: list.length }) : "";
    $("dream-more").hidden = list.length <= dreamState.shown;
  };

  $("dream-grid") && $("dream-grid").addEventListener("click", (e) => {
    const no = e.target.closest("[data-fav]")?.dataset.fav;
    if (!no) return;
    favorites[no] = !favorites[no];
    if (!favorites[no]) delete favorites[no];
    store.set("dreamFav", favorites);
    window.renderDream();
  });

  $("dream-seg") && $("dream-seg").addEventListener("click", (e) => {
    const cat = e.target.closest("[data-cat]")?.dataset.cat;
    if (!cat) return;
    dreamState.cat = cat;
    dreamState.shown = PAGE;
    window.renderDream();
  });

  $("dream-search") && $("dream-search").addEventListener("input", (e) => {
    dreamState.query = e.target.value;
    dreamState.shown = PAGE;
    window.renderDream();
  });

  $("dream-more") && $("dream-more").addEventListener("click", () => {
    dreamState.shown += PAGE;
    window.renderDream();
  });

  window.initDream = function initDream() {
    if (dreamStarted) return;
    dreamStarted = true;
    window.renderDream();
  };
})();
