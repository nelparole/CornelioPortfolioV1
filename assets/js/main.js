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
body:not(.dark-theme){--ink:#102033;--muted:#667085}.section__title{color:var(--ink)!important;font-size:clamp(1.85rem,3vw,2.35rem);font-weight:750;letter-spacing:0}.section__title::after{content:'';display:block;width:3.25rem;height:3px;border-radius:999px;background:#102033;margin:.75rem auto 0}.section__subtitle{color:var(--muted);letter-spacing:0}body.dark-theme .section__title{color:#f8fbff!important}body.dark-theme .section__subtitle{color:#cbd5e1!important}.about.section .section__title,.about.section .about__info-title,.about.section .about__info-name{color:#fff!important}.about.section .about__description{color:#e8eef8!important}
.home__focus{display:flex;flex-wrap:wrap;gap:.55rem;margin:-1rem 0 1.75rem}.home__focus-pill{border:1px solid rgba(16,32,51,.18);border-radius:999px;color:#102033;font-size:var(--smaller-font-size);font-weight:var(--font-medium);padding:.55rem .75rem;background:rgba(16,32,51,.06)}
.nav__link{border-radius:999px;padding:.45rem .75rem;position:relative;transition:color .25s,background .25s,transform .25s}.nav__link::after{content:'';position:absolute;left:50%;bottom:.18rem;width:1.15rem;height:2px;border-radius:999px;background:#38bdf8;opacity:0;transform:translateX(-50%) scaleX(.35);transition:opacity .25s,transform .25s}.nav__link:hover{color:#166a82;background:rgba(22,106,130,.08);transform:translateY(-2px)}.nav__link:hover::after,.nav__link.active-link::after{opacity:1;transform:translateX(-50%) scaleX(1)}body.dark-theme .nav__link:hover{color:#e8f7ff;background:rgba(56,189,248,.12)}.scroll-header{background:rgba(255,255,255,.86);box-shadow:0 8px 28px rgba(15,23,42,.08);backdrop-filter:blur(14px)}body.dark-theme .scroll-header{background:rgba(16,23,38,.86);box-shadow:0 8px 28px rgba(0,0,0,.28)}
.skills__header .skills__titles,.skills__name,.skills__icon{color:#166a82!important}.skills__subtitle{color:#738196!important}.skills__bar{overflow:hidden;background:#e6eef3}.skills__percentage{background:linear-gradient(90deg,#166a82,#67b7c8)}body.dark-theme .skills__header .skills__titles,body.dark-theme .skills__name,body.dark-theme .skills__icon{color:#7dd3fc!important}body.dark-theme .skills__bar{background:rgba(148,163,184,.28)}body.dark-theme .skills__percentage{background:linear-gradient(90deg,#38bdf8,#a5b4fc)}
.portfolio{overflow:hidden}.portfolio__container{max-width:1080px;padding:1rem 4rem 4.5rem;overflow:visible;perspective:1300px}.portfolio__content{position:relative;display:grid;grid-template-columns:minmax(280px,.9fr) minmax(280px,1.1fr);align-items:center;gap:2rem;min-height:430px;padding:2rem;border:1px solid rgba(255,255,255,.14);border-radius:1.65rem;background:radial-gradient(circle at 20% 10%,rgba(103,183,200,.34),transparent 28%),linear-gradient(135deg,#0f172a 0%,#123247 52%,#166a82 100%);box-shadow:0 32px 80px rgba(15,23,42,.24);overflow:visible;transform:rotateX(4deg) rotateY(-5deg);transition:transform .45s,box-shadow .45s}.portfolio__content:hover{transform:rotateX(0deg) rotateY(0deg) translateY(-6px);box-shadow:0 38px 92px rgba(15,23,42,.3)}.portfolio__content::before{content:'';position:absolute;right:2rem;bottom:2rem;width:10rem;height:10rem;border:1px solid rgba(255,255,255,.14);border-radius:2rem;background:linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,.04));transform:translateZ(42px) rotate(10deg);backdrop-filter:blur(14px);pointer-events:none}.portfolio__content::after{content:'';position:absolute;right:36%;top:1.6rem;width:7rem;height:7rem;border-radius:999px;background:radial-gradient(circle,rgba(217,164,65,.4),transparent 66%);transform:translateZ(70px);pointer-events:none}.portfolio__content>div{display:flex;flex-direction:column;justify-content:center;min-width:0;order:1;z-index:1;transform:translateZ(48px)}.portfolio__img{order:2;width:min(100%,460px);max-width:none;height:300px;margin:0 0 0 auto;border:8px solid rgba(255,255,255,.9);border-radius:1.15rem;object-fit:cover;object-position:top center;box-shadow:0 26px 58px rgba(0,0,0,.28);transform:translateZ(58px) rotate(1deg);z-index:1}.portfolio__title{color:#fff!important;font-size:clamp(1.9rem,3.4vw,2.75rem);line-height:1.1}.portfolio__description{color:#dbeafe!important;max-width:34rem;font-size:.95rem;line-height:1.68}.portfolio__tech{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.35rem}.portfolio__tech strong{flex-basis:100%;color:#8bd9ee!important;font-size:.75rem;letter-spacing:.08em;text-transform:uppercase}.portfolio__tech-chip{border:1px solid rgba(255,255,255,.14);border-radius:999px;color:#e8f7ff!important;background:rgba(255,255,255,.08);font-size:.74rem;font-weight:650;padding:.45rem .65rem}.portfolio__btn{display:inline-flex;align-items:center;gap:.45rem;align-self:flex-start;border:1px solid rgba(255,255,255,.18);border-radius:.8rem;background:#fff;color:#102033!important;font-weight:750;padding:.85rem 1.1rem;box-shadow:0 14px 28px rgba(0,0,0,.14)}.portfolio__btn:hover{background:#d9a441;border-color:#d9a441;color:#102033!important;transform:translateY(-2px)}
.portfolio__container .swiper-button-prev,.portfolio__container .swiper-button-next{top:auto;bottom:1.1rem;width:auto;height:2.75rem;border:1px solid rgba(255,255,255,.16);border-radius:.85rem;background:#102033;color:#fff;box-shadow:0 18px 36px rgba(15,23,42,.16);padding:0 1rem}.portfolio__container .swiper-button-prev::before,.portfolio__container .swiper-button-next::before{font-family:var(--body-font);font-size:.78rem;font-weight:750;letter-spacing:.04em;text-transform:uppercase}.portfolio__container .swiper-button-prev::before{content:'Prev'}.portfolio__container .swiper-button-next::before{content:'Next'}.portfolio__container .swiper-button-prev::after,.portfolio__container .swiper-button-next::after{font-size:.9rem;font-weight:800}.portfolio__container .swiper-button-prev{left:auto;right:8.15rem}.portfolio__container .swiper-button-next{right:4rem}.portfolio__container .swiper-button-prev:hover,.portfolio__container .swiper-button-next:hover{background:#166a82;transform:translateY(-2px)}.portfolio .swiper-pagination{position:static!important;display:flex!important;justify-content:center;gap:.55rem;margin-top:-1rem;transform:none!important}.portfolio .swiper-pagination-bullet{width:.55rem;height:.55rem;opacity:1;background:#b8ccd3}.portfolio .swiper-pagination-bullet-active{width:2rem;border-radius:999px;background:#166a82}
.tour-swiper .swiper-pagination,.tour-swiper .swiper-pagination.swiper-pagination-hidden,.tour-swiper .swiper-pagination.swiper-pagination-lock{position:absolute!important;right:1.5rem!important;top:50%!important;left:auto!important;bottom:auto!important;display:flex!important;flex-direction:column!important;gap:.7rem;padding:.65rem .45rem;border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(15,23,42,.42);box-shadow:0 18px 38px rgba(0,0,0,.2);backdrop-filter:blur(14px);transform:translateY(-50%)!important;opacity:1!important;visibility:visible!important;z-index:20}.tour-swiper .swiper-pagination-bullet{display:block!important;width:.72rem;height:.72rem;margin:0!important;border:2px solid rgba(255,255,255,.9);background:rgba(255,255,255,.36);opacity:1!important;visibility:visible!important}.tour-swiper .swiper-pagination-bullet-active{height:2rem;background:linear-gradient(180deg,#38bdf8,#177b98)}
.contact.section{padding-bottom:5rem}.contact__container{position:relative;display:grid;grid-template-columns:minmax(230px,.78fr) minmax(360px,1.22fr);gap:0;max-width:920px;border:1px solid rgba(15,32,51,.1);border-radius:.35rem;background:#fff;box-shadow:0 24px 60px rgba(15,23,42,.09);padding:0!important;overflow:hidden}.contact__info-card{position:relative;display:flex;flex-direction:column;justify-content:space-between;min-height:30rem;background:#202020;color:#fff;padding:2rem;overflow:hidden}.contact__info-card::after{content:'';position:absolute;right:-1.5rem;bottom:3rem;width:6rem;height:6rem;border-radius:50%;background:rgba(255,255,255,.08)}.contact__info-title{color:#fff;font-size:1.1rem;margin-bottom:.35rem}.contact__info-subtitle{color:rgba(255,255,255,.68);font-size:.82rem;line-height:1.55;margin-bottom:1.75rem}.contact__info-list{display:grid;gap:1.1rem}.contact__info-item{display:grid;grid-template-columns:1.45rem 1fr;gap:.7rem;color:rgba(255,255,255,.82);font-size:.78rem;line-height:1.55}.contact__info-item i{color:#fff;font-size:1rem}.contact__info-social{display:flex;gap:.75rem;position:relative;z-index:1}.contact__info-social a{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:999px;background:rgba(255,255,255,.08);color:#fff}.contact__body{padding:2.15rem 2.35rem}.contact__content,.progressbar{position:relative;z-index:1}.contact__title{color:#102033!important;font-size:1.12rem;text-align:center}.contact__description{color:#617083!important;font-size:.9rem;text-align:center}.progressbar{max-width:480px;margin:0 auto 1.65rem}.progress{background:#102033!important}.progress-step{width:2.35rem!important;height:2.35rem!important;border:1px solid rgba(16,32,51,.16);background:#fff!important;box-shadow:none}.progress-step-active{border-color:#102033;background:#f2f6f8!important}.wizard__choices{max-width:620px;gap:.7rem;padding:1.1rem 0 0}.wizard__btn{display:inline-flex;align-items:center;justify-content:flex-start;gap:.8rem;min-height:3.25rem;padding:.75rem 1rem;border:1px solid rgba(16,32,51,.1);border-radius:.2rem;background:#fff;color:#102033;font-weight:680;box-shadow:none;transition:background .25s,transform .25s,border-color .25s}.wizard__btn i{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:.25rem;background:#f3f6f8;color:#102033;font-size:1.05rem}.wizard__btn:hover{border-color:#102033;background:#f9fbfc;transform:translateY(-1px)}.wizard__btn:hover i{background:#102033;color:#fff}.wizard__buttons .wizard__btn{justify-content:center;width:auto;min-width:8.5rem}.wizard__btn.primary{background:#202020;color:#fff}.wizard__btn.primary:hover{background:#102033}
.location{overflow:hidden}.location__container{display:grid;grid-template-columns:minmax(240px,.82fr) minmax(360px,1.45fr);gap:1.25rem}.location__panel,.location__map-card{position:relative;min-height:22.5rem;border:1px solid rgba(16,32,51,.13);border-radius:1.45rem;background:linear-gradient(180deg,#fff,#f8fcfd);color:#102033;box-shadow:0 22px 55px rgba(15,23,42,.08);overflow:hidden}.location__panel{display:flex;flex-direction:column;justify-content:space-between;padding:1.35rem}.location__panel::before,.location__map-card::before{content:'';position:absolute;top:0;left:0;right:0;height:.32rem;background:#102033;pointer-events:none}.location__eyebrow{display:inline-flex;width:fit-content;border:1px solid rgba(16,32,51,.14);border-radius:999px;background:#f2f6f8;color:#102033;font-size:.7rem;font-weight:750;letter-spacing:.08em;padding:.42rem .64rem;text-transform:uppercase}.location__panel h3,.location__map-card h3{color:#102033;font-size:1.2rem;line-height:1.2;margin:.85rem 0 .5rem}.location__panel p,.location__updated{color:#667085;font-size:.88rem;line-height:1.65;margin:0}.location__map-credit{color:#8a98aa;font-size:.7rem;margin-top:.4rem}.location__nz-visual{height:15.5rem;display:grid;place-items:center;margin:1rem 0;border:1px solid rgba(16,32,51,.12);border-radius:1rem;background:radial-gradient(circle at 50% 42%,rgba(103,183,200,.16),transparent 42%),linear-gradient(145deg,#f6fcfe,#e8f6fa);overflow:hidden}.location__nz-img{width:min(78%,12rem);height:13.5rem;object-fit:contain;opacity:.9;filter:drop-shadow(0 18px 18px rgba(15,23,42,.12));animation:locationFloat 5s ease-in-out infinite}.location__map-card{min-height:28rem;padding:1.15rem}.location__map-header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.35rem .35rem .85rem}.location__status{border-radius:999px;background:#e9f8ef;color:#137a3f;font-size:.78rem;font-weight:700;padding:.55rem .7rem}.location__map{position:relative;z-index:1;height:20rem;border:1px solid rgba(16,32,51,.13);border-radius:1.2rem;background:#edf7fa;overflow:hidden}.location__route-panel{position:relative;z-index:2;display:grid;gap:.65rem;margin-bottom:.85rem;padding:.85rem;border:1px solid rgba(16,32,51,.12);border-radius:1rem;background:#f6fbfd}.location__route-label{color:#102033;font-size:.8rem;font-weight:750}.location__route-row{display:grid;grid-template-columns:1fr auto;gap:.55rem}.location__route-input{width:100%;border:1px solid rgba(16,32,51,.16);border-radius:.75rem;background:#fff;color:#102033;font-family:var(--body-font);font-size:.85rem;padding:.78rem .9rem;outline:none}.location__route-button{border:0;border-radius:.75rem;background:#102033;color:#fff;cursor:pointer;font-family:var(--body-font);font-size:.85rem;font-weight:750;padding:.78rem 1rem}.location__route-result{min-height:1.2rem;color:#667085;font-size:.8rem;line-height:1.45}.location__route-line{stroke:#102033;stroke-width:5;stroke-linecap:round;stroke-dasharray:12 14;animation:routeDash 1.4s linear infinite}.location__weather{grid-column:1/-1;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:1rem 1.5rem;min-height:auto}.location__weather-grid{display:grid;grid-template-columns:repeat(3,minmax(130px,1fr));gap:.75rem;margin:0}.location__weather-card{border:1px solid rgba(16,32,51,.11);border-radius:.85rem;background:#f5fafc;padding:.85rem}.location__weather-card span{display:block;color:#667085;font-size:.76rem;margin-bottom:.3rem}.location__weather-card strong{color:#102033;font-size:1.45rem}.location .leaflet-popup-content{margin:.7rem .85rem;font-size:.78rem;line-height:1.35}.location .leaflet-popup-content strong{font-size:.8rem}.location .leaflet-container{font:11px/1.4 var(--body-font)}.location .leaflet-control-zoom a{width:1.75rem;height:1.75rem;line-height:1.75rem;font-size:1rem}
@keyframes locationFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}@keyframes routeDash{to{stroke-dashoffset:-52}}
body.dark-theme .portfolio__content{background:radial-gradient(circle at 20% 10%,rgba(125,211,252,.18),transparent 28%),linear-gradient(135deg,#0f172a,#111827 58%,#0b3144)}body.dark-theme .contact__container{border-color:rgba(125,211,252,.16);background:#0f172a}body.dark-theme .contact__title,body.dark-theme .location__panel h3,body.dark-theme .location__map-card h3,body.dark-theme .location__weather-card strong,body.dark-theme .location__route-label{color:#f8fbff!important}body.dark-theme .contact__description,body.dark-theme .location__panel p,body.dark-theme .location__updated,body.dark-theme .location__weather-card span,body.dark-theme .location__route-result{color:#cbd5e1!important}body.dark-theme .wizard__btn{background:rgba(30,41,59,.72)!important;color:#e8eef8!important}body.dark-theme .wizard__btn i{background:rgba(56,189,248,.12);color:#38bdf8}body.dark-theme .location__panel,body.dark-theme .location__map-card{border-color:rgba(125,211,252,.14);background:linear-gradient(180deg,#111827,#0f172a)}body.dark-theme .location__nz-visual,body.dark-theme .location__weather-card,body.dark-theme .location__route-panel{border-color:rgba(125,211,252,.16);background:rgba(30,41,59,.62)}body.dark-theme .location__route-input{border-color:rgba(125,211,252,.16);background:rgba(15,23,42,.82);color:#e8eef8}
@media screen and (max-width:767px){.nav__menu{left:50%;right:auto;bottom:-110%;width:min(94vw,28rem);max-height:72vh;overflow-y:auto;padding:3.25rem 1.25rem 2rem;border-radius:1.25rem 1.25rem 0 0;box-shadow:0 -18px 42px rgba(15,23,42,.16);transform:translateX(-50%)}.nav__menu.show-menu{bottom:0}.nav__menu::before{content:'';position:absolute;top:.85rem;left:50%;width:2.75rem;height:4px;border-radius:999px;background:rgba(100,116,139,.28);transform:translateX(-50%)}.nav__close{top:.75rem;right:.9rem;bottom:auto;display:inline-flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border-radius:999px;background:rgba(22,106,130,.08);color:#102033;font-size:1.15rem}.contact__container{grid-template-columns:1fr}.contact__info-card{min-height:auto;padding:1.5rem}.contact__body{padding:1.5rem}.wizard__choices{grid-template-columns:1fr;width:min(100%,22rem);max-width:22rem}.wizard__btn{width:100%;min-height:3.55rem}.portfolio__container{padding:.5rem .95rem 4.5rem}.portfolio__content{grid-template-columns:1fr;min-height:auto;padding:1rem;border-radius:1.25rem;transform:none}.portfolio__content:hover{transform:translateY(-3px)}.portfolio__content::before,.portfolio__content::after{display:none}.portfolio__content>div,.portfolio__img{transform:none}.portfolio__content>div{order:2}.portfolio__img{order:1;width:100%;height:220px;margin:0;border-radius:1rem}.portfolio__container .swiper-button-prev,.portfolio__container .swiper-button-next{display:inline-flex;bottom:.6rem}.portfolio__container .swiper-button-prev{right:7.3rem}.portfolio__container .swiper-button-next{right:1rem}.location__container,.location__route-row,.location__weather{grid-template-columns:1fr}.location__map{height:18rem}.location__weather-grid{grid-template-columns:1fr}.tour-swiper .swiper-pagination{right:.85rem!important}}
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
    if (label) button.innerHTML = `<i class=\"uil ${contactChoiceIcons[label]}\" aria-hidden=\"true\"></i><span>${label}</span>`;
});
const backButton = document.querySelector('#step2 .wizard__btn.secondary');
if (backButton) backButton.innerHTML = '<i class=\"uil uil-arrow-left\" aria-hidden=\"true\"></i><span>Back</span>';
const sendButton = document.querySelector('#step2 .wizard__btn.primary');
if (sendButton) sendButton.innerHTML = '<i class=\"uil uil-message\" aria-hidden=\"true\"></i><span>Send Message</span>';
const contactContainer = document.querySelector('.contact__container');
if (contactContainer && !contactContainer.querySelector('.contact__info-card')) {
    const infoCard = document.createElement('aside');
    infoCard.className = 'contact__info-card';
    infoCard.innerHTML = `<div><h3 class=\"contact__info-title\">Contact Information</h3><p class=\"contact__info-subtitle\">Say something to start a live chat about data, BI, or project opportunities.</p><div class=\"contact__info-list\"><div class=\"contact__info-item\"><i class=\"uil uil-envelope\"></i><span>Available for direct messages and work inquiries.</span></div><div class=\"contact__info-item\"><i class=\"uil uil-map-marker\"></i><span>Based around Pukekohe, Auckland Region, New Zealand.</span></div><div class=\"contact__info-item\"><i class=\"uil uil-clock\"></i><span>24/7 available to message.</span></div></div></div><div class=\"contact__info-social\"><a href=\"#home\" aria-label=\"Portfolio home\"><i class=\"uil uil-estate\"></i></a><a href=\"#portfolio\" aria-label=\"Portfolio projects\"><i class=\"uil uil-scenery\"></i></a><a href=\"#location\" aria-label=\"Location map\"><i class=\"uil uil-map\"></i></a></div>`;
    const body = document.createElement('div');
    body.className = 'contact__body';
    while (contactContainer.firstChild) body.appendChild(contactContainer.firstChild);
    contactContainer.append(infoCard, body);
}

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
    section.innerHTML = `<h2 class="section__title">Location</h2><span class="section__subtitle">Pukekohe, Auckland Region</span><div data-aos="fade-up" class="location__container container"><article class="location__panel"><span class="location__eyebrow">Residing Place</span><h3>New Zealand</h3><div class="location__nz-visual" aria-hidden="true"><img class="location__nz-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/New%20Zealand%20location%20map.svg" alt="Map of New Zealand"></div><span class="location__map-credit">Map source: Wikimedia Commons</span><p>Based in Pukekohe, Auckland Region. This gives visitors a quick sense of my local working base while keeping the map focused on practical location context.</p></article><article class="location__map-card"><div class="location__map-header"><div><span class="location__eyebrow">Interactive Map</span><h3>Pukekohe Focus</h3></div><span class="location__status" id="weatherStatus">Live</span></div><div class="location__route-panel"><label class="location__route-label" for="targetAddress">Check distance from Pukekohe</label><div class="location__route-row"><input class="location__route-input" id="targetAddress" type="text" placeholder="Enter company address or suburb"><button class="location__route-button" id="routeButton" type="button">Show Route</button></div><p class="location__route-result" id="routeResult">Try an address to preview travel distance from my base area.</p></div><div id="aucklandMap" class="location__map" role="img" aria-label="Interactive map showing Pukekohe, Auckland Region, New Zealand"></div></article><article class="location__panel location__weather"><span class="location__eyebrow">Live Weather</span><h3>Pukekohe Now</h3><div class="location__weather-grid"><div class="location__weather-card"><span>Temperature</span><strong id="weatherTemp">--</strong></div><div class="location__weather-card"><span>Feels Like</span><strong id="weatherFeels">--</strong></div><div class="location__weather-card"><span>Wind</span><strong id="weatherWind">--</strong></div></div><p class="location__updated" id="weatherUpdated">Updating live Pukekohe weather...</p></article></div>`;
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
const pukekoheBase = [-37.2004, 174.9010];
let locationMapInstance = null;
let locationRouteLayer = null;
let locationTargetMarker = null;
function initLocationMap() {
    const mapEl = document.getElementById('aucklandMap');
    if (!mapEl || typeof L === 'undefined' || mapEl.dataset.ready === 'true') return;
    const map = L.map(mapEl, { zoomControl: true, scrollWheelZoom: false }).setView(pukekoheBase, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
    L.marker(pukekoheBase).addTo(map).bindPopup('<strong>Pukekohe, New Zealand</strong><br>Current base area').openPopup();
    locationMapInstance = map;
    mapEl.dataset.ready = 'true';
    setTimeout(() => map.invalidateSize(), 250);
    initRoutePlanner();
}
function formatKm(meters) { return `${(meters / 1000).toFixed(meters > 95000 ? 0 : 1)} km`; }
function formatDuration(seconds) {
    const minutes = Math.round(seconds / 60);
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    return rest ? `${hours} hr ${rest} min` : `${hours} hr`;
}
function haversineMeters(a, b) {
    const toRad = (value) => value * Math.PI / 180;
    const earth = 6371000;
    const dLat = toRad(b[0] - a[0]);
    const dLon = toRad(b[1] - a[1]);
    const lat1 = toRad(a[0]);
    const lat2 = toRad(b[0]);
    const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    return 2 * earth * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}
async function geocodeAddress(address) {
    const endpoint = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=nz&q=${encodeURIComponent(address)}`;
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Address search failed');
    const results = await response.json();
    if (!results.length) throw new Error('No matching address found');
    return { name: results[0].display_name, coords: [Number(results[0].lat), Number(results[0].lon)] };
}
async function fetchRoute(targetCoords) {
    const url = `https://router.project-osrm.org/route/v1/driving/${pukekoheBase[1]},${pukekoheBase[0]};${targetCoords[1]},${targetCoords[0]}?overview=full&geometries=geojson`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Route request failed');
    const data = await response.json();
    const route = data.routes?.[0];
    if (!route) throw new Error('No route found');
    return { coordinates: route.geometry.coordinates.map(([lng, lat]) => [lat, lng]), distance: route.distance, duration: route.duration, routed: true };
}
function drawLocationRoute(target, routeInfo) {
    if (!locationMapInstance || typeof L === 'undefined') return;
    if (locationRouteLayer) locationMapInstance.removeLayer(locationRouteLayer);
    if (locationTargetMarker) locationMapInstance.removeLayer(locationTargetMarker);
    locationRouteLayer = L.polyline(routeInfo.coordinates, { className: 'location__route-line', color: '#102033', weight: 5, opacity: .95 }).addTo(locationMapInstance);
    locationTargetMarker = L.marker(target.coords).addTo(locationMapInstance).bindPopup(`<strong>Target location</strong><br>${target.name.split(',').slice(0, 3).join(', ')}`);
    locationMapInstance.fitBounds(locationRouteLayer.getBounds(), { padding: [34, 34] });
}
function initRoutePlanner() {
    const input = document.getElementById('targetAddress');
    const button = document.getElementById('routeButton');
    const result = document.getElementById('routeResult');
    if (!input || !button || !result || button.dataset.ready === 'true') return;
    async function runRouteSearch() {
        const address = input.value.trim();
        if (!address) { result.textContent = 'Please enter a company address, suburb, or town in New Zealand.'; return; }
        button.disabled = true;
        button.textContent = 'Checking...';
        result.textContent = 'Searching address and building route...';
        try {
            const target = await geocodeAddress(address);
            let routeInfo;
            try {
                routeInfo = await fetchRoute(target.coords);
            } catch {
                const distance = haversineMeters(pukekoheBase, target.coords);
                routeInfo = { coordinates: [pukekoheBase, target.coords], distance, duration: distance / 17, routed: false };
            }
            drawLocationRoute(target, routeInfo);
            result.textContent = `${routeInfo.routed ? 'Driving route' : 'Approx. direct distance'} from Pukekohe: ${formatKm(routeInfo.distance)}${routeInfo.routed ? `, about ${formatDuration(routeInfo.duration)}` : ''}.`;
        } catch {
            result.textContent = 'Sorry, I could not find that address. Try suburb + city, e.g. "Auckland CBD".';
        } finally {
            button.disabled = false;
            button.textContent = 'Show Route';
        }
    }
    button.addEventListener('click', runRouteSearch);
    input.addEventListener('keydown', (event) => { if (event.key === 'Enter') runRouteSearch(); });
    button.dataset.ready = 'true';
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
new Swiper('.portfolio__container', { slidesPerView: 1, loop: false, spaceBetween: 0, centeredSlides: false, navigation: { nextEl: '.portfolio .swiper-button-next', prevEl: '.portfolio .swiper-button-prev' }, pagination: { el: '.portfolio .swiper-pagination', clickable: true } });
new Swiper('.testimonial__container', { loop: true, grabCursor: true, spaceBetween: 48, pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true }, breakpoints: { 568: { slidesPerView: 2 } } });
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
