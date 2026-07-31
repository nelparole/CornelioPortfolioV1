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

    .portfolio__container {
        max-width: 980px;
        padding: 1.25rem 3.25rem 4.5rem;
    }

    .portfolio__container .swiper-wrapper {
        align-items: stretch;
    }

    .portfolio__container .swiper-slide {
        height: auto;
        padding: 1rem;
    }

    .portfolio__content {
        display: grid;
        grid-template-columns: minmax(260px, .95fr) minmax(280px, 1fr);
        align-items: stretch;
        gap: 1.75rem;
        min-height: 0;
        height: 100%;
        padding: 1.1rem;
        border: 1px solid rgba(226, 232, 240, .88);
        border-radius: .85rem;
        background: linear-gradient(180deg, #fff 0%, #fbfdff 100%);
        box-shadow: 0 18px 44px rgba(15, 23, 42, .08), 0 1px 0 rgba(255, 255, 255, .85) inset;
    }

    .portfolio__content > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
        padding: .85rem .5rem .85rem 0;
    }

    .portfolio__img {
        width: 100%;
        max-width: none;
        height: 100%;
        min-height: 280px;
        max-height: 360px;
        margin: 0;
        border-radius: .65rem;
        object-fit: cover;
        object-position: top center;
        background: #f8fafc;
        border: 1px solid rgba(226, 232, 240, .72);
        box-shadow: none;
    }

    .portfolio__title {
        color: var(--portfolio-accent, var(--first-color-bit-lighter));
        font-size: 1.45rem;
        line-height: 1.25;
        margin-bottom: .65rem;
    }

    .portfolio__description {
        color: var(--portfolio-muted, var(--text-color));
        font-size: .93rem;
        line-height: 1.65;
        margin-bottom: 1rem;
    }

    .portfolio__tech {
        display: flex;
        flex-wrap: wrap;
        gap: .45rem;
        margin-bottom: 1.25rem;
    }

    .portfolio__tech strong {
        flex-basis: 100%;
        color: var(--title-color);
        font-size: .82rem;
        margin-bottom: .05rem;
    }

    .portfolio__tech-chip {
        border: 1px solid rgba(23, 123, 152, .18);
        border-radius: 999px;
        color: var(--first-color-bit-lighter);
        background: rgba(23, 123, 152, .07);
        font-size: .76rem;
        font-weight: var(--font-medium);
        line-height: 1;
        padding: .45rem .6rem;
    }

    .portfolio__btn {
        align-self: flex-start;
        border: 1px solid rgba(23, 123, 152, .2);
        border-radius: .65rem;
        background: rgba(255, 255, 255, .88);
        color: var(--first-color-bit-lighter);
        font-size: .88rem;
        padding: .68rem .9rem;
        box-shadow: none;
    }

    .portfolio__btn:hover {
        color: var(--first-color);
        background: rgba(23, 123, 152, .08);
        border-color: rgba(23, 123, 152, .32);
        transform: translateY(-1px);
    }

    .portfolio__container .swiper-button-prev,
    .portfolio__container .swiper-button-next {
        width: 2.25rem;
        height: 4rem;
        border: 1px solid rgba(226, 232, 240, .94);
        border-radius: 999px;
        background: rgba(255, 255, 255, .92);
        color: var(--portfolio-ink, #172033);
        box-shadow: 0 14px 34px rgba(15, 23, 42, .12);
        backdrop-filter: blur(12px);
        transition: background .25s ease, border-color .25s ease, color .25s ease, transform .25s ease, box-shadow .25s ease;
    }

    .portfolio__container .swiper-button-prev:hover,
    .portfolio__container .swiper-button-next:hover {
        color: #fff;
        border-color: var(--portfolio-ink, #172033);
        background: var(--portfolio-ink, #172033);
        box-shadow: 0 18px 38px rgba(15, 23, 42, .2);
        transform: translateY(-50%) translateX(0) scale(1.02);
    }

    .portfolio__container .swiper-button-prev:after,
    .portfolio__container .swiper-button-next:after {
        font-size: .9rem;
        font-weight: 700;
    }

    .portfolio__container .swiper-button-prev {
        left: 2.125rem;
    }

    .portfolio__container .swiper-button-next {
        right: 2.125rem;
    }

    .portfolio .swiper-pagination {
        margin-top: .35rem;
    }

    .portfolio .swiper-pagination-bullet {
        width: .55rem;
        height: .55rem;
        opacity: .25;
        background: var(--first-color-bit-lighter);
    }

    .portfolio .swiper-pagination-bullet-active {
        width: 1.65rem;
        border-radius: 999px;
        opacity: 1;
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
        .skills__container {
            column-gap: 0;
        }

        .skills__header .skills__titles {
            font-size: 1.45rem;
        }

        .portfolio__container {
            padding: .5rem 1rem 3.5rem;
        }

        .portfolio__container .swiper-slide {
            padding: .75rem 0;
        }

        .portfolio__content {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: .85rem;
        }

        .portfolio__content > div {
            padding: .25rem;
        }

        .portfolio__img {
            min-height: 210px;
            max-height: 250px;
        }

        .portfolio__container .swiper-button-prev,
        .portfolio__container .swiper-button-next {
            display: none;
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
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
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
