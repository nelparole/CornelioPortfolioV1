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

if (aboutDescription) {
    aboutDescription.textContent = 'Hi, I’m Cornelio Parole III, a data-focused developer with less than 3 years of experience in ETL development, data engineering, analytics, and reporting. I enjoy learning new platforms, improving my skills in SQL, Power BI, Azure Data Factory, KNIME, geospatial mapping, and AI-assisted development, while also building web development projects as a hobby. I’m passionate about turning raw data into clear insights and reliable data solutions.';
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
