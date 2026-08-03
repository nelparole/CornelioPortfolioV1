/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== PROFILE CONTENT UPDATES ====================*/
const aboutDescription = document.querySelector('.about__description');
const aboutInfoTitles = document.querySelectorAll('.about__info-title');
const aboutInfoNames = document.querySelectorAll('.about__info-name');
const skillsSectionTitles = document.querySelectorAll('.skills__content .skills__titles');
const homeDescription = document.querySelector('.home__description');
const homeData = document.querySelector('.home__data');

const portfolioEnhancementStyles = document.createElement('style');
portfolioEnhancementStyles.textContent = `
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

    body:not(.dark-theme) {
        --portfolio-ink: #172033;
        --portfolio-muted: #667085;
        --portfolio-accent: #177b98;
        --portfolio-line: #e2e8f0;
        color: var(--portfolio-muted);
    }

    body:not(.dark-theme) .home__title,
    body:not(.dark-theme) .about__info-title,
    body:not(.dark-theme) .qualification__title,
    body:not(.dark-theme) .portfolio__tech strong {
        color: var(--portfolio-ink);
    }

    body:not(.dark-theme) .home__subtitle,
    body:not(.dark-theme) .home__description,
    body:not(.dark-theme) .about__description,
    body:not(.dark-theme) .skills__subtitle,
    body:not(.dark-theme) .portfolio__description,
    body:not(.dark-theme) .section__subtitle {
        color: var(--portfolio-muted);
    }

    body:not(.dark-theme) .skills__header .skills__titles,
    body:not(.dark-theme) .skills__icon,
    body:not(.dark-theme) .portfolio__title,
    body:not(.dark-theme) .portfolio__tech-chip,
    body:not(.dark-theme) .portfolio__btn {
        color: var(--portfolio-accent);
    }

    body:not(.dark-theme) .about.section .section__title,
    body:not(.dark-theme) .about.section .about__info-title {
        color: #f8fbff !important;
    }

    body:not(.dark-theme) .about.section .about__description {
        color: rgba(226, 232, 240, .9);
    }

    body:not(.dark-theme) .about.section .about__info-name {
        color: rgba(255, 255, 255, .92);
    }

    body:not(.dark-theme) .about.section .section__title::after {
        background: linear-gradient(90deg, rgba(23, 123, 152, .95), rgba(125, 211, 252, .6));
    }

    body:not(.dark-theme) .header {
        transition: background .25s ease, box-shadow .25s ease, backdrop-filter .25s ease;
    }

    body:not(.dark-theme) .scroll-header {
        background: rgba(255, 255, 255, .86);
        box-shadow: 0 8px 28px rgba(15, 23, 42, .08);
        backdrop-filter: blur(14px);
    }

    body:not(.dark-theme) .nav__link {
        border-radius: 999px;
        padding: .45rem .75rem;
        position: relative;
        transition: color .25s ease, background .25s ease, transform .25s ease;
    }

    body:not(.dark-theme) .nav__link::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: .18rem;
        width: 1.15rem;
        height: 2px;
        border-radius: 999px;
        background: var(--first-color);
        opacity: 0;
        transform: translateX(-50%) scaleX(.35);
        transition: opacity .25s ease, transform .25s ease;
    }

    body:not(.dark-theme) .nav__link:hover {
        color: var(--first-color);
        background: rgba(23, 123, 152, .08);
        transform: translateY(-2px);
    }

    body:not(.dark-theme) .nav__link:hover::after,
    body:not(.dark-theme) .nav__link.active-link::after {
        opacity: 1;
        transform: translateX(-50%) scaleX(1);
    }

    .section {
        position: relative;
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

    .skills__arrow {
        font-size: 1.35rem;
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

    .skills__titles {
        margin-bottom: .35rem;
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

    .portfolio {
        overflow: hidden;
    }

    .portfolio__container {
        max-width: 1120px;
        padding: 1.5rem 5rem 5.25rem;
        overflow: visible;
    }

    .portfolio__container .swiper-wrapper {
        align-items: stretch;
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
        transform: rotate(1.5deg);
    }

    .portfolio__content::after {
        width: 7.5rem;
        height: 8.75rem;
        right: -1.75rem;
        bottom: -2.75rem;
        background: linear-gradient(145deg, rgba(255, 241, 219, .98), rgba(247, 181, 98, .82));
        transform: rotate(2.5deg);
    }

    .portfolio__content > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
        max-width: 34rem;
        padding: .5rem 0;
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
        transition: width .25s ease, opacity .25s ease, background .25s ease;
    }

    .portfolio .swiper-pagination-bullet-active {
        width: 2rem;
        height: .58rem;
        opacity: 1;
        background: #172033;
    }

    .tour-swiper .swiper-pagination {
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
        z-index: 20;
    }

    .tour-swiper .swiper-pagination-bullet {
        width: .72rem;
        height: .72rem;
        margin: 0 !important;
        border: 2px solid rgba(255, 255, 255, .9);
        border-radius: 999px;
        background: rgba(255, 255, 255, .36);
        opacity: 1;
        box-shadow: 0 0 0 2px rgba(15, 23, 42, .16);
        transition: width .25s ease, height .25s ease, background .25s ease, transform .25s ease;
    }

    .tour-swiper .swiper-pagination-bullet-active {
        width: .72rem;
        height: 2rem;
        border-color: #fff;
        background: linear-gradient(180deg, #38bdf8, #177b98);
        box-shadow: 0 0 0 4px rgba(56, 189, 248, .18);
    }

    body:not(.dark-theme) .about.section .section__title,
    body:not(.dark-theme) .about.section .about__info-title,
    body.dark-theme .about.section .section__title,
    body.dark-theme .about.section .about__info-title {
        color: #ffffff !important;
    }

    body:not(.dark-theme) .about.section .about__description,
    body.dark-theme .about.section .about__description {
        color: #e8eef8 !important;
    }

    body:not(.dark-theme) .about.section .about__info-name,
    body.dark-theme .about.section .about__info-name {
        color: #ffffff !important;
    }

    body:not(.dark-theme) .about.section .section__title::after,
    body.dark-theme .about.section .section__title::after {
        background: linear-gradient(90deg, #38bdf8, rgba(56, 189, 248, .28));
    }

    body.dark-theme .header {
        transition: background .25s ease, box-shadow .25s ease, backdrop-filter .25s ease;
    }

    body.dark-theme .scroll-header {
        background: rgba(16, 23, 38, .86);
        box-shadow: 0 8px 28px rgba(0, 0, 0, .28);
        backdrop-filter: blur(14px);
    }

    body.dark-theme .nav__link {
        border-radius: 999px;
        padding: .45rem .75rem;
        position: relative;
        transition: color .25s ease, background .25s ease, transform .25s ease;
    }

    body.dark-theme .nav__link::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: .18rem;
        width: 1.15rem;
        height: 2px;
        border-radius: 999px;
        background: #38bdf8;
        opacity: 0;
        transform: translateX(-50%) scaleX(.35);
        transition: opacity .25s ease, transform .25s ease;
    }

    body.dark-theme .nav__link:hover {
        color: #e8f7ff;
        background: rgba(56, 189, 248, .12);
        transform: translateY(-2px);
    }

    body.dark-theme .nav__link:hover::after,
    body.dark-theme .nav__link.active-link::after {
        opacity: 1;
        transform: translateX(-50%) scaleX(1);
    }

    body.dark-theme .section__title {
        color: #f8fbff !important;
    }

    body.dark-theme .section__subtitle,
    body.dark-theme .skills__subtitle {
        color: #cbd5e1 !important;
    }

    body.dark-theme .skills__header .skills__titles,
    body.dark-theme .skills__name,
    body.dark-theme .skills__icon,
    body.dark-theme .portfolio__title {
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

    .wizard__btn.secondary:hover {
        border-color: rgba(100, 116, 139, .34);
        background: #f8fafc;
        color: var(--portfolio-ink, #172033);
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

    body.dark-theme .wizard__btn.primary {
        border-color: #38bdf8 !important;
        background: #38bdf8 !important;
        color: #0f172a !important;
    }

    body.dark-theme .wizard__btn.secondary {
        border-color: rgba(148, 163, 184, .22) !important;
        color: #cbd5e1 !important;
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

        body.dark-theme .nav__menu {
            background: rgba(16, 23, 38, .98);
            box-shadow: 0 -18px 42px rgba(0, 0, 0, .36);
        }

        body.dark-theme .nav__menu::before {
            background: rgba(203, 213, 225, .28);
        }

        body.dark-theme .nav__close {
            background: rgba(56, 189, 248, .12);
            color: #e8f7ff;
        }

        body.dark-theme .nav__close:hover {
            background: #38bdf8;
            color: #0f172a;
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

        .wizard__btn span {
            display: block;
            min-width: 0;
            line-height: 1.2;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        .wizard__choices {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: min(100%, 38rem);
            max-width: 38rem;
        }
    }

    @media screen and (max-width: 767px) {
        .skills__container {
            column-gap: 0;
        }

        .skills__header .skills__titles {
            font-size: 1.45rem;
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

        .portfolio .swiper-pagination {
            margin-top: -.75rem;
        }

        .tour-swiper .swiper-pagination {
            right: .85rem !important;
            padding: .5rem .34rem;
        }

        .tour-swiper .swiper-pagination-bullet {
            width: .62rem;
            height: .62rem;
        }

        .tour-swiper .swiper-pagination-bullet-active {
            width: .62rem;
            height: 1.65rem;
        }
    }
`;
document.head.appendChild(portfolioEnhancementStyles);

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

const contactChoiceIcons = {
    'Job Opportunity': 'uil-briefcase-alt',
    'Collaboration': 'uil-users-alt',
    'Consultation': 'uil-comment-question',
    'General Message': 'uil-comment-alt-message',
};

document.querySelectorAll('#step1 .wizard__btn').forEach((button) => {
    const label = Object.keys(contactChoiceIcons).find((item) => button.textContent.includes(item));

    if (label) {
        button.innerHTML = `<i class="uil ${contactChoiceIcons[label]}" aria-hidden="true"></i><span>${label}</span>`;
    }
});

document.querySelectorAll('.portfolio__tech').forEach((tech) => {
    if (tech.dataset.enhanced === 'true') {
        return;
    }

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

if (aboutDescription) {
    aboutDescription.textContent = "Hi, I'm Cornelio Parole III, a data-focused developer with less than 3 years of experience in ETL development, data engineering, analytics, and reporting. I enjoy learning new platforms, improving my skills in SQL, Power BI, Azure Data Factory, KNIME, geospatial mapping, and AI-assisted development, while also building web development projects as a hobby. I'm passionate about turning raw data into clear insights and reliable data solutions.";
}

if (aboutInfoTitles[0]) {
    aboutInfoTitles[0].textContent = '<03';
}

if (aboutInfoNames[1]) {
    aboutInfoNames[1].innerHTML = 'Available to Message<br />';
}

skillsSectionTitles.forEach((title) => {
    if (title.textContent.trim() === 'Data Engineering & ETL') {
        const subtitle = title.parentElement.querySelector('.skills__subtitle');
        if (subtitle) {
            subtitle.textContent = 'Less than 3 years';
        }
    }
});

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

    if (!section || section.querySelector(`[data-skill="${name}"]`)) {
        return;
    }

    const skill = createSkillData(name, level);
    skill.dataset.skill = name;
    section.querySelector('.skills__list')?.appendChild(skill);
}

function addSkillSection({ title, subtitle, icon, skills, column = 'right' }) {
    const containerSelector = column === 'left'
        ? '.skills__container > div:first-child'
        : '.skills__container > div:last-child';
    const container = document.querySelector(containerSelector);
    const exists = Array.from(document.querySelectorAll('.skills__content .skills__titles')).some((heading) => heading.textContent.trim() === title);

    if (!container || exists) {
        return;
    }

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

/*==================== SKILLS BAR WIDTH ====================*/
document.querySelectorAll('.skills__data').forEach((skill) => {
    const number = skill.querySelector('.skills__number');
    const percentage = skill.querySelector('.skills__percentage');

    if (number && percentage) {
        percentage.style.width = number.textContent.trim();
    }
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

/*==================== PORTFOLIO SWIPER ====================*/
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



/*==================== TESTIMONIAL SWIPER ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
