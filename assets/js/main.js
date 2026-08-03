const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const navMenu = $('#nav-menu');
const navToggle = $('#nav-toggle');
const navClose = $('#nav-close');
const closeMenu = () => navMenu?.classList.remove('show-menu');
navToggle?.addEventListener('click', () => navMenu?.classList.add('show-menu'));
navClose?.addEventListener('click', closeMenu);
$$('.nav__link').forEach((link) => link.addEventListener('click', closeMenu));

const baseCoords = [-37.2004, 174.9010];
let locationMap;
let routeLine;
let targetMarker;

const style = document.createElement('style');
style.textContent = `
body:not(.dark-theme){--ink:#102033;--muted:#667085;--line:#102033}.section__title{color:var(--ink)!important;font-size:clamp(1.85rem,3vw,2.35rem);font-weight:750;letter-spacing:0}.section__title::after{content:'';display:block;width:3.25rem;height:3px;border-radius:999px;background:var(--line);margin:.75rem auto 0}.section__subtitle{color:var(--muted);letter-spacing:0}body.dark-theme .section__title{color:#f8fbff!important}body.dark-theme .section__subtitle{color:#cbd5e1!important}.about.section .section__title,.about.section .about__info-title,.about.section .about__info-name{color:#fff!important}.about.section .about__description{color:#e8eef8!important}
.nav__link{border-radius:999px;padding:.45rem .75rem;position:relative;transition:color .25s,background .25s,transform .25s}.nav__link::after{content:'';position:absolute;left:50%;bottom:.18rem;width:1.15rem;height:2px;border-radius:999px;background:#38bdf8;opacity:0;transform:translateX(-50%) scaleX(.35);transition:opacity .25s,transform .25s}.nav__link:hover{color:#166a82;background:rgba(22,106,130,.08);transform:translateY(-2px)}.nav__link:hover::after,.nav__link.active-link::after{opacity:1;transform:translateX(-50%) scaleX(1)}body.dark-theme .nav__link:hover{color:#e8f7ff;background:rgba(56,189,248,.12)}.scroll-header{background:rgba(255,255,255,.86);box-shadow:0 8px 28px rgba(15,23,42,.08);backdrop-filter:blur(14px)}body.dark-theme .scroll-header{background:rgba(16,23,38,.86);box-shadow:0 8px 28px rgba(0,0,0,.28)}
.home__focus{display:flex;flex-wrap:wrap;gap:.55rem;margin:-1rem 0 1.75rem}.home__focus-pill{border:1px solid rgba(16,32,51,.18);border-radius:999px;color:#102033;font-size:var(--smaller-font-size);font-weight:var(--font-medium);padding:.55rem .75rem;background:rgba(16,32,51,.06)}
.skills.section{overflow:hidden}.skills__container{display:grid!important;grid-template-columns:repeat(2,minmax(300px,1fr))!important;gap:1rem!important;align-items:start!important;max-width:980px!important;margin-inline:auto!important}.skills__container>div{display:contents!important}.skills__content{box-sizing:border-box!important;position:relative!important;display:block!important;width:100%!important;min-width:0!important;min-height:auto!important;height:auto!important;margin:0!important;padding:1.05rem 1.15rem!important;border:1px solid rgba(16,32,51,.12)!important;border-radius:1.15rem!important;background:linear-gradient(145deg,#fff 0%,#f8fcfd 58%,#eef8fb 100%)!important;box-shadow:0 18px 38px rgba(15,23,42,.08),inset 0 1px 0 rgba(255,255,255,.8)!important;overflow:hidden!important;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}.skills__content:hover{border-color:rgba(22,106,130,.3)!important;box-shadow:0 24px 52px rgba(15,23,42,.12),inset 0 1px 0 rgba(255,255,255,.85)!important;transform:translateY(-3px)}.skills__content.skills__open{grid-column:auto!important}.skills__content::before{content:'';position:absolute;right:-4rem;top:-4rem;width:11rem;height:11rem;border-radius:50%;background:radial-gradient(circle,rgba(103,183,200,.18),transparent 68%);pointer-events:none}.skills__content::after{content:'';position:absolute;right:1rem;top:1rem;width:4.2rem;height:4.2rem;border:1px solid rgba(16,32,51,.06);border-radius:1rem;background:linear-gradient(145deg,rgba(255,255,255,.7),rgba(255,255,255,.2));transform:rotate(10deg);pointer-events:none}.skills__header{position:relative;z-index:1;display:grid!important;grid-template-columns:3.25rem minmax(0,1fr) 1.65rem!important;align-items:center!important;gap:1rem!important;text-align:left!important;min-height:0!important;height:auto!important;margin:0!important;padding:0!important;cursor:pointer}.skills__icon{display:grid!important;place-items:center!important;width:3.25rem!important;height:3.25rem!important;margin:0!important;border-radius:1rem!important;background:#eef9fc!important;color:#0ea5d8!important;font-size:1.8rem!important;box-shadow:inset 0 0 0 1px rgba(14,165,216,.1),0 10px 22px rgba(14,165,216,.1)!important}.skills__header>div{min-width:0!important}.skills__header .skills__titles{display:block!important;color:#102033!important;font-size:1.02rem!important;line-height:1.25!important;margin:0!important;text-align:left!important}.skills__subtitle{display:block!important;max-width:none!important;color:#667085!important;font-size:.8rem!important;line-height:1.45!important;text-align:left!important;margin:.22rem 0 0!important}.skills__arrow{position:static!important;justify-self:end!important;margin:0!important;color:#102033!important;font-size:1.4rem!important;transition:transform .25s}.skills__open .skills__arrow{transform:rotate(180deg)!important}.skills__list{position:relative!important;z-index:1!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;box-sizing:border-box!important;float:none!important;clear:both!important;width:100%!important;max-width:none!important;height:auto!important;margin:0!important;padding:0!important;transform:none!important;overflow:visible!important}.skills__close .skills__list{display:none!important;height:0!important;margin:0!important;padding:0!important;border:0!important;overflow:hidden!important}.skills__open .skills__list{display:grid!important;grid-template-columns:1fr!important;gap:.85rem!important;margin-top:1rem!important;padding:1rem 0 0!important;border-top:1px solid rgba(16,32,51,.08)!important}.skills__data{display:block!important;width:100%!important;min-width:0!important;max-width:none!important;margin:0!important}.skills__data .skills__titles{display:flex!important;justify-content:space-between!important;align-items:flex-start!important;gap:1rem!important;margin:0 0 .45rem!important}.skills__name{color:#166a82!important;font-size:.86rem!important;font-weight:650!important;line-height:1.35!important;max-width:calc(100% - 4rem)!important;margin:0!important}.skills__number{color:#667085!important;font-size:.8rem!important;white-space:nowrap!important}.skills__bar{display:block!important;width:100%!important;height:.28rem!important;border-radius:999px!important;overflow:hidden!important;background:#dbe7f0!important}.skills__percentage{display:block!important;height:100%!important;border-radius:999px!important;background:linear-gradient(90deg,#102033,#1e88a5,#9fb6ff)!important}body.dark-theme .skills__content{border-color:rgba(125,211,252,.14)!important;background:linear-gradient(145deg,#111827,#0f172a 62%,#0b3144)!important}body.dark-theme .skills__header .skills__titles,body.dark-theme .skills__name{color:#f8fbff!important}body.dark-theme .skills__icon{background:rgba(56,189,248,.12)!important;color:#7dd3fc!important}body.dark-theme .skills__subtitle,body.dark-theme .skills__number{color:#cbd5e1!important}body.dark-theme .skills__arrow{color:#e8eef8!important}body.dark-theme .skills__bar{background:rgba(148,163,184,.28)!important}body.dark-theme .skills__percentage{background:linear-gradient(90deg,#38bdf8,#a5b4fc)!important}
.portfolio{overflow:hidden}.portfolio__container{max-width:1080px;padding:1rem 4rem 4.5rem;overflow:visible;perspective:1300px}.portfolio__content{position:relative;display:grid!important;grid-template-columns:minmax(280px,.9fr) minmax(280px,1.1fr)!important;align-items:center;gap:2rem;min-height:430px;padding:2rem;border:1px solid rgba(255,255,255,.14);border-radius:1.65rem;background:radial-gradient(circle at 20% 10%,rgba(103,183,200,.34),transparent 28%),linear-gradient(135deg,#0f172a 0%,#123247 52%,#166a82 100%);box-shadow:0 32px 80px rgba(15,23,42,.24);overflow:visible;transform:rotateX(4deg) rotateY(-5deg);transition:transform .45s,box-shadow .45s}.portfolio__content:hover{transform:translateY(-6px);box-shadow:0 38px 92px rgba(15,23,42,.3)}.portfolio__content::before{content:'';position:absolute;right:2rem;bottom:2rem;width:10rem;height:10rem;border:1px solid rgba(255,255,255,.14);border-radius:2rem;background:linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,.04));transform:rotate(10deg);pointer-events:none}.portfolio__content>div{display:flex;flex-direction:column;justify-content:center;min-width:0;order:1;z-index:1}.portfolio__img{order:2;width:min(100%,460px);height:300px;margin:0 0 0 auto;border:8px solid rgba(255,255,255,.9);border-radius:1.15rem;object-fit:cover;object-position:top center;box-shadow:0 26px 58px rgba(0,0,0,.28);z-index:1}.portfolio__title{color:#fff!important;font-size:clamp(1.9rem,3.4vw,2.75rem);line-height:1.1}.portfolio__description{color:#dbeafe!important;max-width:34rem;font-size:.95rem;line-height:1.68}.portfolio__tech{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.35rem}.portfolio__tech strong{flex-basis:100%;color:#8bd9ee!important;font-size:.75rem;letter-spacing:.08em;text-transform:uppercase}.portfolio__tech-chip{border:1px solid rgba(255,255,255,.14);border-radius:999px;color:#e8f7ff!important;background:rgba(255,255,255,.08);font-size:.74rem;font-weight:650;padding:.45rem .65rem}.portfolio__btn{display:inline-flex;align-items:center;gap:.45rem;align-self:flex-start;border:1px solid rgba(255,255,255,.18);border-radius:.8rem;background:#fff;color:#102033!important;font-weight:750;padding:.85rem 1.1rem;box-shadow:0 14px 28px rgba(0,0,0,.14)}.portfolio__container .swiper-button-prev,.portfolio__container .swiper-button-next{display:none!important}.portfolio>.swiper-pagination,.portfolio .swiper-pagination.swiper-pagination-horizontal,.portfolio .swiper-pagination.swiper-pagination-vertical{position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:center!important;width:max-content!important;height:auto!important;margin:1.1rem auto 0!important;gap:.65rem!important;padding:.52rem .72rem!important;border:1px solid rgba(16,32,51,.08);border-radius:999px;background:rgba(255,255,255,.92);box-shadow:0 14px 34px rgba(15,23,42,.1);transform:none!important}.portfolio .swiper-pagination-bullet{display:block!important;width:.7rem!important;height:.7rem!important;margin:0!important;border:1px solid rgba(22,106,130,.3);border-radius:999px;opacity:1!important;background:#c9dce2}.portfolio .swiper-pagination-bullet-active{width:2.35rem!important;background:#102033!important}
.tour-swiper .swiper-pagination,.tour-swiper .swiper-pagination.swiper-pagination-hidden,.tour-swiper .swiper-pagination.swiper-pagination-lock{position:absolute!important;right:1.5rem!important;top:50%!important;left:auto!important;bottom:auto!important;display:flex!important;flex-direction:column!important;gap:.7rem;padding:.65rem .45rem;border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(15,23,42,.42);box-shadow:0 18px 38px rgba(0,0,0,.2);backdrop-filter:blur(14px);transform:translateY(-50%)!important;opacity:1!important;visibility:visible!important;z-index:20}.tour-swiper .swiper-pagination-bullet{display:block!important;width:.72rem;height:.72rem;margin:0!important;border:2px solid rgba(255,255,255,.9);background:rgba(255,255,255,.36);opacity:1!important;visibility:visible!important}.tour-swiper .swiper-pagination-bullet-active{height:2rem;background:linear-gradient(180deg,#38bdf8,#177b98)}
.contact.section{padding-bottom:5rem}.contact__container{position:relative;display:grid!important;grid-template-columns:minmax(250px,.86fr) minmax(380px,1.14fr)!important;gap:0;max-width:940px;border:1px solid rgba(16,32,51,.1);border-radius:1.35rem;background:linear-gradient(135deg,#102033,#123247 55%,#166a82);box-shadow:0 26px 68px rgba(15,23,42,.14);padding:.65rem!important;overflow:hidden}.contact__info-card{position:relative;display:flex;flex-direction:column;justify-content:space-between;min-height:29rem;color:#fff;padding:2rem;overflow:hidden}.contact__info-title{color:#fff;font-size:1.25rem;margin-bottom:.45rem}.contact__info-subtitle{color:rgba(232,247,255,.82);font-size:.86rem;line-height:1.6;margin-bottom:1.8rem}.contact__info-list{display:grid;gap:1.05rem}.contact__info-item{display:grid;grid-template-columns:2.1rem 1fr;align-items:start;gap:.75rem;color:rgba(232,247,255,.88);font-size:.8rem;line-height:1.55}.contact__info-item i{display:inline-flex;align-items:center;justify-content:center;width:2.1rem;height:2.1rem;border-radius:.7rem;background:rgba(255,255,255,.1);color:#8bd9ee}.contact__body{position:relative;margin-left:.25rem;border-radius:1rem;background:rgba(255,255,255,.96);padding:2.15rem 2.35rem}.contact__title{color:#102033!important;font-size:1.18rem;text-align:left}.contact__description{color:#617083!important;font-size:.9rem;text-align:left}.contact__container .progressbar{display:none!important}.contact__container .wizard__choices{display:flex!important;justify-content:center!important;padding:1.25rem 0 0}.wizard__btn{display:inline-flex;align-items:center;justify-content:center;gap:.85rem;min-height:3.55rem;padding:.85rem 1.15rem;border:1px solid rgba(16,32,51,.1);border-radius:.8rem;background:#fff;color:#102033;font-weight:700;box-shadow:0 10px 28px rgba(15,23,42,.06)}.wizard__btn i{display:inline-flex;align-items:center;justify-content:center;width:2.05rem;height:2.05rem;border-radius:.65rem;background:#eef7fa;color:#166a82}.contact__message-btn{width:auto!important;min-width:13rem!important;border-radius:999px!important;background:#102033!important;color:#fff!important}.contact__message-btn i{border-radius:999px!important;background:rgba(255,255,255,.12)!important;color:#8bd9ee!important}.wizard__btn.primary{background:#102033;color:#fff}
.location{overflow:hidden}.location__container{display:grid!important;grid-template-columns:minmax(240px,.82fr) minmax(360px,1.45fr)!important;gap:1.25rem}.location__panel,.location__map-card{position:relative;min-height:22.5rem;border:1px solid rgba(16,32,51,.13);border-radius:1.45rem;background:linear-gradient(180deg,#fff,#f8fcfd);color:#102033;box-shadow:0 22px 55px rgba(15,23,42,.08);overflow:hidden}.location__panel{display:flex;flex-direction:column;justify-content:space-between;padding:1.35rem}.location__panel::before,.location__map-card::before{content:'';position:absolute;top:0;left:0;right:0;height:.32rem;background:#102033}.location__eyebrow{display:inline-flex;width:fit-content;border:1px solid rgba(16,32,51,.14);border-radius:999px;background:#f2f6f8;color:#102033;font-size:.7rem;font-weight:750;letter-spacing:.08em;padding:.42rem .64rem;text-transform:uppercase}.location__panel h3,.location__map-card h3{color:#102033;font-size:1.2rem;line-height:1.2;margin:.85rem 0 .5rem}.location__panel p,.location__updated{color:#667085;font-size:.88rem;line-height:1.65;margin:0}.location__nz-visual{height:15.5rem;display:grid;place-items:center;margin:1rem 0;border:1px solid rgba(16,32,51,.12);border-radius:1rem;background:radial-gradient(circle at 50% 42%,rgba(103,183,200,.16),transparent 42%),linear-gradient(145deg,#f6fcfe,#e8f6fa);overflow:hidden}.location__nz-svg{position:relative;width:13rem;height:14rem;isolation:isolate;animation:locationFloat 5s ease-in-out infinite}.location__island{position:absolute;display:block;background:linear-gradient(135deg,#7ed7e5 0%,#2d98b5 48%,#166a82 100%);box-shadow:0 18px 28px rgba(15,23,42,.18)}.location__island--north{width:4.6rem;height:7.35rem;right:3.15rem;top:1.05rem;border-radius:62% 38% 58% 42%/48% 52% 48% 52%;transform:rotate(26deg)}.location__island--north::after{content:'';position:absolute;width:1.55rem;height:2.4rem;right:-.7rem;bottom:.85rem;border-radius:55% 45% 60% 40%;background:linear-gradient(135deg,#8be1ea,#2b95ad);transform:rotate(-22deg)}.location__island--south{width:3.45rem;height:7.55rem;left:2.55rem;bottom:1.15rem;border-radius:54% 46% 56% 44%/44% 56% 44% 56%;transform:rotate(37deg)}.location__pin{position:absolute;right:3.1rem;top:4.7rem;width:1.7rem;height:1.7rem;border-radius:50% 50% 50% 0;background:#ef4444;transform:rotate(-45deg);box-shadow:0 0 0 .55rem rgba(239,68,68,.16),0 12px 20px rgba(239,68,68,.2);z-index:3}.location__pin::after{content:'';position:absolute;inset:.48rem;border-radius:50%;background:#fff}.location__map-card{min-height:28rem;padding:1.15rem}.location__map-header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.35rem .35rem .85rem}.location__status{border-radius:999px;background:#e9f8ef;color:#137a3f;font-size:.78rem;font-weight:700;padding:.55rem .7rem}.location__map{position:relative;z-index:1;height:20rem;border:1px solid rgba(16,32,51,.13);border-radius:1.2rem;background:#edf7fa;overflow:hidden}.location__route-panel{position:relative;z-index:2;display:grid;gap:.65rem;margin-bottom:.85rem;padding:.85rem;border:1px solid rgba(16,32,51,.12);border-radius:1rem;background:#f6fbfd}.location__route-label{color:#102033;font-size:.8rem;font-weight:750}.location__route-row{display:grid;grid-template-columns:1fr auto;gap:.55rem}.location__route-input{width:100%;border:1px solid rgba(16,32,51,.16);border-radius:.75rem;background:#fff;color:#102033;font-family:var(--body-font);font-size:.85rem;padding:.78rem .9rem;outline:none}.location__route-button{border:0;border-radius:.75rem;background:#102033;color:#fff;cursor:pointer;font-family:var(--body-font);font-size:.85rem;font-weight:750;padding:.78rem 1rem}.location__route-result{min-height:1.2rem;color:#667085;font-size:.8rem;line-height:1.45}.location__route-line{stroke:#102033;stroke-width:5;stroke-linecap:round;stroke-dasharray:12 14;animation:routeDash 1.4s linear infinite}.location__weather{grid-column:1/-1;display:grid!important;grid-template-columns:auto 1fr auto;align-items:center;gap:1rem 1.5rem;min-height:auto}.location__weather-grid{display:grid;grid-template-columns:repeat(3,minmax(130px,1fr));gap:.75rem;margin:0}.location__weather-card{border:1px solid rgba(16,32,51,.11);border-radius:.85rem;background:#f5fafc;padding:.85rem}.location__weather-card span{display:block;color:#667085;font-size:.76rem;margin-bottom:.3rem}.location__weather-card strong{color:#102033;font-size:1.45rem}@keyframes locationFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}@keyframes routeDash{to{stroke-dashoffset:-52}}
body.dark-theme .portfolio__content{background:radial-gradient(circle at 20% 10%,rgba(125,211,252,.18),transparent 28%),linear-gradient(135deg,#0f172a,#111827 58%,#0b3144)}body.dark-theme .contact__container{border-color:rgba(125,211,252,.16);background:linear-gradient(135deg,#0f172a,#123247 58%,#0b3144)}body.dark-theme .contact__body{background:rgba(15,23,42,.94)}body.dark-theme .contact__title,body.dark-theme .location__panel h3,body.dark-theme .location__map-card h3,body.dark-theme .location__weather-card strong,body.dark-theme .location__route-label{color:#f8fbff!important}body.dark-theme .contact__description,body.dark-theme .location__panel p,body.dark-theme .location__updated,body.dark-theme .location__weather-card span,body.dark-theme .location__route-result{color:#cbd5e1!important}body.dark-theme .wizard__btn{background:rgba(30,41,59,.72)!important;color:#e8eef8!important}body.dark-theme .location__panel,body.dark-theme .location__map-card{border-color:rgba(125,211,252,.14);background:linear-gradient(180deg,#111827,#0f172a)}body.dark-theme .location__nz-visual,body.dark-theme .location__weather-card,body.dark-theme .location__route-panel{border-color:rgba(125,211,252,.16);background:rgba(30,41,59,.62)}body.dark-theme .location__route-input{border-color:rgba(125,211,252,.16);background:rgba(15,23,42,.82);color:#e8eef8}
@media(max-width:900px){.skills__container{grid-template-columns:1fr!important}.skills__content.skills__open{grid-column:auto!important}.contact__container,.location__container,.location__weather{grid-template-columns:1fr!important}.portfolio__container{padding:.5rem .95rem 2rem}.portfolio__content{grid-template-columns:1fr!important;min-height:auto;padding:1rem;border-radius:1.25rem;transform:none}.portfolio__content::before{display:none}.portfolio__content>div{order:2}.portfolio__img{order:1;width:100%;height:220px;margin:0}.contact__info-card{min-height:auto;padding:1.35rem}.contact__body{margin-left:0;padding:1.45rem}.contact__title,.contact__description{text-align:center}.location__route-row,.location__weather-grid{grid-template-columns:1fr}.location__map{height:18rem}.tour-swiper .swiper-pagination{right:.85rem!important}}
`;
document.head.appendChild(style);

function setSkillWidths() {
  $$('.skills__data').forEach((data) => {
    const number = $('.skills__number', data)?.textContent.trim();
    const bar = $('.skills__percentage', data);
    if (number && bar) bar.style.width = number;
  });
}

function addSkillItem(sectionTitle, name, level) {
  const section = $$('.skills__content').find((card) => $('.skills__titles', card)?.textContent.trim() === sectionTitle);
  if (!section || section.querySelector(`[data-skill="${name}"]`)) return;
  const skill = document.createElement('div');
  skill.className = 'skills__data';
  skill.dataset.skill = name;
  skill.innerHTML = `<div class="skills__titles"><h3 class="skills__name">${name}</h3><span class="skills__number">${level}%</span></div><div class="skills__bar"><span class="skills__percentage"></span></div>`;
  $('.skills__list', section)?.appendChild(skill);
}

function addGeoSkill() {
  const container = $('.skills__container');
  if (!container || $$('.skills__titles').some((title) => title.textContent.trim() === 'Geospatial Analytics & Mapping')) return;
  const section = document.createElement('div');
  section.className = 'skills__content skills__close';
  section.innerHTML = `<div class="skills__header"><i class="uil uil-map-marker skills__icon"></i><div><h1 class="skills__titles">Geospatial Analytics & Mapping</h1><span class="skills__subtitle">Mapbox, Power BI Maps & Location-Based Analysis</span></div><i class="uil uil-angle-down skills__arrow"></i></div><div class="skills__list grid"><div class="skills__data"><div class="skills__titles"><h3 class="skills__name">Mapbox Map Development for Power BI</h3><span class="skills__number">70%</span></div><div class="skills__bar"><span class="skills__percentage"></span></div></div><div class="skills__data"><div class="skills__titles"><h3 class="skills__name">Map-Based Data Analysis</h3><span class="skills__number">75%</span></div><div class="skills__bar"><span class="skills__percentage"></span></div></div><div class="skills__data"><div class="skills__titles"><h3 class="skills__name">Geospatial Data Visualization</h3><span class="skills__number">70%</span></div><div class="skills__bar"><span class="skills__percentage"></span></div></div></div>`;
  container.appendChild(section);
}

function normalizeSkills() {
  const container = $('.skills__container');
  if (!container) return;
  $$('.skills__content', container).forEach((card, index) => {
    if (card.parentElement !== container) container.appendChild(card);
    card.classList.remove('skills__open', 'skills__close');
    card.classList.add(index === 0 ? 'skills__open' : 'skills__close');
    card.style.gridColumn = 'auto';
    card.style.position = 'relative';
    card.style.overflow = 'hidden';
    const list = $('.skills__list', card);
    if (list) {
      list.style.position = 'relative';
      list.style.left = 'auto';
      list.style.right = 'auto';
      list.style.top = 'auto';
      list.style.bottom = 'auto';
      list.style.width = '100%';
      list.style.maxWidth = 'none';
      list.style.gridTemplateColumns = '1fr';
    }
  });
  $$('.skills__header', container).forEach((header) => {
    header.onclick = () => {
      const card = header.closest('.skills__content');
      const wasOpen = card.classList.contains('skills__open');
      $$('.skills__content', container).forEach((item) => {
        item.classList.remove('skills__open');
        item.classList.add('skills__close');
      });
      if (!wasOpen) {
        card.classList.remove('skills__close');
        card.classList.add('skills__open');
      }
      setSkillWidths();
    };
  });
}

function updateText() {
  const homeDesc = $('.home__description');
  const homeData = $('.home__data');
  const aboutDesc = $('.about__description');
  if (homeDesc) homeDesc.textContent = 'Data Engineer and BI Developer focused on ETL pipelines, SQL, Power BI, geospatial analytics, and reliable reporting solutions that turn raw data into clear insights.';
  if (homeData && !$('.home__focus')) {
    const focus = document.createElement('div');
    focus.className = 'home__focus';
    ['ETL Development', 'Power BI & DAX'].forEach((label) => {
      const pill = document.createElement('span');
      pill.className = 'home__focus-pill';
      pill.textContent = label;
      focus.appendChild(pill);
    });
    homeDesc?.after(focus);
  }
  if (aboutDesc) aboutDesc.textContent = "Hi, I'm Cornelio Parole III, a data-focused developer with less than 3 years of experience in ETL development, data engineering, analytics, and reporting. I enjoy learning new platforms, improving my skills in SQL, Power BI, Azure Data Factory, KNIME, and geospatial mapping, while also building web development projects as a hobby. I'm passionate about turning raw data into clear insights and reliable data solutions.";
  const aboutTitles = $$('.about__info-title');
  const aboutNames = $$('.about__info-name');
  if (aboutTitles[0]) aboutTitles[0].textContent = '<03';
  if (aboutNames[1]) aboutNames[1].innerHTML = 'Available to Message<br />';
  $$('.skills__subtitle').forEach((subtitle) => {
    if (subtitle.textContent.includes('Less than 2 years')) subtitle.textContent = 'Less than 3 years';
  });
}

function removeAIText() {
  $$('.skills__content').forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes('ai-assisted') || text.includes('ai-enhanced') || text.includes('openai codex') || text.includes('github copilot')) card.remove();
  });
  $$('p, span, h1, h2, h3').forEach((el) => {
    el.textContent = el.textContent.replace(/AI-assisted workflows that turn raw data into reliable insights\.?/gi, '').replace(/Codex, Copilot & AI-Enhanced Workflows/gi, 'Modern development workflows');
  });
}

function enhanceSkills() {
  addSkillItem('Data Engineering & ETL', 'KNIME Analytics Platform', 70);
  addSkillItem('Business Intelligence & Reporting', 'DAX Measures & Calculations', 75);
  addGeoSkill();
  removeAIText();
  normalizeSkills();
  setSkillWidths();
}

function openContactForm() {
  if (typeof goToForm === 'function') {
    goToForm('General Message');
    return;
  }
  const step1 = $('#step1');
  const step2 = $('#step2');
  const subject = $('#subjectField');
  if (step1) step1.style.display = 'none';
  if (step2) step2.style.display = 'block';
  if (subject) subject.value = 'General Message';
}

function enhanceContact() {
  const step1 = $('#step1');
  if (step1 && step1.dataset.simple !== 'true') {
    step1.innerHTML = `<h3 class="contact__title">Ready to connect?</h3><p class="contact__description">Press the button below and send me a message directly.</p><div class="wizard__choices"><button class="wizard__btn contact__message-btn" type="button"><i class="uil uil-message"></i><span>Message Me</span></button></div>`;
    $('.contact__message-btn', step1)?.addEventListener('click', openContactForm);
    step1.dataset.simple = 'true';
  }
  const contact = $('.contact__container');
  if (contact && !$('.contact__body', contact)) {
    const body = document.createElement('div');
    body.className = 'contact__body';
    Array.from(contact.children).forEach((child) => body.appendChild(child));
    const info = document.createElement('aside');
    info.className = 'contact__info-card';
    info.innerHTML = `<div><h3 class="contact__info-title">Contact Information</h3><p class="contact__info-subtitle">Send a direct message about data, BI, reporting, or project opportunities.</p><div class="contact__info-list"><div class="contact__info-item"><i class="uil uil-envelope"></i><span>Available for direct messages and work inquiries.</span></div><div class="contact__info-item"><i class="uil uil-map-marker"></i><span>Based around Pukekohe, Auckland Region, New Zealand.</span></div><div class="contact__info-item"><i class="uil uil-clock"></i><span>24/7 available to message.</span></div></div></div>`;
    contact.appendChild(body);
    contact.prepend(info);
  }
}

function addLocationNav() {
  const list = $('.nav__list');
  if (!list || $('.nav__link[href="#location"]')) return;
  const item = document.createElement('li');
  item.className = 'nav__items';
  item.innerHTML = '<a href="#location" class="nav__link"><i class="uil uil-map-marker nav__icon"></i> Location</a>';
  list.appendChild(item);
  $('.nav__link', item)?.addEventListener('click', closeMenu);
}

function nzVisual() {
  return '<div class="location__nz-svg" role="img" aria-label="Stylized map of New Zealand with Pukekohe marker"><span class="location__island location__island--north"></span><span class="location__island location__island--south"></span><span class="location__pin"></span></div>';
}

function ensureLocation() {
  addLocationNav();
  let location = $('#location');
  const about = $('#about');
  if (!location) {
    location = document.createElement('section');
    location.className = 'location section';
    location.id = 'location';
    location.innerHTML = `<h2 class="section__title">Location</h2><span class="section__subtitle">Pukekohe, Auckland Region</span><div data-aos="fade-up" class="location__container container"><article class="location__panel location__panel--residence"><div><span class="location__eyebrow">Residing Place</span><h3>New Zealand</h3></div><div class="location__nz-visual">${nzVisual()}</div><p>Currently based around Pukekohe in the Auckland Region, working with data, BI, reporting, and modern development tools.</p></article><article class="location__map-card"><div class="location__map-header"><div><span class="location__eyebrow">Interactive Map</span><h3>Pukekohe Focus</h3></div><span class="location__status" id="weatherStatus">Live</span></div><div class="location__route-panel"><label class="location__route-label" for="targetAddress">Check distance from Pukekohe</label><div class="location__route-row"><input id="targetAddress" class="location__route-input" placeholder="Enter company address or suburb"><button id="routeBtn" class="location__route-button" type="button">Check</button></div><p id="routeResult" class="location__route-result">Enter an address to estimate route distance and drive time.</p></div><div id="aucklandMap" class="location__map"></div></article><article class="location__panel location__weather"><div><span class="location__eyebrow">Live Weather</span><h3>Pukekohe Now</h3></div><div class="location__weather-grid"><div class="location__weather-card"><span>Temperature</span><strong id="weatherTemp">--</strong></div><div class="location__weather-card"><span>Feels Like</span><strong id="weatherFeels">--</strong></div><div class="location__weather-card"><span>Wind</span><strong id="weatherWind">--</strong></div></div><p class="location__updated" id="weatherUpdated">Updating live weather...</p></article></div>`;
    about?.after(location);
  } else {
    if (about && about.nextElementSibling !== location) about.after(location);
    const visual = $('.location__nz-visual', location);
    if (visual) visual.innerHTML = nzVisual();
    if (!$('#targetAddress', location)) {
      $('#aucklandMap', location)?.insertAdjacentHTML('beforebegin', `<div class="location__route-panel"><label class="location__route-label" for="targetAddress">Check distance from Pukekohe</label><div class="location__route-row"><input id="targetAddress" class="location__route-input" placeholder="Enter company address or suburb"><button id="routeBtn" class="location__route-button" type="button">Check</button></div><p id="routeResult" class="location__route-result">Enter an address to estimate route distance and drive time.</p></div>`);
    }
  }
  loadLeaflet(initMap);
}

function loadLeaflet(callback) {
  if (typeof L !== 'undefined') {
    callback();
    return;
  }
  if (!$('link[data-leaflet]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.dataset.leaflet = 'true';
    document.head.appendChild(link);
  }
  if (!$('script[data-leaflet]')) {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.dataset.leaflet = 'true';
    script.onload = callback;
    document.body.appendChild(script);
  }
}

function initMap() {
  const mapEl = $('#aucklandMap');
  if (!mapEl || mapEl.dataset.ready === 'true' || typeof L === 'undefined') return;
  locationMap = L.map(mapEl, { scrollWheelZoom: false }).setView(baseCoords, 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(locationMap);
  L.marker(baseCoords).addTo(locationMap).bindPopup('<strong>Pukekohe, New Zealand</strong><br>Current residing area.').openPopup();
  mapEl.dataset.ready = 'true';
  setTimeout(() => locationMap.invalidateSize(), 250);
  initRoutePlanner();
}

function formatKm(meters) {
  return `${(meters / 1000).toFixed(meters > 95000 ? 0 : 1)} km`;
}
function formatDuration(seconds) {
  const mins = Math.max(5, Math.round(seconds / 60));
  if (mins < 60) return `${mins} min`;
  const hours = Math.floor(mins / 60);
  const rest = mins % 60;
  return rest ? `${hours} hr ${rest} min` : `${hours} hr`;
}
async function geocode(query) {
  const res = await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=nz&q=' + encodeURIComponent(query));
  const data = await res.json();
  if (!data[0]) throw new Error('No address found');
  return { name: data[0].display_name, coords: [Number(data[0].lat), Number(data[0].lon)] };
}
async function routeTo(destination) {
  try {
    const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${baseCoords[1]},${baseCoords[0]};${destination[1]},${destination[0]}?overview=full&geometries=geojson`);
    const data = await res.json();
    const route = data.routes?.[0];
    if (route) return { coords: route.geometry.coordinates.map(([lng, lat]) => [lat, lng]), dist: route.distance, dur: route.duration, kind: 'Driving route' };
  } catch {}
  const meters = locationMap.distance(baseCoords, destination);
  return { coords: [baseCoords, destination], dist: meters, dur: meters / 17, kind: 'Approx. direct distance' };
}
function drawRoute(target, info) {
  if (!locationMap || typeof L === 'undefined') return;
  if (routeLine) locationMap.removeLayer(routeLine);
  if (targetMarker) locationMap.removeLayer(targetMarker);
  routeLine = L.polyline(info.coords, { className: 'location__route-line', color: '#102033', weight: 5, opacity: .95 }).addTo(locationMap);
  targetMarker = L.marker(target.coords).addTo(locationMap).bindPopup('<strong>Target location</strong><br>' + target.name.split(',').slice(0, 3).join(', '));
  locationMap.fitBounds(routeLine.getBounds(), { padding: [34, 34] });
}
function initRoutePlanner() {
  const input = $('#targetAddress');
  const button = $('#routeBtn') || $('#routeButton');
  const result = $('#routeResult');
  if (!input || !button || !result || button.dataset.ready === 'true') return;
  const run = async () => {
    const query = input.value.trim();
    if (!query) {
      result.textContent = 'Please enter a company address, suburb, or town in New Zealand.';
      return;
    }
    button.disabled = true;
    button.textContent = 'Checking...';
    result.textContent = 'Searching address and building route...';
    try {
      const target = await geocode(query);
      const info = await routeTo(target.coords);
      drawRoute(target, info);
      result.textContent = `${info.kind} from Pukekohe: ${formatKm(info.dist)}, about ${formatDuration(info.dur)}.`;
    } catch {
      result.textContent = 'Sorry, I could not find that address. Try suburb + city, e.g. Auckland CBD.';
    } finally {
      button.disabled = false;
      button.textContent = 'Check';
    }
  };
  button.addEventListener('click', run);
  input.addEventListener('keydown', (event) => { if (event.key === 'Enter') run(); });
  button.dataset.ready = 'true';
}

async function updateWeather() {
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-37.2004&longitude=174.9010&current=temperature_2m,apparent_temperature,wind_speed_10m,relative_humidity_2m,weather_code&timezone=Pacific%2FAuckland');
    const current = (await res.json()).current || {};
    const set = (id, value) => { const el = $('#' + id); if (el) el.innerHTML = value; };
    set('weatherTemp', Math.round(current.temperature_2m) + '&deg;C');
    set('weatherFeels', Math.round(current.apparent_temperature) + '&deg;C');
    set('weatherWind', Math.round(current.wind_speed_10m) + ' km/h');
    const updated = $('#weatherUpdated');
    if (updated) updated.textContent = 'Humidity ' + Math.round(current.relative_humidity_2m) + '%. Updated ' + new Date(current.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + '.';
    const status = $('#weatherStatus');
    if (status) status.textContent = 'Live';
  } catch {
    const updated = $('#weatherUpdated');
    if (updated) updated.textContent = 'Weather is unavailable right now.';
  }
}

function enhancePortfolio() {
  $$('.portfolio__tech').forEach((tech) => {
    if (tech.dataset.chips) return;
    const text = tech.textContent.replace(/Tech Used:/i, '').trim();
    tech.innerHTML = '<strong>Tech Used:</strong>' + text.split(',').filter(Boolean).map((item) => `<span class="portfolio__tech-chip">${item.trim()}</span>`).join('');
    tech.dataset.chips = 'true';
  });
  if (typeof Swiper === 'undefined') return;
  try {
    new Swiper('.portfolio__container', { slidesPerView: 1, spaceBetween: 24, loop: false, pagination: { el: '.portfolio .swiper-pagination', clickable: true }, navigation: false });
    new Swiper('.tour-swiper', { slidesPerView: 1, loop: false, pagination: { el: '.tour-swiper .swiper-pagination', clickable: true }, navigation: { nextEl: '.tour-swiper .swiper-button-next', prevEl: '.tour-swiper .swiper-button-prev' } });
  } catch {}
}

function scrollActive() {
  const y = window.pageYOffset;
  $$('section[id]').forEach((section) => {
    const top = section.offsetTop - 80;
    const height = section.offsetHeight;
    const link = $(`.nav__menu a[href*=${section.id}]`);
    if (link) link.classList.toggle('active-link', y > top && y <= top + height);
  });
}
function scrollHeader() {
  $('#header')?.classList.toggle('scroll-header', window.scrollY >= 80);
}
function scrollUp() {
  $('#scroll-up')?.classList.toggle('show-scroll', window.scrollY >= 560);
}

const themeButton = $('#theme-button');
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
  themeButton?.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove']('uil-sun');
}
themeButton?.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeButton.classList.toggle('uil-sun');
  localStorage.setItem('selected-theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  localStorage.setItem('selected-icon', themeButton.classList.contains('uil-sun') ? 'uil-moon' : 'uil-sun');
});

function boot() {
  updateText();
  enhanceSkills();
  enhanceContact();
  ensureLocation();
  updateWeather();
  enhancePortfolio();
  scrollActive();
  scrollHeader();
  scrollUp();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
setTimeout(boot, 400);
setTimeout(boot, 1400);
setInterval(updateWeather, 600000);
window.addEventListener('scroll', scrollActive);
window.addEventListener('scroll', scrollHeader);
window.addEventListener('scroll', scrollUp);
