(() => {
  const cleanMap = `
    <div class="portfolio__img portfolio__mockup-mapbox-clean" role="img" aria-label="Mapbox Power BI custom visual mockup with blue catchment areas and orange sales locations">
      <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="water" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#d9f0fb"/><stop offset="1" stop-color="#b9e3f4"/></linearGradient>
          <linearGradient id="zoneA" x1="0" x2="1"><stop stop-color="#2f8ec2"/><stop offset="1" stop-color="#75cfe3"/></linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0f172a" flood-opacity=".18"/></filter>
        </defs>
        <rect width="900" height="600" fill="url(#water)"/>
        <g opacity=".62" stroke="#ffffff" stroke-width="2">
          <path d="M0 80 C120 50 190 120 260 70 S420 30 520 90 S710 80 900 30 V0 H0Z" fill="#eef4f0"/>
          <path d="M0 470 C120 390 260 420 370 350 S610 305 900 250 V600 H0Z" fill="#eef4f0"/>
        </g>
        <g filter="url(#softShadow)">
          <path d="M135 105 C210 55 310 45 355 110 C305 180 290 260 320 335 C248 326 190 280 160 205 Z" fill="url(#zoneA)"/>
          <path d="M340 155 C470 95 620 105 690 190 C650 260 655 345 720 430 C600 455 470 432 380 360 C345 285 332 220 340 155 Z" fill="#62c3dc"/>
          <path d="M210 335 C300 310 410 345 475 420 C390 470 300 500 190 470 C165 425 170 380 210 335 Z" fill="#49abd0"/>
          <path d="M520 385 C640 345 765 350 840 430 C770 500 650 535 535 500 C500 462 498 420 520 385 Z" fill="#7bd2e5"/>
        </g>
        <g opacity=".8" stroke="#ffffff" stroke-width="3">
          <path d="M165 145 L330 120 M175 195 L316 180 M190 245 L308 252 M235 80 L220 322 M285 82 L270 330"/>
          <path d="M370 180 L675 185 M365 245 L690 245 M378 315 L708 315 M425 130 L455 410 M520 125 L545 430 M620 150 L595 420"/>
          <path d="M215 382 L460 410 M190 430 L410 455 M270 340 L300 485 M360 365 L335 495"/>
          <path d="M555 420 L810 430 M545 465 L760 488 M610 380 L630 520 M715 385 L700 525"/>
        </g>
        <g fill="#f9735b" stroke="#fff" stroke-width="8">
          <circle cx="215" cy="155" r="16"/><circle cx="292" cy="240" r="16"/><circle cx="165" cy="410" r="16"/><circle cx="300" cy="456" r="16"/>
          <circle cx="442" cy="180" r="16"/><circle cx="535" cy="255" r="16"/><circle cx="648" cy="190" r="16"/><circle cx="690" cy="315" r="16"/>
          <circle cx="585" cy="455" r="16"/><circle cx="740" cy="460" r="16"/>
        </g>
        <g font-family="Quicksand, Arial, sans-serif" font-weight="800" fill="#172033" stroke="#fff" stroke-width="4" paint-order="stroke">
          <text x="150" y="280" font-size="42">Manhattan</text>
          <text x="385" y="160" font-size="38">The Bronx</text>
          <text x="265" y="500" font-size="42">Brooklyn</text>
          <text x="585" y="360" font-size="42">Queens</text>
        </g>
        <g font-family="Quicksand, Arial, sans-serif" fill="#27749b" font-style="italic">
          <text x="55" y="230" font-size="26">Hudson</text><text x="63" y="262" font-size="26">River</text>
          <text x="228" y="345" font-size="25">East</text><text x="232" y="375" font-size="25">River</text>
          <text x="482" y="545" font-size="24">AI-generated synthetic map data</text>
        </g>
      </svg>
    </div>`;

  const css = document.createElement('style');
  css.textContent = `.portfolio__mockup-mapbox-clean{display:block!important;background:#d9f0fb!important;overflow:hidden!important}.portfolio__mockup-mapbox-clean svg{width:100%;height:100%;display:block}`;
  document.head.appendChild(css);

  function patch(){
    document.querySelectorAll('[data-project="mapbox-powerbi"] .portfolio__img, .portfolio__content .portfolio__mockup-mapbox').forEach((node) => {
      const slide = node.closest('.swiper-slide');
      if (slide && !/Mapbox Power BI Custom Visual/i.test(slide.textContent || '')) return;
      if (!node.classList.contains('portfolio__mockup-mapbox-clean')) node.outerHTML = cleanMap;
    });
  }

  patch();
  [200, 800, 1600, 3000, 5000].forEach((ms) => setTimeout(patch, ms));
  const observer = new MutationObserver(patch);
  observer.observe(document.body, { childList: true, subtree: true });
})();
