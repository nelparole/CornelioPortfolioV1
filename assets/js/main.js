(() => {
  const legacyScript = 'https://cdn.jsdelivr.net/gh/nelparole/CornelioPortfolioV1@0a9456e8f83e935ef8ed304e8cda3d65c1f7f5da/assets/js/main.js';
  const mapboxImage = 'assets/img/mapbox-powerbi-visual.jpg';

  function mapboxSlideHtml() {
    return `<div class="portfolio__content">
      <div>
        <h3 class="portfolio__title">Mapbox Power BI Custom Visual</h3>
        <p class="portfolio__description">Built a customized version of an open-source Mapbox visual for Power BI. Implemented automatic zoom and multi-layer mapping within a single visual to analyse catchment areas, sales locations, market coverage, and potential cannibalisation.</p>
        <p class="portfolio__tech"><strong>TECH USED:</strong><span class="portfolio__tech-chips"><span class="portfolio__tech-chip">Power BI</span><span class="portfolio__tech-chip">TypeScript</span><span class="portfolio__tech-chip">JavaScript</span><span class="portfolio__tech-chip">Mapbox GL JS</span></span></p>
        <span class="portfolio__note"><em>AI-generated mockup using synthetic data.</em></span>
        <a href="#" class="portfolio__btn">In Progress <i class="uil uil-arrow-right"></i></a>
      </div>
      <img class="portfolio__img portfolio__mockup-mapbox" src="${mapboxImage}" alt="Mapbox Power BI custom visual mockup with catchment areas and sales locations" loading="eager">
    </div>`;
  }

  function applyMapboxSlide() {
    const wrapper = document.querySelector('#portfolio .swiper-wrapper');
    if (!wrapper) return false;
    let slide = document.querySelector('[data-project="mapbox-powerbi"]');
    if (!slide) {
      slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.dataset.project = 'mapbox-powerbi';
      wrapper.insertBefore(slide, wrapper.firstElementChild);
    }
    slide.innerHTML = mapboxSlideHtml();
    if (wrapper.firstElementChild !== slide) wrapper.insertBefore(slide, wrapper.firstElementChild);
    const swiper = document.querySelector('.portfolio__container')?.swiper;
    if (swiper) {
      swiper.update();
      swiper.pagination?.render?.();
      swiper.pagination?.update?.();
      swiper.slideTo(0, 0);
    }
    return true;
  }

  function loadLegacy() {
    const script = document.createElement('script');
    script.src = legacyScript;
    script.async = false;
    script.onload = () => {
      let attempts = 0;
      const timer = setInterval(() => {
        applyMapboxSlide();
        attempts += 1;
        if (attempts >= 18) clearInterval(timer);
      }, 350);
      setTimeout(applyMapboxSlide, 6500);
    };
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadLegacy);
  else loadLegacy();
})();
