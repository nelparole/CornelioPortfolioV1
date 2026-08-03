const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) navToggle.addEventListener('click', () => navMenu?.classList.add('show-menu'));
if (navClose) navClose.addEventListener('click', () => navMenu?.classList.remove('show-menu'));
function linkAction() { navMenu?.classList.remove('show-menu'); }
document.querySelectorAll('.nav__link').forEach((link) => link.addEventListener('click', linkAction));

const skillsContent = document.getElementsByClassName('skills__content');
function toggleSkills() {
    const itemClass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i += 1) skillsContent[i].className = 'skills__content skills__close';
    if (itemClass === 'skills__content skills__close') this.parentNode.className = 'skills__content skills__open';
}
document.querySelectorAll('.skills__header').forEach((header) => header.addEventListener('click', toggleSkills));

const styles = document.createElement('style');
styles.textContent = `
    body:not(.dark-theme) {
        --portfolio-ink: #172033;
        --portfolio-muted: #667085;
        --portfolio-accent: #166a82;
    }
    .section__title { color: var(--portfolio-ink, #172033) !important; font-size: clamp(1.85rem, 3vw, 2.35rem); font-weight: 750; letter-spacing: 0; }
    .section__title::after { content: ''; display: block; width: 3.25rem; height: 3px; border-radius: 999px; background: linear-gradient(90deg, #166a82, rgba(103,183,200,.35)); margin: .75rem auto 0; }
    .section__subtitle { color: var(--portfolio-muted, #667085); letter-spacing: 0; }
    body.dark-theme .section__title { color: #f8fbff !important; }
    body.dark-theme .section__subtitle { color: #cbd5e1 !important; }
    .about.section .section__title, .about.section .about__info-title, .about.section .about__info-name { color: #fff !important; }
    .about.section .about__description { color: #e8eef8 !important; }
    .home__focus { display: flex; flex-wrap: wrap; gap: .55rem; margin: -1rem 0 1.75rem; }
    .home__focus-pill { border: 1px solid rgba(22,106,130,.22); border-radius: 999px; color: #166a82; font-size: var(--smaller-font-size); font-weight: var(--font-medium); padding: .55rem .75rem; background: rgba(22,106,130,.07); }
    .nav__link { border-radius: 999px; padding: .45rem .75rem; position: relative; transition: color .25s ease, background .25s ease, transform .25s ease; }
    .nav__link::after { content: ''; position: absolute; left: 50%; bottom: .18rem; width: 1.15rem; height: 2px; border-radius: 999px; background: #38bdf8; opacity: 0; transform: translateX(-50%) scaleX(.35); transition: opacity .25s ease, transform .25s ease; }
    .nav__link:hover { color: #166a82; background: rgba(22,106,130,.08); transform: translateY(-2px); }
    .nav__link:hover::after, .nav__link.active-link::after { opacity: 1; transform: translateX(-50%) scaleX(1); }
    body.dark-theme .nav__link:hover { color: #e8f7ff; background: rgba(56,189,248,.12); }
    .scroll-header { background: rgba(255,255,255,.86); box-shadow: 0 8px 28px rgba(15,23,42,.08); backdrop-filter: blur(14px); }
    body.dark-theme .scroll-header { background: rgba(16,23,38,.86); box-shadow: 0 8px 28px rgba(0,0,0,.28); }
    .skills__header .skills__titles, .skills__name, .skills__icon { color: #166a82 !important; }
    .skills__subtitle { color: #738196 !important; }
    .skills__bar { overflow: hidden; background: #e6eef3; }
    .skills__percentage { background: linear-gradient(90deg, #166a82, #67b7c8); }
    body.dark-theme .skills__header .skills__titles, body.dark-theme .skills__name, body.dark-theme .skills__icon { color: #7dd3fc !important; }
    body.dark-theme .skills__bar { background: rgba(148,163,184,.28); }
    body.dark-theme .skills__percentage { background: linear-gradient(90deg, #38bdf8, #a5b4fc); }
    .portfolio { overflow: hidden; }
    .portfolio__container { max-width: 1120px; padding: 1.5rem 5rem 5.25rem; overflow: visible; }
    .portfolio__content { position: relative; display: grid; grid-template-columns: minmax(280px,.85fr) minmax(300px,1.15fr); align-items: center; gap: 2rem; min-height: 430px; padding: 3rem; border: 3px solid rgba(255,255,255,.86); border-radius: 2rem; background: radial-gradient(circle at 82% 24%, rgba(255,255,255,.4), transparent 26%), linear-gradient(135deg, #177b98 0%, #18a8b5 46%, #f2b66d 100%); box-shadow: 0 30px 70px rgba(15,23,42,.18); isolation: isolate; overflow: visible; }
    .portfolio__content::before, .portfolio__content::after { content: ''; position: absolute; border: 3px solid rgba(255,255,255,.88); border-radius: 1.45rem; box-shadow: 0 24px 54px rgba(15,23,42,.16); z-index: -1; pointer-events: none; }
    .portfolio__content::before { width: 9rem; height: 12rem; right: -4.25rem; top: 4.75rem; background: linear-gradient(145deg, rgba(232,249,243,.96), rgba(59,213,133,.82)); }
    .portfolio__content::after { width: 7.5rem; height: 8.75rem; right: -1.75rem; bottom: -2.75rem; background: linear-gradient(145deg, rgba(255,241,219,.98), rgba(247,181,98,.82)); }
    .portfolio__content > div { display: flex; flex-direction: column; justify-content: center; min-width: 0; order: 1; z-index: 1; }
    .portfolio__img { width: min(100%, 440px); max-width: none; height: 310px; margin: 0 0 0 auto; border: 3px solid rgba(255,255,255,.88); border-radius: 1.45rem; object-fit: cover; object-position: top center; box-shadow: 0 24px 44px rgba(15,23,42,.24); order: 2; transform: translateX(.75rem); z-index: 1; }
    .portfolio__title { color: #fff !important; font-size: clamp(2rem,4vw,3.2rem); line-height: 1.08; text-shadow: 0 10px 28px rgba(15,23,42,.18); }
    .portfolio__description { color: rgba(255,255,255,.88) !important; font-size: 1rem; line-height: 1.75; }
    .portfolio__tech { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: 1.55rem; }
    .portfolio__tech strong { flex-basis: 100%; color: rgba(255,255,255,.95) !important; font-size: .78rem; letter-spacing: .08em; text-transform: uppercase; }
    .portfolio__tech-chip { border: 1px solid rgba(255,255,255,.22); border-radius: 999px; color: #fff !important; background: rgba(255,255,255,.14); font-size: .76rem; padding: .48rem .68rem; backdrop-filter: blur(10px); }
    .portfolio__btn { display: inline-flex; align-items: center; gap: .45rem; align-self: flex-start; border: 1px solid rgba(255,255,255,.74); border-radius: 999px; background: rgba(255,255,255,.92); color: #172033 !important; font-weight: 700; padding: .82rem 1.1rem; box-shadow: 0 14px 30px rgba(15,23,42,.16); }
    .portfolio__btn:hover { color: #fff !important; background: #172033; border-color: #172033; transform: translateY(-2px); }
    .portfolio__container .swiper-button-prev, .portfolio__container .swiper-button-next { width: 3.15rem; height: 3.15rem; border: 2px solid rgba(255,255,255,.76); border-radius: 999px; background: rgba(255,255,255,.16); color: #fff; box-shadow: 0 18px 36px rgba(15,23,42,.18); backdrop-filter: blur(14px); }
    .portfolio__container .swiper-button-prev { left: 6.4rem; } .portfolio__container .swiper-button-next { right: 6.4rem; }
    .portfolio .swiper-pagination { position: static !important; display: flex !important; flex-direction: row !important; justify-content: center; gap: .55rem; margin-top: -1.25rem; transform: none !important; }
    .portfolio .swiper-pagination-bullet { width: .58rem; height: .58rem; opacity: .34; background: #166a82; }
    .portfolio .swiper-pagination-bullet-active { width: 2rem; border-radius: 999px; opacity: 1; background: #172033; }
    .tour-swiper .swiper-pagination, .tour-swiper .swiper-pagination.swiper-pagination-hidden, .tour-swiper .swiper-pagination.swiper-pagination-lock { position: absolute !important; right: 1.5rem !important; top: 50% !important; left: auto !important; bottom: auto !important; display: flex !important; flex-direction: column !important; gap: .7rem; padding: .65rem .45rem; border: 1px solid rgba(255,255,255,.34); border-radius: 999px; background: rgba(15,23,42,.42); box-shadow: 0 18px 38px rgba(0,0,0,.2); backdrop-filter: blur(14px); transform: translateY(-50%) !important; opacity: 1 !important; visibility: visible !important; z-index: 20; }
    .tour-swiper .swiper-pagination-bullet { display: block !important; width: .72rem; height: .72rem; margin: 0 !important; border: 2px solid rgba(255,255,255,.9); background: rgba(255,255,255,.36); opacity: 1 !important; visibility: visible !important; }
    .tour-swiper .swiper-pagination-bullet-active { height: 2rem; background: linear-gradient(180deg, #38bdf8, #177b98); }
    .contact.section { padding-bottom: 5rem; }
    .contact__container { position: relative; max-width: 760px; border: 1px solid rgba(148,163,184,.18); border-radius: 1.35rem; background: radial-gradient(circle at 12% 0%, rgba(22,106,130,.12), transparent 34%), linear-gradient(180deg, rgba(255,255,255,.98), rgba(248,252,254,.96)); box-shadow: 0 24px 60px rgba(15,23,42,.08); padding: 2rem !important; overflow: hidden; }
    .contact__container::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(22,106,130,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(22,106,130,.055) 1px, transparent 1px); background-size: 34px 34px; pointer-events: none; }
    .contact__content, .progressbar { position: relative; z-index: 1; }
    .contact__title { color: #172033 !important; font-size: 1.35rem; text-align: center; }
    .contact__description { color: #667085 !important; text-align: center; }
    .progressbar { max-width: 520px; margin: 0 auto 2rem; }
    .progress { background: linear-gradient(90deg, #166a82, #67b7c8) !important; }
    .progress-step { width: 2.45rem !important; height: 2.45rem !important; border: 1px solid rgba(22,106,130,.2); background: #fff !important; box-shadow: 0 10px 24px rgba(15,23,42,.08); }
    .progress-step-active { border-color: rgba(22,106,130,.38); background: #e9f7fb !important; }
    .wizard__choices { max-width: 640px; gap: .85rem; padding: 1.25rem 0 0; }
    .wizard__btn { display: inline-flex; align-items: center; justify-content: flex-start; gap: .75rem; min-height: 3.75rem; padding: .85rem 1rem; border: 1px solid rgba(22,106,130,.18); border-radius: .7rem; background: #fff; color: #172033; font-weight: 650; box-shadow: 0 8px 22px rgba(15,23,42,.05); transition: border-color .25s ease, background .25s ease, box-shadow .25s ease, transform .25s ease; }
    .wizard__btn i { display: inline-flex; align-items: center; justify-content: center; width: 2.15rem; height: 2.15rem; border-radius: .55rem; background: rgba(22,106,130,.08); color: #166a82; font-size: 1.15rem; }
    .wizard__btn:hover { border-color: rgba(22,106,130,.35); background: #f8fcfe; box-shadow: 0 14px 32px rgba(15,23,42,.08); transform: translateY(-2px); }
    .wizard__btn:hover i { background: #166a82; color: #fff; }
    .wizard__buttons .wizard__btn { justify-content: center; width: auto; min-width: 8.5rem; }
    .wizard__btn.primary { border-color: #172033; background: #172033; color: #fff; }
    .wizard__btn.primary:hover { background: #166a82; border-color: #166a82; }
    body.dark-theme .contact__container { border-color: rgba(56,189,248,.18); background: radial-gradient(circle at 12% 0%, rgba(56,189,248,.14), transparent 34%), linear-gradient(180deg, rgba(16,23,38,.96), rgba(15,23,42,.94)); box-shadow: 0 24px 60px rgba(0,0,0,.24); }
    body.dark-theme .contact__title { color: #f8fbff !important; } body.dark-theme .contact__description { color: #cbd5e1 !important; }
    body.dark-theme .wizard__btn { border-color: rgba(148,163,184,.18) !important; background: rgba(30,41,59,.72) !important; color: #e8eef8 !important; }
    body.dark-theme .wizard__btn i { background: rgba(56,189,248,.12); color: #38bdf8; }
    .location { overflow: hidden; }
    .location__container { display: grid; grid-template-columns: minmax(220px,.8fr) minmax(340px,1.35fr) minmax(240px,.9fr); gap: 1.25rem; align-items: stretch; }
    .location__panel, .location__map-card { position: relative; min-height: 23rem; border: 1px solid rgba(148,163,184,.18); border-radius: 1.2rem; background: radial-gradient(circle at 20% 0%, rgba(56,189,248,.18), transparent 34%), linear-gradient(145deg, #07152f 0%, #0f2044 48%, #092c48 100%); color: #e8f7ff; box-shadow: 0 24px 58px rgba(15,23,42,.18); overflow: hidden; }
    .location__panel { display: flex; flex-direction: column; justify-content: space-between; padding: 1.35rem; }
    .location__panel::before, .location__map-card::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(125,211,252,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,.09) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; }
    .location__eyebrow { display: inline-flex; width: fit-content; border: 1px solid rgba(125,211,252,.2); border-radius: 999px; background: rgba(14,165,233,.12); color: #7dd3fc; font-size: .72rem; font-weight: 700; letter-spacing: .08em; padding: .45rem .65rem; text-transform: uppercase; }
    .location__panel h3, .location__map-card h3 { color: #fff; font-size: 1.45rem; line-height: 1.2; margin: .85rem 0 .5rem; }
    .location__panel p, .location__updated { color: rgba(226,232,240,.78); font-size: .88rem; line-height: 1.65; margin: 0; }
    .location__nz-visual { position: relative; height: 13rem; margin: 1rem 0; border: 1px solid rgba(125,211,252,.18); border-radius: 1rem; background: radial-gradient(circle at 58% 34%, rgba(56,189,248,.24), transparent 20%), linear-gradient(145deg, rgba(30,64,175,.5), rgba(8,47,73,.35)); overflow: hidden; }
    .location__nz-svg { position: absolute; inset: .75rem; width: calc(100% - 1.5rem); height: calc(100% - 1.5rem); }
    .location__nz-land { fill: url(#nzLandGradient); filter: drop-shadow(0 18px 18px rgba(8,47,73,.34)); }
    .location__nz-route { fill: none; stroke: rgba(255,255,255,.58); stroke-dasharray: 4 6; stroke-width: 2; }
    .location__pin { position: absolute; top: 4.85rem; left: 8.95rem; width: 1rem; height: 1rem; border: 3px solid #fff; border-radius: 50% 50% 50% 0; background: #ef4444; box-shadow: 0 0 0 .45rem rgba(239,68,68,.18); transform: rotate(-45deg); z-index: 2; }
    .location__pin::after { content: ''; position: absolute; inset: .18rem; border-radius: 50%; background: #fff; }
    .location__map-card { padding: 1rem; } .location__map-header { position: relative; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: .35rem .35rem 1rem; }
    .location__status { border-radius: 999px; background: rgba(34,197,94,.14); color: #bbf7d0; font-size: .78rem; font-weight: 700; padding: .55rem .7rem; }
    .location__map { position: relative; z-index: 1; height: 18.8rem; border: 3px solid rgba(255,255,255,.82); border-radius: 1rem; background: #0f172a; overflow: hidden; }
    .location__weather-grid { display: grid; gap: .75rem; margin: 1rem 0; }
    .location__weather-card { border: 1px solid rgba(125,211,252,.16); border-radius: .9rem; background: rgba(255,255,255,.08); padding: .85rem; backdrop-filter: blur(12px); }
    .location__weather-card span { display: block; color: rgba(226,232,240,.72); font-size: .76rem; margin-bottom: .3rem; }
    .location__weather-card strong { color: #fff; font-size: 1.45rem; line-height: 1; }
    @media screen and (max-width: 767px) {
        .nav__menu { left: 50%; right: auto; bottom: -110%; width: min(94vw,28rem); max-height: 72vh; overflow-y: auto; padding: 3.25rem 1.25rem 2rem; border-radius: 1.25rem 1.25rem 0 0; box-shadow: 0 -18px 42px rgba(15,23,42,.16); transform: translateX(-50%); }
        .nav__menu.show-menu { bottom: 0; }
        .nav__menu::before { content: ''; position: absolute; top: .85rem; left: 50%; width: 2.75rem; height: 4px; border-radius: 999px; background: rgba(100,116,139,.28); transform: translateX(-50%); }
        .nav__close { top: .75rem; right: .9rem; bottom: auto; display: inline-flex; align-items: center; justify-content: center; width: 2.25rem; height: 2.25rem; border-radius: 999px; background: rgba(22,106,130,.08); color: #172033; font-size: 1.15rem; }
        .wizard__choices { grid-template-columns: 1fr; width: min(100%,22rem); max-width: 22rem; gap: .75rem; padding: 1rem 0 0; margin-top: 1.25rem; }
        .wizard__btn { width: 100%; min-height: 3.55rem; justify-content: flex-start; padding: .75rem .85rem; white-space: normal; text-align: left; }
        .portfolio__container { padding: .5rem .95rem 3.75rem; }
        .portfolio__content { grid-template-columns: 1fr; gap: 1rem; min-height: auto; padding: 1rem; border-radius: 1.35rem; }
        .portfolio__content::before, .portfolio__content::after { display: none; }
        .portfolio__content > div { order: 2; } .portfolio__img { order: 1; width: 100%; height: 220px; margin: 0; border-radius: 1rem; transform: none; }
        .portfolio__title { font-size: 1.75rem; } .portfolio__description { font-size: .9rem; line-height: 1.6; }
        .portfolio__container .swiper-button-prev, .portfolio__container .swiper-button-next { display: none; }
        .location__container { grid-template-columns: 1fr; } .location__panel, .location__map-card { min-height: auto; } .location__map { height: 18rem; }
        .tour-swiper .swiper-pagination { right: .85rem !important; padding: .5rem .34rem; }
    }
`;
document.head.appendChild(styles);

const aboutDescription = document.querySelector('.about__description');
const aboutInfoTitles = document.querySelectorAll('.about__info-title');
const aboutInfoNames = document.querySelectorAll('.about__info-name');
const homeDescription = document.querySelector('.home__description');
const homeData = document.querySelector('.home__data');
if (homeDescription) homeDescription.textContent = 'Data Engineer and BI Developer focused on ETL pipelines, SQL, Power BI, geospatial analytics, and AI-assisted workflows that turn raw data into reliable insights.';
if (homeData && !document.querySelector('.home__focus')) {
    const focus = document.createElement('div');
    focus.className = 'home__focus';
    ['ETL Development', 'Power BI & DAX'].forEach((label) => {
        const pill = document.createElement('span');
        pill.className = 'home__focus-pill';
        pill.textContent = label;
        focus.appendChild(pill);
    });
    homeDescription?.after(focus);
}
if (aboutDescription) aboutDescription.textContent = "Hi, I'm Cornelio Parole III, a data-focused developer with less than 3 years of experience in ETL development, data engineering, analytics, and reporting. I enjoy learning new platforms, improving my skills in SQL, Power BI, Azure Data Factory, KNIME, geospatial mapping, and AI-assisted development, while also building web development projects as a hobby. I'm passionate about turning raw data into clear insights and reliable data solutions.";
if (aboutInfoTitles[0]) aboutInfoTitles[0].textContent = '<03';
if (aboutInfoNames[1]) aboutInfoNames[1].innerHTML = 'Available to Message<br />';

const contactChoiceIcons = { 'Job Opportunity': 'uil-briefcase-alt', Collaboration: 'uil-users-alt', Consultation: 'uil-comment-question', 'General Message': 'uil-comment-alt-message' };
document.querySelectorAll('#step1 .wizard__btn').forEach((button) => {
    const label = Object.keys(contactChoiceIcons).find((item) => button.textContent.includes(item));
    if (label) button.innerHTML = `<i class="uil ${contactChoiceIcons[label]}" aria-hidden="true"></i><span>${label}</span>`;
});
const backButton = document.querySelector('#step2 .wizard__btn.secondary');
if (backButton) backButton.innerHTML = '<i class="uil uil-arrow-left" aria-hidden="true"></i><span>Back</span>';
const sendButton = document.querySelector('#step2 .wizard__btn.primary');
if (sendButton) sendButton.innerHTML = '<i class="uil uil-message" aria-hidden="true"></i><span>Send Message</span>';

function ensureLocationSection() {
    if (!document.querySelector('.nav__menu a[href="#location"]')) {
        const item = document.createElement('li');
        item.className = 'nav__items';
        item.innerHTML = '<a href="#location" class="nav__link"><i class="uil uil-map-marker nav__icon"></i> Location</a>';
        document.querySelector('.nav__list')?.appendChild(item);
        item.querySelector('.nav__link')?.addEventListener('click', linkAction);
    }
    const about = document.getElementById('about');
    const section = document.getElementById('location') || document.createElement('section');
    if (!about && !section.id) return;
    section.className = 'location section';
    section.id = 'location';
    section.innerHTML = `
        <h2 class="section__title">Location</h2>
        <span class="section__subtitle">Pukekohe, Auckland Region</span>
        <div data-aos="fade-up" class="location__container container">
            <article class="location__panel">
                <span class="location__eyebrow">Residing Place</span>
                <h3>New Zealand</h3>
                <div class="location__nz-visual" aria-hidden="true">
                    <svg class="location__nz-svg" viewBox="0 0 220 180" role="presentation">
                        <defs><linearGradient id="nzLandGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7dd3fc" /><stop offset="58%" stop-color="#1f9fbd" /><stop offset="100%" stop-color="#116a82" /></linearGradient></defs>
                        <path class="location__nz-route" d="M126 44 C112 62 110 78 103 92 C96 108 79 124 70 144" />
                        <path class="location__nz-land" d="M135 20 C154 25 164 38 162 55 C160 70 147 73 143 87 C139 103 151 111 145 124 C139 138 116 132 110 117 C105 103 114 94 116 81 C118 69 105 63 111 47 C115 35 123 24 135 20 Z" />
                        <path class="location__nz-land" d="M82 73 C96 82 101 99 93 116 C85 133 71 149 56 164 C43 177 28 169 33 151 C38 132 52 121 54 104 C56 88 66 69 82 73 Z" />
                        <path class="location__nz-land" d="M165 88 C178 91 187 101 185 113 C183 124 169 129 159 121 C150 114 151 98 165 88 Z" opacity=".82" />
                    </svg>
                    <span class="location__pin"></span>
                </div>
                <p>Currently based around Pukekohe in the Auckland Region, working with data, BI, and modern development tools.</p>
            </article>
            <article class="location__map-card">
                <div class="location__map-header"><div><span class="location__eyebrow">Interactive Map</span><h3>Pukekohe Focus</h3></div><span class="location__status" id="weatherStatus">Live</span></div>
                <div id="aucklandMap" class="location__map" role="img" aria-label="Interactive map showing Pukekohe, Auckland Region, New Zealand"></div>
            </article>
            <article class="location__panel location__weather">
                <span class="location__eyebrow">Live Weather</span><h3>Pukekohe Now</h3>
                <div class="location__weather-grid"><div class="location__weather-card"><span>Temperature</span><strong id="weatherTemp">--</strong></div><div class="location__weather-card"><span>Feels Like</span><strong id="weatherFeels">--</strong></div><div class="location__weather-card"><span>Wind</span><strong id="weatherWind">--</strong></div></div>
                <p class="location__updated" id="weatherUpdated">Updating live Pukekohe weather...</p>
            </article>
        </div>`;
    about?.insertAdjacentElement('afterend', section);
}

function loadLeafletResources(callback) {
    if (typeof L !== 'undefined') { callback(); return; }
    if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
    }
    const existingScript = document.querySelector('script[src*="leaflet.js"]');
    if (existingScript) { existingScript.addEventListener('load', callback, { once: true }); return; }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = callback;
    document.body.appendChild(script);
}
function initLocationMap() {
    const mapEl = document.getElementById('aucklandMap');
    if (!mapEl || typeof L === 'undefined' || mapEl.dataset.ready === 'true') return;
    const pukekohe = [-37.2004, 174.9010];
    const map = L.map(mapEl, { zoomControl: true, scrollWheelZoom: false }).setView(pukekohe, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
    L.marker(pukekohe).addTo(map).bindPopup('<strong>Pukekohe, New Zealand</strong><br>Current residing area').openPopup();
    mapEl.dataset.ready = 'true';
    setTimeout(() => map.invalidateSize(), 250);
}
const weatherCodeLabels = { 0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast', 45: 'Foggy', 48: 'Rime fog', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle', 61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 80: 'Rain showers', 95: 'Thunderstorm' };
function setText(id, value) { const element = document.getElementById(id); if (element) element.innerHTML = value; }
async function updateAucklandWeather() {
    const status = document.getElementById('weatherStatus');
    const updated = document.getElementById('weatherUpdated');
    const endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=-37.2004&longitude=174.9010&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Pacific%2FAuckland';
    try {
        if (status) status.textContent = 'Updating';
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Weather request failed');
        const current = (await response.json()).current || {};
        const condition = weatherCodeLabels[current.weather_code] || 'Live conditions';
        const observed = current.time ? new Date(current.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'now';
        setText('weatherTemp', `${Math.round(current.temperature_2m)}&deg;C`);
        setText('weatherFeels', `${Math.round(current.apparent_temperature)}&deg;C`);
        setText('weatherWind', `${Math.round(current.wind_speed_10m)} km/h`);
        if (updated) updated.textContent = `${condition}. Humidity ${Math.round(current.relative_humidity_2m)}%. Updated ${observed}.`;
        if (status) status.textContent = 'Live';
    } catch {
        if (updated) updated.textContent = 'Live Pukekohe weather is temporarily unavailable. Please refresh again later.';
        if (status) status.textContent = 'Offline';
    }
}
ensureLocationSection();
loadLeafletResources(initLocationMap);
updateAucklandWeather();
setInterval(updateAucklandWeather, 10 * 60 * 1000);

document.querySelectorAll('.portfolio__tech').forEach((tech) => {
    if (tech.dataset.enhanced === 'true') return;
    const strongText = tech.querySelector('strong')?.textContent || 'Tech Used:';
    const techList = tech.textContent.replace(strongText, '').split(',').map((item) => item.trim()).filter(Boolean);
    tech.innerHTML = `<strong>${strongText}</strong>`;
    techList.forEach((label) => { const chip = document.createElement('span'); chip.className = 'portfolio__tech-chip'; chip.textContent = label; tech.appendChild(chip); });
    tech.dataset.enhanced = 'true';
});
function createSkillData(name, level) {
    const skill = document.createElement('div');
    skill.className = 'skills__data';
    skill.innerHTML = `<div class="skills__titles"><h3 class="skills__name">${name}</h3><span class="skills__number">${level}%</span></div><div class="skills__bar"><span class="skills__percentage"></span></div>`;
    return skill;
}
function addSkillItem(sectionTitle, name, level) {
    const section = Array.from(document.querySelectorAll('.skills__content')).find((content) => content.querySelector('.skills__titles')?.textContent.trim() === sectionTitle);
    if (!section || section.querySelector(`[data-skill="${name}"]`)) return;
    const skill = createSkillData(name, level);
    skill.dataset.skill = name;
    section.querySelector('.skills__list')?.appendChild(skill);
}
function addSkillSection({ title, subtitle, icon, skills, column = 'right' }) {
    const container = document.querySelector(column === 'left' ? '.skills__container > div:first-child' : '.skills__container > div:last-child');
    const exists = Array.from(document.querySelectorAll('.skills__content .skills__titles')).some((heading) => heading.textContent.trim() === title);
    if (!container || exists) return;
    const section = document.createElement('div');
    section.className = 'skills__content skills__close';
    section.innerHTML = `<div class="skills__header"><i class="uil ${icon} skills__icon"></i><div><h1 class="skills__titles">${title}</h1><span class="skills__subtitle">${subtitle}</span></div><i class="uil uil-angle-down skills__arrow"></i></div><div class="skills__list grid"></div>`;
    const list = section.querySelector('.skills__list');
    skills.forEach(({ name, level }) => list.appendChild(createSkillData(name, level)));
    container.appendChild(section);
    section.querySelector('.skills__header').addEventListener('click', toggleSkills);
}
document.querySelectorAll('.skills__content .skills__titles').forEach((title) => {
    if (title.textContent.trim() === 'Data Engineering & ETL') title.parentElement.querySelector('.skills__subtitle').textContent = 'Less than 3 years';
});
addSkillItem('Data Engineering & ETL', 'KNIME Analytics Platform', 70);
addSkillItem('Business Intelligence & Reporting', 'DAX Measures & Calculations', 75);
addSkillSection({ title: 'Geospatial Analytics & Mapping', subtitle: 'Mapbox, Power BI Maps & Location-Based Analysis', icon: 'uil-map-marker', column: 'left', skills: [{ name: 'Mapbox Map Development for Power BI', level: 70 }, { name: 'Map-Based Data Analysis', level: 75 }, { name: 'Geospatial Data Visualization', level: 70 }] });
addSkillSection({ title: 'AI-Assisted Development', subtitle: 'Codex, Copilot & AI-Enhanced Workflows', icon: 'uil-robot', column: 'left', skills: [{ name: 'OpenAI Codex for Development Support', level: 75 }, { name: 'GitHub Copilot-Assisted Coding', level: 75 }, { name: 'AI-Driven Debugging & Workflow Automation', level: 70 }] });
document.querySelectorAll('.skills__data').forEach((skill) => {
    const number = skill.querySelector('.skills__number');
    const percentage = skill.querySelector('.skills__percentage');
    if (number && percentage) percentage.style.width = number.textContent.trim();
});
const modalViews = document.querySelectorAll('.services__modal');
document.querySelectorAll('.services__button').forEach((modalBtn, i) => modalBtn.addEventListener('click', () => modalViews[i]?.classList.add('active-modal')));
document.querySelectorAll('.services__modal-close').forEach((modalClose) => modalClose.addEventListener('click', () => modalViews.forEach((modalView) => modalView.classList.remove('active-modal'))));
const swiperPortfolio = new Swiper('.portfolio__container', { slidesPerView: 1, loop: false, spaceBetween: 0, centeredSlides: false, navigation: { nextEl: '.portfolio .swiper-button-next', prevEl: '.portfolio .swiper-button-prev' }, pagination: { el: '.portfolio .swiper-pagination', clickable: true } });
const swiperTestimonial = new Swiper('.testimonial__container', { loop: true, grabCursor: true, spaceBetween: 48, pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true }, breakpoints: { 568: { slidesPerView: 2 } } });
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (!navItem) return;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) navItem.classList.add('active-link');
        else navItem.classList.remove('active-link');
    });
}
function scrollHeader() { const nav = document.getElementById('header'); if (this.scrollY >= 80) nav?.classList.add('scroll-header'); else nav?.classList.remove('scroll-header'); }
function scrollUp() { const scrollUpButton = document.getElementById('scroll-up'); if (this.scrollY >= 560) scrollUpButton?.classList.add('show-scroll'); else scrollUpButton?.classList.remove('show-scroll'); }
window.addEventListener('scroll', scrollActive);
window.addEventListener('scroll', scrollHeader);
window.addEventListener('scroll', scrollUp);
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton?.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}
themeButton?.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
