/* Comportamento comune alle pagine italiana e inglese.
   I testi e i link si cambiano in config.js, non qui. */
(function () {
  const $ = id => document.getElementById(id);
  const lingua = document.documentElement.lang === "en" ? "en" : "it";
  const cfg = CONFIG[lingua];

  const testi = {
    it: { ebook: "Acquista l'ebook su Amazon", cartaceo: "Acquista il cartaceo su Amazon", alto: "Acquista su Amazon" },
    en: { ebook: "Buy the ebook on Amazon", cartaceo: "Buy the paperback on Amazon", alto: "Buy on Amazon" }
  }[lingua];

  // Pulsanti di acquisto: restano disattivati finché il link in config.js è vuoto
  function attiva(el, link, testo) {
    if (!link) return;
    el.href = link; el.removeAttribute("aria-disabled");
    el.target = "_blank"; el.rel = "noopener";
    el.textContent = testo;
  }
  attiva($("btn-ebook"), cfg.linkEbook, testi.ebook);
  attiva($("btn-cartaceo"), cfg.linkCartaceo, testi.cartaceo);
  attiva($("btn-acquista-alto"), cfg.linkEbook || cfg.linkCartaceo, testi.alto);
  document.querySelectorAll('a[aria-disabled="true"]').forEach(a => a.addEventListener("click", e => e.preventDefault()));

  // Estratto
  if (cfg.estratto.length) {
    const box = $("testo-estratto");
    cfg.estratto.forEach(t => { const p = document.createElement("p"); p.textContent = t; box.appendChild(p); });
    $("estratto").hidden = false; $("nav-estratto").hidden = false;
  }
  // Newsletter
  if (cfg.newsletterAction) {
    $("form-newsletter").action = cfg.newsletterAction;
    $("newsletter").hidden = false;
  }
  // Contatto
  if (CONFIG.email) {
    const c = $("contatto"); c.hidden = false;
    const a = document.createElement("a"); a.href = "mailto:" + CONFIG.email; a.textContent = CONFIG.email; c.appendChild(a);
  }

  // Onda: linea piatta che comincia a vibrare, come sulla copertina
  const canvas = $("onda"), ctx = canvas.getContext("2d");
  const etichetta = $("offset");
  const ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 0, h = 0, t0 = performance.now();
  function misura() {
    const r = canvas.getBoundingClientRect(), d = window.devicePixelRatio || 1;
    w = r.width; h = r.height; canvas.width = w * d; canvas.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  function rumore(x, t) {
    return Math.sin(x * .09 + t * 3.1) * .5 + Math.sin(x * .23 - t * 5.3) * .3 + Math.sin(x * .61 + t * 8.7) * .2;
  }
  function disegna(ora) {
    const t = (ora - t0) / 1000, meta = w / 2, y0 = h / 2;
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 2; ctx.lineJoin = "round";
    ctx.strokeStyle = "#a9afbd"; ctx.beginPath(); ctx.moveTo(0, y0); ctx.lineTo(meta, y0); ctx.stroke();
    ctx.strokeStyle = "#77c4d6"; ctx.beginPath(); ctx.moveTo(meta, y0);
    for (let x = meta; x <= w; x += 2) {
      const q = (x - meta) / (w - meta);
      ctx.lineTo(x, y0 + rumore(x, ridotto ? 0 : t) * q * q * (h * .42));
    }
    ctx.stroke();
    // Contatore: sale fino a 41 microsecondi, poi oscilla di un'unità
    let us = 41;
    if (!ridotto) us = t < 4 ? Math.round(41 * (t / 4)) : 41 + (Math.floor(t * 6) % 3 === 0 ? 1 : 0);
    etichetta.textContent = "offset: +0.0000" + String(us).padStart(2, "0") + "s";
    if (!ridotto) requestAnimationFrame(disegna);
  }
  misura(); addEventListener("resize", () => { misura(); if (ridotto) disegna(performance.now()); });
  requestAnimationFrame(disegna);
})();
