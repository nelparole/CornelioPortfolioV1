/*==================== MENU ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) navToggle.addEventListener('click', () => navMenu?.classList.add('show-menu'));
if (navClose) navClose.addEventListener('click', () => navMenu?.classList.remove('show-menu'));

function linkAction() {
    document.getElementById('nav-menu')?.classList.remove('show-menu');
}

document.querySelectorAll('.nav__link').forEach((link) => link.addEventListener('click', linkAction));

/*==================== SKILLS ACCORDION ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    const itemClass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i += 1) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((header) => header.addEventListener('click', toggleSkills));

/*==================== VISUAL REFINEMENTS ====================*/
const enhancementStyles = document.createElement('style');
enhancementStyles.textContent = `
    body:not(.dark-theme) {
        --portfolio-ink: #172033;
        --portfolio-muted: #667085;
        --portfolio-accent: #177b98;
        --portfolio-line: #e2e8f0;
        color: var(--portfolio-muted);
    }

    body:not(.dark-theme) .home__title,
    body:not(.dark-theme) .qualification__title,
    body:not(.dark-theme) .portfolio__tech strong {
        color: var(--portfolio-ink);
    }

    body:not(.dark-theme) .home__subtitle,
    body:not(.dark-theme) .home__description,
    body:not(.dark-theme) .skills__subtitle,
    body:not(.dark-theme) .section__subtitle {
        color: var(--portfolio-muted);
    }

    .home__focus {
        display: flex;
        flex-wrap: wrap;
        gap: .55rem;
        margin: -1rem 0 1.75rem;
    }

    .home__focus-pill {
        border: 1px solid rgba(23, 123, 152, .22);
        border-radius: 999px;
        color: var(--first-color-bit-lighter);
        font-size: var(--smaller-font-size);
        font-weight: var(--font-medium);
        line-height: 1;
        padding: .55rem .75rem;
        background: rgba(23, 123, 152, .07);
    }

    body:not(.dark-theme) .header,
    body.dark-theme .header {
        transition: background .25s ease, box-shadow .25s ease, backdrop-filter .25s ease;
    }

    body:not(.dark-theme) .scroll-header {
        background: rgba(255, 255, 255, .86);
        box-shadow: 0 8px 28px rgba(15, 23, 42, .08);
        backdrop-filter: blur(14px);
    }

    body.dark-theme .scroll-header {
        background: rgba(16, 23, 38, .86);
        box-shadow: 0 8px 28px rgba(0, 0, 0, .28);
        backdrop-filter: blur(14px);
    }

    body:not(.dark-theme) .nav__link,
    body.dark-theme .nav__link {
        border-radius: 999px;
        padding: .45rem .75rem;
        position: relative;
        transition: color .25s ease, background .25s ease, transform .25s ease;
    }

    body:not(.dark-theme) .nav__link::after,
    body.dark-theme .nav__link::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: .18rem;
        width: 1.15rem;
        height: 2px;
        border-radius: 999px;
        opacity: 0;
        transform: translateX(-50%) scaleX(.35);
        transition: opacity .25s ease, transform .25s ease;
    }

    body:not(.dark-theme) .nav__link::after {
        background: var(--first-color);
    }

    body.dark-theme .nav__link::after {
        background: #38bdf8;
    }

    body:not(.dark-theme) .nav__link:hover {
        color: var(--first-color);
        background: rgba(23, 123, 152, .08);
        transform: translateY(-2px);
    }

    body.dark-theme .nav__link:hover {
        color: #e8f7ff;
        background: rgba(56, 189, 248, .12);
        transform: translateY(-2px);
    }

    .nav__link:hover::after,
    .nav__link.active-link::after {
        opacity: 1 !important;
        transform: translateX(-50%) scaleX(1) !important;
    }

    .section__title {
        color: var(--portfolio-ink, #172033) !important;
        font-size: clamp(1.85rem, 3vw, 2.35rem);
        font-weight: 750;
        letter-spacing: 0;
        line-height: 1.15;
        margin-bottom: .55rem;
        position: relative;
    }

    .section__title::after {
        content: '';
        display: block;
        width: 3.25rem;
        height: 3px;
        border-radius: 999px;
        background: linear-gradient(90deg, var(--first-color), rgba(23, 123, 152, .28));
        margin: .75rem auto 0;
    }

    .section__subtitle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        color: var(--portfolio-muted, #667085);
        font-size: .95rem;
        letter-spacing: 0;
        margin: 0 auto 3rem;
    }

    .section__subtitle::before,
    .section__subtitle::after {
        content: '';
        width: 1.5rem;
        height: 1px;
        background: rgba(148, 163, 184, .45);
        margin: 0 .65rem;
    }

    .about.section .section__title,
    .about.section .about__info-title,
    .about.section .about__info-name {
        color: #ffffff !important;
    }

    .about.section .about__description {
        color: #e8eef8 !important;
    }

    .about.section .section__title::after {
        background: linear-gradient(90deg, #38bdf8, rgba(56, 189, 248, .28));
    }

    body.dark-theme .section__title {
        color: #f8fbff !important;
    }

    body.dark-theme .section__subtitle,
    body.dark-theme .skills__subtitle {
        color: #cbd5e1 !important;
    }

    .skills__container {
        align-items: start;
        column-gap: 4rem;
        row-gap: .75rem;
    }

    .skills__content {
        padding: .15rem 0 .75rem;
    }

    .skills__header {
        align-items: center;
        margin-bottom: 1.25rem;
    }

    .skills__content.skills__close .skills__header {
        margin-bottom: 1.45rem;
    }

    .skills__header .skills__titles {
        font-size: 1.55rem;
        line-height: 1.25;
    }

    .skills__icon {
        font-size: 1.65rem;
        margin-right: 1rem;
        min-width: 1.65rem;
    }

    .skills__subtitle {
        display: block;
        line-height: 1.45;
        max-width: 18rem;
    }

    .skills__list {
        padding-left: 2.65rem;
        row-gap: .95rem;
    }

    .skills__name {
        font-size: .9rem;
    }

    .skills__number {
        color: var(--text-color);
        font-size: .88rem;
    }

    .skills__bar,
    .skills__percentage {
        height: 4px;
    }

    .skills__bar {
        overflow: hidden;
    }

    body.dark-theme .skills__header .skills__titles,
    body.dark-theme .skills__name,
    body.dark-theme .skills__icon {
        color: #38bdf8 !important;
    }

    body.dark-theme .skills__number {
        color: #e5edf8 !important;
    }

    body.dark-theme .skills__bar {
        background: rgba(148, 163, 184, .28);
    }

    body.dark-theme .skills__percentage {
        background: linear-gradient(90deg, #38bdf8, #a5b4fc);
    }

    .portfolio {
        overflow: hidden;
    }

    .portfolio__container {
        max-width: 1120px;
        padding: 1.5rem 5rem 5.25rem;
        overflow: visible;
    }

    .portfolio__container .swiper-slide {
        height: auto;
        padding: 1.5rem 0;
    }

    .portfolio__content {
        position: relative;
        display: grid;
        grid-template-columns: minmax(280px, .85fr) minmax(300px, 1.15fr);
        align-items: center;
        gap: 2rem;
        min-height: 430px;
        height: 100%;
        padding: 3rem;
        border: 3px solid rgba(255, 255, 255, .86);
        border-radius: 2rem;
        background:
            radial-gradient(circle at 82% 24%, rgba(255, 255, 255, .4), transparent 26%),
            linear-gradient(135deg, #177b98 0%, #18a8b5 46%, #f2b66d 100%);
        box-shadow: 0 30px 70px rgba(15, 23, 42, .18), 0 1px 0 rgba(255, 255, 255, .65) inset;
        isolation: isolate;
        overflow: visible;
    }

    .portfolio__content::before,
    .portfolio__content::after {
        content: '';
        position: absolute;
        border: 3px solid rgba(255, 255, 255, .88);
        border-radius: 1.45rem;
        box-shadow: 0 24px 54px rgba(15, 23, 42, .16);
        z-index: -1;
        pointer-events: none;
    }

    .portfolio__content::before {
        width: 9rem;
        height: 12rem;
        right: -4.25rem;
        top: 4.75rem;
        background: linear-gradient(145deg, rgba(232, 249, 243, .96), rgba(59, 213, 133, .82));
    }

    .portfolio__content::after {
        width: 7.5rem;
        height: 8.75rem;
        right: -1.75rem;
        bottom: -2.75rem;
        background: linear-gradient(145deg, rgba(255, 241, 219, .98), rgba(247, 181, 98, .82));
    }

    .portfolio__content > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
        max-width: 34rem;
        order: 1;
        z-index: 1;
    }

    .portfolio__img {
        width: min(100%, 440px);
        max-width: none;
        height: 310px;
        margin: 0 0 0 auto;
        border: 3px solid rgba(255, 255, 255, .88);
        border-radius: 1.45rem;
        object-fit: cover;
        object-position: top center;
        background: rgba(255, 255, 255, .72);
        box-shadow: 0 24px 44px rgba(15, 23, 42, .24);
        order: 2;
        transform: translateX(.75rem);
        z-index: 1;
    }

    .portfolio__title {
        color: #fff !important;
        font-size: clamp(2rem, 4vw, 3.2rem);
        line-height: 1.08;
        margin-bottom: .95rem;
        text-shadow: 0 10px 28px rgba(15, 23, 42, .18);
    }

    .portfolio__description {
        color: rgba(255, 255, 255, .88) !important;
        font-size: 1rem;
        line-height: 1.75;
        margin-bottom: 1.25rem;
        max-width: 32rem;
    }

    .portfolio__tech {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        margin-bottom: 1.55rem;
    }

    .portfolio__tech strong {
        flex-basis: 100%;
        color: rgba(255, 255, 255, .95) !important;
        font-size: .78rem;
        letter-spacing: .08em;
        margin-bottom: .05rem;
        text-transform: uppercase;
    }

    .portfolio__tech-chip {
        border: 1px solid rgba(255, 255, 255, .22);
        border-radius: 999px;
        color: #fff !important;
        background: rgba(255, 255, 255, .14);
        font-size: .76rem;
        font-weight: var(--font-medium);
        line-height: 1;
        padding: .48rem .68rem;
        backdrop-filter: blur(10px);
    }

    .portfolio__btn {
        display: inline-flex;
        align-items: center;
        gap: .45rem;
        align-self: flex-start;
        border: 1px solid rgba(255, 255, 255, .74);
        border-radius: 999px;
        background: rgba(255, 255, 255, .92);
        color: #172033 !important;
        font-size: .9rem;
        font-weight: 700;
        padding: .82rem 1.1rem;
        box-shadow: 0 14px 30px rgba(15, 23, 42, .16);
    }

    .portfolio__btn:hover {
        color: #fff !important;
        background: #172033;
        border-color: #172033;
        transform: translateY(-2px);
        box-shadow: 0 18px 38px rgba(15, 23, 42, .22);
    }

    .portfolio__container .swiper-button-prev,
    .portfolio__container .swiper-button-next {
        width: 3.15rem;
        height: 3.15rem;
        border: 2px solid rgba(255, 255, 255, .76);
        border-radius: 999px;
        background: rgba(255, 255, 255, .16);
        color: #fff;
        box-shadow: 0 18px 36px rgba(15, 23, 42, .18);
        backdrop-filter: blur(14px);
        transition: background .25s ease, border-color .25s ease, color .25s ease, transform .25s ease, box-shadow .25s ease;
    }

    .portfolio__container .swiper-button-prev:hover,
    .portfolio__container .swiper-button-next:hover {
        color: #172033;
        border-color: rgba(255, 255, 255, .96);
        background: rgba(255, 255, 255, .95);
        box-shadow: 0 22px 42px rgba(15, 23, 42, .24);
        transform: translateY(-50%) scale(1.05);
    }

    .portfolio__container .swiper-button-prev:after,
    .portfolio__container .swiper-button-next:after {
        font-size: 1.05rem;
        font-weight: 800;
    }

    .portfolio__container .swiper-button-prev {
        left: 6.4rem;
    }

    .portfolio__container .swiper-button-next {
        right: 6.4rem;
    }

    .portfolio .swiper-pagination {
        position: static !important;
        display: flex !important;
        flex-direction: row !important;
        justify-content: center;
        align-items: center;
        gap: .55rem;
        margin-top: -1.25rem;
        transform: none !important;
    }

    .portfolio .swiper-pagination-bullet {
        width: .58rem;
        height: .58rem;
        opacity: .34;
        border-radius: 999px;
        background: var(--portfolio-accent, #177b98);
    }

    .portfolio .swiper-pagination-bullet-active {
        width: 2rem;
        height: .58rem;
        opacity: 1;
        background: #172033;
    }

    .tour-swiper .swiper-pagination,
    .tour-swiper .swiper-pagination.swiper-pagination-hidden,
    .tour-swiper .swiper-pagination.swiper-pagination-lock {
        position: absolute !important;
        right: 1.5rem !important;
        top: 50% !important;
        left: auto !important;
        bottom: auto !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center;
        gap: .7rem;
        padding: .65rem .45rem;
        border: 1px solid rgba(255, 255, 255, .34);
        border-radius: 999px;
        background: rgba(15, 23, 42, .42);
        box-shadow: 0 18px 38px rgba(0, 0, 0, .2);
        backdrop-filter: blur(14px);
        transform: translateY(-50%) !important;
        opacity: 1 !important;
        visibility: visible !important;
        z-index: 20;
    }

    .tour-swiper .swiper-pagination-bullet {
        display: block !important;
        width: .72rem;
        height: .72rem;
        margin: 0 !important;
        border: 2px solid rgba(255, 255, 255, .9);
        border-radius: 999px;
        background: rgba(255, 255, 255, .36);
        opacity: 1 !important;
        visibility: visible !important;
        box-shadow: 0 0 0 2px rgba(15, 23, 42, .16);
    }

    .tour-swiper .swiper-pagination-bullet-active {
        width: .72rem;
        height: 2rem;
        border-color: #fff;
        background: linear-gradient(180deg, #38bdf8, #177b98);
        box-shadow: 0 0 0 4px rgba(56, 189, 248, .18);
    }

    .wizard__choices {
        max-width: 640px;
        gap: .85rem;
        padding: 1.25rem 0 0;
    }

    .wizard__btn {
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        gap: .75rem;
        min-height: 3.75rem;
        padding: .85rem 1rem;
        border: 1px solid rgba(23, 123, 152, .18);
        border-radius: .7rem;
        background: #fff;
        color: var(--portfolio-ink, #172033);
        font-size: .94rem;
        font-weight: 650;
        line-height: 1;
        box-shadow: 0 8px 22px rgba(15, 23, 42, .05);
        transition: border-color .25s ease, background .25s ease, color .25s ease, box-shadow .25s ease, transform .25s ease;
    }

    .wizard__btn i {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.15rem;
        height: 2.15rem;
        border-radius: .55rem;
        background: rgba(23, 123, 152, .08);
        color: var(--portfolio-accent, #177b98);
        font-size: 1.15rem;
        flex: 0 0 auto;
        transition: background .25s ease, color .25s ease, transform .25s ease;
    }

    .wizard__btn:hover {
        border-color: rgba(23, 123, 152, .35);
        background: #f8fcfe;
        color: var(--portfolio-ink, #172033);
        box-shadow: 0 14px 32px rgba(15, 23, 42, .08);
        transform: translateY(-2px);
    }

    .wizard__btn:hover i {
        background: var(--portfolio-accent, #177b98);
        color: #fff;
        transform: scale(1.04);
    }

    .wizard__buttons .wizard__btn {
        justify-content: center;
        width: auto;
        min-width: 8.5rem;
    }

    .wizard__btn.primary {
        border-color: var(--portfolio-ink, #172033);
        background: var(--portfolio-ink, #172033);
        color: #fff;
    }

    .wizard__btn.primary:hover {
        background: var(--portfolio-accent, #177b98);
        border-color: var(--portfolio-accent, #177b98);
        color: #fff;
    }

    .wizard__btn.secondary {
        border-color: rgba(100, 116, 139, .22);
        color: var(--portfolio-muted, #667085);
        background: #fff;
    }

    body.dark-theme .wizard__btn {
        border-color: rgba(148, 163, 184, .18) !important;
        background: rgba(30, 41, 59, .72) !important;
        color: #e8eef8 !important;
        box-shadow: 0 14px 30px rgba(0, 0, 0, .18);
    }

    body.dark-theme .wizard__btn i {
        background: rgba(56, 189, 248, .12);
        color: #38bdf8;
    }

    body.dark-theme .wizard__btn:hover {
        border-color: rgba(56, 189, 248, .38) !important;
        background: rgba(15, 23, 42, .92) !important;
        color: #fff !important;
    }

    body.dark-theme .wizard__btn:hover i {
        background: #38bdf8;
        color: #0f172a;
    }

    .location {
        overflow: hidden;
    }

    .location__container {
        display: grid;
        grid-template-columns: minmax(220px, .8fr) minmax(340px, 1.35fr) minmax(240px, .9fr);
        gap: 1.25rem;
        align-items: stretch;
    }

    .location__panel,
    .location__map-card {
        position: relative;
        min-height: 23rem;
        border: 1px solid rgba(148, 163, 184, .18);
        border-radius: 1.2rem;
        background:
            radial-gradient(circle at 20% 0%, rgba(56, 189, 248, .18), transparent 34%),
            linear-gradient(145deg, #07152f 0%, #0f2044 48%, #092c48 100%);
        color: #e8f7ff;
        box-shadow: 0 24px 58px rgba(15, 23, 42, .18);
        overflow: hidden;
    }

    .location__panel {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.35rem;
    }

    .location__panel::before,
    .location__map-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(125, 211, 252, .09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(125, 211, 252, .09) 1px, transparent 1px);
        background-size: 32px 32px;
        mask-image: linear-gradient(180deg, rgba(0, 0, 0, .8), transparent 78%);
        pointer-events: none;
    }

    .location__eyebrow {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        border: 1px solid rgba(125, 211, 252, .2);
        border-radius: 999px;
        background: rgba(14, 165, 233, .12);
        color: #7dd3fc;
        font-size: .72rem;
        font-weight: 700;
        letter-spacing: .08em;
        line-height: 1;
        padding: .45rem .65rem;
        text-transform: uppercase;
    }

    .location__panel h3,
    .location__map-card h3 {
        color: #fff;
        font-size: 1.45rem;
        line-height: 1.2;
        margin: .85rem 0 .5rem;
    }

    .location__panel p,
    .location__updated {
        color: rgba(226, 232, 240, .78);
        font-size: .88rem;
        line-height: 1.65;
        margin: 0;
    }

    .location__nz-visual {
        position: relative;
        height: 13rem;
        margin: 1rem 0;
        border: 1px solid rgba(125, 211, 252, .18);
        border-radius: 1rem;
        background:
            radial-gradient(circle at 58% 34%, rgba(56, 189, 248, .24), transparent 20%),
            linear-gradient(145deg, rgba(30, 64, 175, .5), rgba(8, 47, 73, .35));
        overflow: hidden;
    }

    .location__island {
        position: absolute;
        display: block;
        background: linear-gradient(145deg, #38bdf8, #177b98);
        box-shadow: 0 18px 28px rgba(8, 47, 73, .34);
    }

    .location__island--north {
        width: 4.7rem;
        height: 7.4rem;
        top: 1.35rem;
        left: 8.3rem;
        border-radius: 60% 35% 58% 42%;
        transform: rotate(22deg);
    }

    .location__island--south {
        width: 4.55rem;
        height: 8.2rem;
        left: 4.65rem;
        bottom: 1rem;
        border-radius: 42% 58% 35% 65%;
        transform: rotate(28deg);
        opacity: .88;
    }

    .location__pin {
        position: absolute;
        top: 4.35rem;
        left: 10.65rem;
        width: 1rem;
        height: 1rem;
        border: 3px solid #fff;
        border-radius: 50% 50% 50% 0;
        background: #ef4444;
        box-shadow: 0 0 0 .45rem rgba(239, 68, 68, .18);
        transform: rotate(-45deg);
        z-index: 2;
    }

    .location__map-card {
        padding: 1rem;
    }

    .location__map-header {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: .35rem .35rem 1rem;
    }

    .location__status {
        border-radius: 999px;
        background: rgba(34, 197, 94, .14);
        color: #bbf7d0;
        font-size: .78rem;
        font-weight: 700;
        line-height: 1;
        padding: .55rem .7rem;
    }

    .location__map {
        position: relative;
        z-index: 1;
        height: 18.8rem;
        border: 3px solid rgba(255, 255, 255, .82);
        border-radius: 1rem;
        background: #0f172a;
        overflow: hidden;
    }

    .location__map .leaflet-control-attribution {
        font-size: .62rem;
    }

    .location__weather-grid {
        display: grid;
        gap: .75rem;
        margin: 1rem 0;
    }

    .location__weather-card {
        border: 1px solid rgba(125, 211, 252, .16);
        border-radius: .9rem;
        background: rgba(255, 255, 255, .08);
        padding: .85rem;
        backdrop-filter: blur(12px);
    }

    .location__weather-card span {
        display: block;
        color: rgba(226, 232, 240, .72);
        font-size: .76rem;
        margin-bottom: .3rem;
    }

    .location__weather-card strong {
        color: #fff;
        font-size: 1.45rem;
        line-height: 1;
    }

    @media screen and (max-width: 767px) {
        .nav__menu {
            left: 50%;
            right: auto;
            bottom: -110%;
            width: min(94vw, 28rem);
            max-height: 72vh;
            overflow-y: auto;
            padding: 3.25rem 1.25rem 2rem;
            border-radius: 1.25rem 1.25rem 0 0;
            box-shadow: 0 -18px 42px rgba(15, 23, 42, .16);
            transform: translateX(-50%);
        }

        .nav__menu.show-menu {
            bottom: 0;
        }

        .nav__menu::before {
            content: '';
            position: absolute;
            top: .85rem;
            left: 50%;
            width: 2.75rem;
            height: 4px;
            border-radius: 999px;
            background: rgba(100, 116, 139, .28);
            transform: translateX(-50%);
        }

        .nav__close {
            top: .75rem;
            right: .9rem;
            bottom: auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 999px;
            background: rgba(23, 123, 152, .08);
            color: var(--portfolio-ink, #172033);
            font-size: 1.15rem;
            transition: background .25s ease, color .25s ease, transform .25s ease;
        }

        .nav__close:hover {
            background: var(--portfolio-ink, #172033);
            color: #fff;
            transform: rotate(90deg);
        }

        .wizard__choices {
            grid-template-columns: 1fr;
            width: min(100%, 22rem);
            max-width: 22rem;
            gap: .75rem;
            padding: 1rem 0 0;
            margin-top: 1.25rem;
        }

        .wizard__btn {
            width: 100%;
            min-height: 3.55rem;
            justify-content: flex-start;
            padding: .75rem .85rem;
            white-space: normal;
            text-align: left;
        }

        .portfolio__container {
            padding: .5rem .95rem 3.75rem;
        }

        .portfolio__container .swiper-slide {
            padding: .85rem 0 1.25rem;
        }

        .portfolio__content {
            grid-template-columns: 1fr;
            gap: 1rem;
            min-height: auto;
            padding: 1rem;
            border-width: 2px;
            border-radius: 1.35rem;
        }

        .portfolio__content::before,
        .portfolio__content::after {
            display: none;
        }

        .portfolio__content > div {
            order: 2;
            padding: .15rem .25rem .25rem;
        }

        .portfolio__img {
            order: 1;
            width: 100%;
            height: 220px;
            min-height: 0;
            max-height: none;
            margin: 0;
            border-radius: 1rem;
            transform: none;
        }

        .portfolio__title {
            font-size: 1.75rem;
        }

        .portfolio__description {
            font-size: .9rem;
            line-height: 1.6;
        }

        .portfolio__container .swiper-button-prev,
        .portfolio__container .swiper-button-next {
            display: none;
        }

        .location__container {
            grid-template-columns: 1fr;
        }

        .location__panel,
        .location__map-card {
            min-height: auto;
        }

        .location__map {
            height: 18rem;
        }

        .tour-swiper .swiper-pagination,
        .tour-swiper .swiper-pagination.swiper-pagination-hidden,
        .tour-swiper .swiper-pagination.swiper-pagination-lock {
            right: .85rem !important;
            padding: .5rem .34rem;
        }
    }
`;
document.head.appendChild(enhancementStyles);

/*==================== PROFILE CONTENT ====================*/
const aboutDescription = document.querySelector('.about__description');
const aboutInfoTitles = document.querySelectorAll('.about__info-title');
const aboutInfoNames = document.querySelectorAll('.about__info-name');
const homeDescription = document.querySelector('.home__description');
const homeData = document.querySelector('.home__data');

if (homeDescription) {
    homeDescription.textContent = 'Data Engineer and BI Developer focused on ETL pipelines, SQL, Power BI, geospatial analytics, and AI-assisted workflows that turn raw data into reliable insights.';
}

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

if (aboutDescription) {
    aboutDescription.textContent = "Hi, I'm Cornelio Parole III, a data-focused developer with less than 3 years of experience in ETL development, data engineering, analytics, and reporting. I enjoy learning new platforms, improving my skills in SQL, Power BI, Azure Data Factory, KNIME, geospatial mapping, and AI-assisted development, while also building web development projects as a hobby. I'm passionate about turning raw data into clear insights and reliable data solutions.";
}

if (aboutInfoTitles[0]) aboutInfoTitles[0].textContent = '<03';
if (aboutInfoNames[1]) aboutInfoNames[1].innerHTML = 'Available to Message<br />';

/*==================== CONTACT BUTTONS ====================*/
const contactChoiceIcons = {
    'Job Opportunity': 'uil-briefcase-alt',
    'Collaboration': 'uil-users-alt',
    'Consultation': 'uil-comment-question',
    'General Message': 'uil-comment-alt-message',
};

document.querySelectorAll('#step1 .wizard__btn').forEach((button) => {
    const label = Object.keys(contactChoiceIcons).find((item) => button.textContent.includes(item));
    if (label) button.innerHTML = `<i class="uil ${contactChoiceIcons[label]}" aria-hidden="true"></i><span>${label}</span>`;
});

/*==================== LOCATION SECTION ====================*/
function ensureLocationSection() {
    if (!document.querySelector('.nav__menu a[href="#location"]')) {
        const navList = document.querySelector('.nav__list');
        const item = document.createElement('li');
        item.className = 'nav__items';
        item.innerHTML = '<a href="#location" class="nav__link"><i class="uil uil-map-marker nav__icon"></i> Location</a>';
        navList?.appendChild(item);
        item.querySelector('.nav__link')?.addEventListener('click', linkAction);
    }

    if (document.getElementById('location')) return;

    const contact = document.getElementById('contact');
    if (!contact) return;

    const section = document.createElement('section');
    section.className = 'location section';
    section.id = 'location';
    section.innerHTML = `
        <h2 class="section__title">Location</h2>
        <span class="section__subtitle">Auckland, New Zealand</span>
        <div data-aos="fade-up" class="location__container container">
            <article class="location__panel">
                <span class="location__eyebrow">Residing Place</span>
                <h3>New Zealand</h3>
                <div class="location__nz-visual" aria-hidden="true">
                    <span class="location__island location__island--north"></span>
                    <span class="location__island location__island--south"></span>
                    <span class="location__pin"></span>
                </div>
                <p>Currently based around Auckland, working with data, BI, and modern development tools.</p>
            </article>
            <article class="location__map-card">
                <div class="location__map-header">
                    <div>
                        <span class="location__eyebrow">Interactive Map</span>
                        <h3>Auckland Focus</h3>
                    </div>
                    <span class="location__status" id="weatherStatus">Live</span>
                </div>
                <div id="aucklandMap" class="location__map" role="img" aria-label="Interactive map showing Auckland, New Zealand"></div>
            </article>
            <article class="location__panel location__weather">
                <span class="location__eyebrow">Live Weather</span>
                <h3>Auckland Now</h3>
                <div class="location__weather-grid">
                    <div class="location__weather-card"><span>Temperature</span><strong id="weatherTemp">--</strong></div>
                    <div class="location__weather-card"><span>Feels Like</span><strong id="weatherFeels">--</strong></div>
                    <div class="location__weather-card"><span>Wind</span><strong id="weatherWind">--</strong></div>
                </div>
                <p class="location__updated" id="weatherUpdated">Updating live Auckland weather...</p>
            </article>
        </div>
    `;
    contact.insertAdjacentElement('afterend', section);
}

function loadLeafletResources(callback) {
    if (typeof L !== 'undefined') {
        callback();
        return;
    }

    if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
    }

    const existingScript = document.querySelector('script[src*="leaflet.js"]');
    if (existingScript) {
        existingScript.addEventListener('load', callback, { once: true });
        return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = callback;
    document.body.appendChild(script);
}

function initLocationMap() {
    const mapEl = document.getElementById('aucklandMap');
    if (!mapEl || typeof L === 'undefined' || mapEl.dataset.ready === 'true') return;

    const auckland = [-36.8485, 174.7633];
    const map = L.map(mapEl, { zoomControl: true, scrollWheelZoom: false }).setView(auckland, 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap',
    }).addTo(map);
    L.marker(auckland).addTo(map).bindPopup('<strong>Auckland, New Zealand</strong><br>Current residing area').openPopup();
    mapEl.dataset.ready = 'true';
    setTimeout(() => map.invalidateSize(), 250);
}

const weatherCodeLabels = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Rime fog',
    51: 'Light drizzle',
    53: 'Drizzle',
    55: 'Heavy drizzle',
    61: 'Light rain',
    63: 'Rain',
    65: 'Heavy rain',
    80: 'Rain showers',
    95: 'Thunderstorm',
};

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.innerHTML = value;
}

async function updateAucklandWeather() {
    const status = document.getElementById('weatherStatus');
    const updated = document.getElementById('weatherUpdated');
    const endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7633&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Pacific%2FAuckland';

    try {
        if (status) status.textContent = 'Updating';
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Weather request failed');

        const data = await response.json();
        const current = data.current || {};
        const temp = Math.round(current.temperature_2m);
        const feels = Math.round(current.apparent_temperature);
        const wind = Math.round(current.wind_speed_10m);
        const humidity = Math.round(current.relative_humidity_2m);
        const condition = weatherCodeLabels[current.weather_code] || 'Live conditions';
        const observed = current.time ? new Date(current.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'now';

        setText('weatherTemp', `${temp}&deg;C`);
        setText('weatherFeels', `${feels}&deg;C`);
        setText('weatherWind', `${wind} km/h`);
        if (updated) updated.textContent = `${condition}. Humidity ${humidity}%. Updated ${observed}.`;
        if (status) status.textContent = 'Live';
    } catch (error) {
        if (updated) updated.textContent = 'Live weather is temporarily unavailable. Please refresh again later.';
        if (status) status.textContent = 'Offline';
    }
}

ensureLocationSection();
loadLeafletResources(initLocationMap);
updateAucklandWeather();
setInterval(updateAucklandWeather, 10 * 60 * 1000);

/*==================== PORTFOLIO ENHANCEMENT ====================*/
document.querySelectorAll('.portfolio__tech').forEach((tech) => {
    if (tech.dataset.enhanced === 'true') return;

    const strongText = tech.querySelector('strong')?.textContent || 'Tech Used:';
    const techList = tech.textContent
        .replace(strongText, '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);

    tech.innerHTML = `<strong>${strongText}</strong>`;
    techList.forEach((label) => {
        const chip = document.createElement('span');
        chip.className = 'portfolio__tech-chip';
        chip.textContent = label;
        tech.appendChild(chip);
    });
    tech.dataset.enhanced = 'true';
});

/*==================== SKILL CONTENT UPDATES ====================*/
function createSkillData(name, level) {
    const skill = document.createElement('div');
    skill.className = 'skills__data';
    skill.innerHTML = `<div class="skills__titles"><h3 class="skills__name">${name}</h3><span class="skills__number">${level}%</span></div><div class="skills__bar"><span class="skills__percentage"></span></div>`;
    return skill;
}

function addSkillItem(sectionTitle, name, level) {
    const section = Array.from(document.querySelectorAll('.skills__content')).find((content) => {
        const title = content.querySelector('.skills__titles');
        return title && title.textContent.trim() === sectionTitle;
    });

    if (!section || section.querySelector(`[data-skill="${name}"]`)) return;

    const skill = createSkillData(name, level);
    skill.dataset.skill = name;
    section.querySelector('.skills__list')?.appendChild(skill);
}

function addSkillSection({ title, subtitle, icon, skills, column = 'right' }) {
    const containerSelector = column === 'left' ? '.skills__container > div:first-child' : '.skills__container > div:last-child';
    const container = document.querySelector(containerSelector);
    const exists = Array.from(document.querySelectorAll('.skills__content .skills__titles')).some((heading) => heading.textContent.trim() === title);
    if (!container || exists) return;

    const section = document.createElement('div');
    section.className = 'skills__content skills__close';
    section.innerHTML = `
        <div class="skills__header">
            <i class="uil ${icon} skills__icon"></i>
            <div>
                <h1 class="skills__titles">${title}</h1>
                <span class="skills__subtitle">${subtitle}</span>
            </div>
            <i class="uil uil-angle-down skills__arrow"></i>
        </div>
        <div class="skills__list grid"></div>
    `;

    const list = section.querySelector('.skills__list');
    skills.forEach(({ name, level }) => list.appendChild(createSkillData(name, level)));
    container.appendChild(section);
    section.querySelector('.skills__header').addEventListener('click', toggleSkills);
}

document.querySelectorAll('.skills__content .skills__titles').forEach((title) => {
    if (title.textContent.trim() === 'Data Engineering & ETL') {
        const subtitle = title.parentElement.querySelector('.skills__subtitle');
        if (subtitle) subtitle.textContent = 'Less than 3 years';
    }
});

addSkillItem('Data Engineering & ETL', 'KNIME Analytics Platform', 70);
addSkillItem('Business Intelligence & Reporting', 'DAX Measures & Calculations', 75);

addSkillSection({
    title: 'Geospatial Analytics & Mapping',
    subtitle: 'Mapbox, Power BI Maps & Location-Based Analysis',
    icon: 'uil-map-marker',
    column: 'left',
    skills: [
        { name: 'Mapbox Map Development for Power BI', level: 70 },
        { name: 'Map-Based Data Analysis', level: 75 },
        { name: 'Geospatial Data Visualization', level: 70 },
    ],
});

addSkillSection({
    title: 'AI-Assisted Development',
    subtitle: 'Codex, Copilot & AI-Enhanced Workflows',
    icon: 'uil-robot',
    column: 'left',
    skills: [
        { name: 'OpenAI Codex for Development Support', level: 75 },
        { name: 'GitHub Copilot-Assisted Coding', level: 75 },
        { name: 'AI-Driven Debugging & Workflow Automation', level: 70 },
    ],
});

document.querySelectorAll('.skills__data').forEach((skill) => {
    const number = skill.querySelector('.skills__number');
    const percentage = skill.querySelector('.skills__percentage');
    if (number && percentage) percentage.style.width = number.textContent.trim();
});

/*==================== MODALS ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => modalViews[i]?.classList.add('active-modal'));
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => modalView.classList.remove('active-modal'));
    });
});

/*==================== SWIPERS ====================*/
const swiperPortfolio = new Swiper('.portfolio__container', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    centeredSlides: false,
    navigation: {
        nextEl: '.portfolio .swiper-button-next',
        prevEl: '.portfolio .swiper-button-prev',
    },
    pagination: {
        el: '.portfolio .swiper-pagination',
        clickable: true,
    },
});

const swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: { slidesPerView: 2 },
    },
});

/*==================== SCROLL ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (!navItem) return;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItem.classList.add('active-link');
        } else {
            navItem.classList.remove('active-link');
        }
    });
}

function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) nav?.classList.add('scroll-header');
    else nav?.classList.remove('scroll-header');
}

function scrollUp() {
    const scrollUpButton = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUpButton?.classList.add('show-scroll');
    else scrollUpButton?.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollActive);
window.addEventListener('scroll', scrollHeader);
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
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
