// app.js - interactions globales : langue, thème (auto), contact, projets, lightbox, detail page, loader

// ====== TRADUCTIONS (FR / MG / EN) ======
const translations = {
  fr: {
    role: "Développeur / Analyste Programmeur / Formateur",
    projectsNav: "Projets",
    contactBtn: "Contact",
    cvBtn: "CV",
    headline: "Bonjour — Je suis <span class='text-indigo-600'>Tsiza</span>",
    lead: "Développeur full-stack spécialisé dans les applications de gestion sur mesure avec Windev, Windev Mobile et technologies web. Je crée des solutions digitales complètes pour optimiser les processus des PME et startups.",
    projectsBtn: "Voir mes projets",
    aboutBtn: "À propos",
    aboutTitle: "À propos",
    aboutText: "Passionné par le développement depuis plus de 5 ans, je maîtrise Windev, Windev Mobile ainsi que les technologies web (HTML, PHP, JS, CSS, MySQL). Je crée des applications de gestion complètes, intuitives et performantes, adaptées aux besoins spécifiques de chaque entreprise.",
    contactTitle: "Contact",
    labelName: "Nom",
    labelEmail: "E-mail",
    labelMessage: "Message",
    sendBtn: "Envoyer",
    phoneLabel: "Tél:",
    emailLabel: "Email:",
    analystTitle: "Analyste Programmeur",
    skillsTitle: "Compétences",
    downloadCV: "Télécharger CV",
    viewProjects: "Voir les projets",
    allProjects: "Tous les projets",
    webDev: "Développement Web",
    desktopApps: "Applications Desktop",
    training: "Formation",
    recent: "Plus récents",
    alphabetical: "A → Z",
    oldest: "Plus anciens",
    searchPlaceholder: "Rechercher un projet...",
    projectsFound: "projets trouvés",
    projectFound: "projet trouvé",
    inCategory: "dans",
    forSearch: "pour",
    seeMore: "Voir plus",
    close: "Fermer",
    sending: "Envoi en cours...",
    sent: "Message envoyé — merci",
    error: "Erreur: impossible d'envoyer"
  },
  mg: {
    role: "Mpamorona / Mpandinika Programmeur / Mpampianatra",
    projectsNav: "Tetikasa",
    contactBtn: "Mifandray",
    cvBtn: "CV",
    headline: "Manao ahoana — Izaho <span class='text-indigo-600'>Tsiza</span>",
    lead: "Mpamorona rindranasa full-stack manokana amin'ny rindranasa fandrindrana atao tailor-made amin'ny Windev, Windev Mobile ary teknolojia web. Mamorona vahaolana digitale feno hanatsarana ny fizotran'ny orinasa kely sy medium.",
    projectsBtn: "Jereo ny tetikasako",
    aboutBtn: "Momba ahy",
    aboutTitle: "Momba ahy",
    aboutText: "Tia ny fampandrosoana rindranasa efa mihoatra ny 5 taona, mahay mampiasa Windev, Windev Mobile ary teknolojia web (HTML, PHP, JS, CSS, MySQL). Manorina rindranasa fandrindrana feno, mora ampiasaina ary haingam-pandeha, mifanaraka amin'ny filan'ny orinasa tsirairay.",
    contactTitle: "Fifandraisana",
    labelName: "Anarana",
    labelEmail: "Mailaka",
    labelMessage: "Hafatra",
    sendBtn: "Alefaso",
    phoneLabel: "Finday:",
    emailLabel: "Mailaka:",
    analystTitle: "Mpandinika Programmeur",
    skillsTitle: "Fahaizana",
    downloadCV: "Download CV",
    viewProjects: "Jereo tetikasa",
    allProjects: "Tetikasa rehetra",
    webDev: "Fampandrosoana Web",
    desktopApps: "Fampiharana Desktop",
    training: "Fampiofanana",
    recent: "Farany indrindra",
    alphabetical: "A → Z",
    oldest: "Tranainy indrindra",
    searchPlaceholder: "Mitady tetikasa...",
    projectsFound: "tetikasa hita",
    projectFound: "tetikasa hita",
    inCategory: "ao amin'ny",
    forSearch: "ho an'ny",
    seeMore: "Jereo bebe kokoa",
    close: "Akatona",
    sending: "Alefa...",
    sent: "Nalefa ny hafatra — misaotra",
    error: "Hadisoana: tsy afaka nalefa"
  },
  en: {
    role: "Developer / Analyst Programmer / Trainer",
    projectsNav: "Projects",
    contactBtn: "Contact",
    cvBtn: "Resume",
    headline: "Hello — I'm <span class='text-indigo-600'>Tsiza</span>",
    lead: "Full-stack developer specialized in custom management applications with Windev, Windev Mobile and web technologies. I create comprehensive digital solutions to optimize processes for SMEs and startups.",
    projectsBtn: "See my projects",
    aboutBtn: "About",
    aboutTitle: "About",
    aboutText: "Passionate about development for over 5 years, I master Windev, Windev Mobile as well as web technologies (HTML, PHP, JS, CSS, MySQL). I create complete, intuitive and high-performance management applications tailored to the specific needs of each business.",
    contactTitle: "Contact",
    labelName: "Name",
    labelEmail: "E-mail",
    labelMessage: "Message",
    sendBtn: "Send",
    phoneLabel: "Phone:",
    emailLabel: "Email:",
    analystTitle: "Analyst Programmer",
    skillsTitle: "Skills",
    downloadCV: "Download CV",
    viewProjects: "View projects",
    allProjects: "All projects",
    webDev: "Web Development",
    desktopApps: "Desktop Applications",
    training: "Training",
    recent: "Most recent",
    alphabetical: "A → Z",
    oldest: "Oldest",
    searchPlaceholder: "Search projects...",
    projectsFound: "projects found",
    projectFound: "project found",
    forSearch: "for",
    seeMore: "See more",
    close: "Close",
    sending: "Sending...",
    sent: "Message sent — thank you",
    error: "Error: could not send"
  }
};

// ====== PROJETS (source unique utilisée par pages) ======
const projects = [
  {
    id: "p1",
    title: "Logiciel Gestion des stocks et des dates d'affinage — Fromagerie Fi Ambatomanga",
    desc: "Gestion des stocks, contrôle des dates d'affinage et rapports automatisés pour fromagerie artisanale.",
    img: "../images/fommage_fi.PNG",
    category: "desktop",
    year: "Février 2024 à Avril 2024",
    year3:2024,
    tags: ["Windev", "HFSQL", "Desktop"],
    long: "Application de gestion de stocks conçue spécifiquement pour une fromagerie artisanale. Suivi des lots, gestion des dates d'affinage, alertes automatiques, et génération de rapports PDF."
  },
  {
    id: "p2",
    title: "Gestion Hôtel — Zahamotel",
    desc: "Système complet de réservation et gestion hôtelière avec interface intuitive.",
    img: "../images/hotel.PNG",
    category: "desktop",
    year: "2020 à 2021",
    year3:2020,
    tags: ["Windev", "HFSQL", "Desktop", "Android/iOS"],
    long: "Logiciel et Application de gestion hôtelière incluant réservations en ligne, gestion des chambres, facturation automatique et tableau de bord administratif."
  },
  {
    id: "p3",
    title: "Plan de travail & Budget — Centre Malgache de la Canne et du Sucre (CMCS) Tsimbazaza",
    desc: "Outil de planification et suivi budgétaire pour organisations.",
    img: "../images/CMCS.PNG",
    category: "desktop",
    year: "Avril 2024 à Mai 2024",
    year3:2024,
    tags: ["Windev", "HFSQL", "Desktop"],
    long: "Logiciel de gestion de plans de travail et des Budgets"
  },
  {
    id: "p4",
    title: "Application Mobile — Gestion des stocks et des livraisons",
    desc: "Une application pour les revendeurs. Sons rôle principal est de les aider à mieux acheter des articles auprès de leurs fournisseurs et à mieux les livrer à leurs clients.",
    img: "../images/mobile_stock.PNG",
    category: "application",
    year: "Juin 2025",
    year3:2025,
    tags: ["Windev Mobile", "HFSQL", "Android/iOS"],
    long: "Une application pour les revendeurs. Sons rôle principal est de les aider à mieux acheter des articles auprès de leurs fournisseurs et à mieux les livrer à leurs clients. Tout ça pour que le revendeur gagne du temps, fasse moins d'erreurs et soit plus efficace."
  },
  {
    id: "p5",
    title: "Application Mobile — PCG 2005 à Madagascar",
    desc: "Application mobile donne la nomenclature (numéro et nom) de tous les comptes qui peuvent être utilisé à Madagascar.",
    img: "../images/pcg.PNG",
    category: "application",
    year: "Octobre 2025",
    year3:2025,
    tags: ["Windev Mobile", "Android/iOS"],
    long: "Une application mobile donne la nomenclature (numéro et nom) de tous les comptes qui peuvent être utilisé à Madagascar. Il renferme aussi les règles, les normes et les principes à respecter en matière de comptabilité. Le PCG 2005 vient en remplacement du PCG 87 selon le décret N° 2004-272 du 18/02/04."
  },
  {
    id: "p6",
    title: "Gestion de location Evénementielle — AMOR'EVENTS (Designer Evènementiel)",
    desc: "Une solution complète pour gérer votre activité de location événementielle, votre parc matériel et votre logistique grâce à un outil spécialisé qui automatise vos processus et optimise votre rentabilité.",
    img: "../images/amort_event.PNG",
    category: "desktop",
    year: "Août 2025 à Septembre 2025",
    year3:2025,
    tags: ["Windev", "HFSQL", "Desktop"],
    long: "Logiciel qui centralise tout votre parc matériel, réservations et logistique. Automatisez vos devis, planning et facturation pour gagner du temps et optimiser votre rentabilité. La solution idéale pour les prestataires événementiels suhaitant professionnaliser et dévélopper leur activité."
  },
  {
    id: "p7",
    title: "Portfolio — Tsiza Nomenjanahary",
    desc: "Mon portfolio présente une séléction de mes réalisations les plus significatives. Il reflète mon expertise et mon engagemnt pour des projets de qualité.",
    img: "../images/portfolio.PNG",
    category: "web",
    year: "Septembre 2025",
    year3:2025,
    tags: ["HTML/CSS", "Javascript", "Tailwind", "AOS"],
    long: "Ce portfolio est une vitrine de mon parcours et mes compétences. J'y présente une série de projets où j'ai appliqué une méthodologie rigoureuse et une approche créative. Chaque étude de cas détaille les objectifs, le processus et les résultas concrets obtenus."
  },
  {
    id: "p8",
    title: "Logiciel de gestion commercial❤",
    desc: "Un logiciel de gestion de marchandise pour grossiste est un outil qui centralise et automatise le suivi des stocks,des ventes et des achats. Il permet de piloter l'activité en optimisant les flux physiques et financiers de l'entreprise.",
    img: "../images/vente.PNG",
    category: "desktop",
    year: "Septembre 2022 - Décembre 2022",
    year3:2022,
    tags: ["Windev", "HFSQL", "Desktop", "Adroid/iOS"],
    long: "Logiciel spécialement conçu pour gérer la complexité des activités de gros, comme le contrôle des stocks multi-dépôts, la gestion des tarifs et remises par client, ainsi que le suivi des commandes et de la logistique. Il offre une traçabilité complète des produits, de leur réception jusqu'à leur expédition, et génère des indicateurs de performance pour aider à la prise de décision. Son objectif principal est d'améliorer la rentabilité en réduisant les coûts d'exploitation et en augmentant l'efficacité opérationnelle."
  }
];

// ====== GESTION DU MENU MOBILE ======
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const langSelect = document.getElementById('langSelect');
  const langSelectMobile = document.getElementById('langSelectMobile');
  const themeSelect = document.getElementById('themeSelect');
  const themeSelectMobile = document.getElementById('themeSelectMobile');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
      if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // Synchroniser les sélecteurs mobile/desktop
  if (langSelect && langSelectMobile) {
    langSelectMobile.value = langSelect.value;
    langSelectMobile.addEventListener('change', (e) => {
      langSelect.value = e.target.value;
      setLanguage(e.target.value);
    });
    langSelect.addEventListener('change', (e) => {
      langSelectMobile.value = e.target.value;
    });
  }

  if (themeSelect && themeSelectMobile) {
    themeSelectMobile.value = themeSelect.value;
    themeSelectMobile.addEventListener('change', (e) => {
      themeSelect.value = e.target.value;
      handleThemeChange(e.target.value);
    });
    themeSelect.addEventListener('change', (e) => {
      themeSelectMobile.value = e.target.value;
    });
  }
}

// ====== LOADER ======
function hideLoader() {
  const loader = document.getElementById('siteLoader');
  if (!loader) return;
  loader.classList.add('fade-out');
  setTimeout(() => {
    loader.style.display = 'none';
    document.body.classList.remove('lock-scroll');
  }, 400);
}

document.addEventListener('DOMContentLoaded', () => {
  // Ajuster le padding pour le header fixe
  const header = document.querySelector('header');
  if (header) {
    const headerHeight = header.offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
  }

  setTimeout(() => {
    if (window.AOS) AOS.init({
      once: true,
      duration: 700,
      offset: 50,
      delay: 100
    });
    hideLoader();
    initMobileMenu();
  }, 400);
});

// Recalculer le padding lors du redimensionnement
window.addEventListener('resize', () => {
  const header = document.querySelector('header');
  if (header) {
    const headerHeight = header.offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
  }
});

// ====== LANGUE ======
const langSelect = document.getElementById("langSelect");
if (langSelect) {
  const savedLang = localStorage.getItem("site-lang");
  const initialLang = savedLang || (navigator.language?.startsWith('mg') ? 'mg' : (navigator.language?.startsWith('en') ? 'en' : 'fr'));
  langSelect.value = initialLang;
  setLanguage(initialLang);
  langSelect.addEventListener("change", () => setLanguage(langSelect.value));
}

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (key === 'headline') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  document.body.dataset.lang = lang;
  localStorage.setItem("site-lang", lang);
}

// ====== THEME ======
const themeSelect = document.getElementById("themeSelect");
const THEME_KEY = "site-theme";

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem(THEME_KEY, theme);
}

function autoThemeByHour() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved && saved !== 'auto') {
    applyTheme(saved);
    if (themeSelect) themeSelect.value = saved;
    return;
  }
  const h = new Date().getHours();
  const theme = (h >= 7 && h < 19) ? 'light' : 'dark';
  applyTheme(theme);
  if (themeSelect) themeSelect.value = 'auto';
}

function handleThemeChange(theme) {
  if (theme === 'auto') {
    localStorage.setItem(THEME_KEY, 'auto');
    autoThemeByHour();
  } else {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'auto' || !saved) {
    autoThemeByHour();
  } else {
    applyTheme(saved);
    if (themeSelect) themeSelect.value = saved;
  }
}

if (themeSelect) {
  themeSelect.addEventListener('change', (e) => handleThemeChange(e.target.value));
}

initTheme();

// ====== YEAR ======
const y = new Date().getFullYear();
document.getElementById("year")?.append(y);
document.getElementById("year2")?.append(y);

// ====== CV / SCROLL ======
function openCV() {
  window.open("CV_TSIZA.pdf", "_blank");
}
window.openCV = openCV;

function scrollToContact() {
  document.getElementById("contactCard")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
window.scrollToContact = scrollToContact;

// ====== CONTACT FORM ======
const EMAILJS_USER_ID = "user_F3hMWO7Bf5Go7wfROA7FY1Aw";
const EMAILJS_SERVICE_ID = "service_9u51sws";
const EMAILJS_TEMPLATE_ID = "template_okinw8x";

if (window.emailjs && EMAILJS_USER_ID !== "user_F3hMWO7Bf5Go7wfROA7FY1Aw") {
  emailjs.init(EMAILJS_USER_ID);
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const status = document.getElementById('formStatus');
  const lang = document.body.dataset.lang || 'fr';

  // État de chargement
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading-spinner"></span> ' + (lang === 'mg' ? 'Alefa...' : (lang === 'en' ? 'Sending...' : 'Envoi...'));
  status.textContent = '';

  const payload = {
    from_name: form.name.value,
    from_email: form.email.value,
    message: form.message.value,
    to_email: 'rakototsizanaka@gmail.com'
  };

  try {
    if (window.emailjs && EMAILJS_USER_ID !== "YOUR_EMAILJS_USER_ID") {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload);
    } else {
      // Fallback Netlify
      const fd = new FormData(form);
      const resp = await fetch('/', { method: 'POST', body: fd });
      if (!resp.ok) throw new Error('Netlify response not ok');
    }

    status.textContent = (lang === 'mg') ? 'Nalefa — misaotra' : (lang === 'en' ? 'Message sent — thanks' : 'Message envoyé — merci');
    status.className = 'text-sm text-green-600 dark:text-green-400 text-center mt-4';
    form.reset();
  } catch (err) {
    status.textContent = (lang === 'mg') ? 'Hadisoana: tsy nalefa' : (lang === 'en' ? 'Error: could not send' : 'Erreur: impossible d\'envoyer');
    status.className = 'text-sm text-red-600 dark:text-red-400 text-center mt-4';
    console.error('Form submission error:', err);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = translations[lang]?.sendBtn || 'Envoyer';
  }

  return false;
}
window.handleFormSubmit = handleFormSubmit;

// ====== PROJETS GRID ======
function renderProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  const emptyState = document.getElementById('emptyState');
  const resultsInfo = document.getElementById('resultsInfo');

  if (!grid) return;

  grid.innerHTML = '';

  const category = document.getElementById('filterCategory')?.value || 'all';
  const sort = document.getElementById('sortSelect')?.value || 'recent';
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();

  let list = projects.slice();

  if (category !== 'all') list = list.filter(p => p.category === category);
  if (search) list = list.filter(p =>
    (p.title + ' ' + p.desc + ' ' + p.tags.join(' ')).toLowerCase().includes(search)
  );

  // Tri
  if (sort === 'recent') list.sort((a, b) => b.year3 - a.year3);
  else if (sort === 'alpha') list.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === 'oldest') list.sort((a, b) => a.year3 - b.year3);

  // Info résultats
  if (resultsInfo) {
    const count = list.length;
    const lang = document.body.dataset.lang || 'fr';
    const texts = {
      fr: `${count} projet${count !== 1 ? 's' : ''} trouvé${count !== 1 ? 's' : ''}`,
      mg: `${count} tetikasa hita`,
      en: `${count} project${count !== 1 ? 's' : ''} found`
    };
    resultsInfo.textContent = texts[lang];

    if (category !== 'all') {
      const categoryTexts = {
        fr: ` dans "${getCategoryName(category)}"`,
        mg: ` amin'ny "${getCategoryNameMG(category)}"`,
        en: ` in "${getCategoryNameEN(category)}"`
      };
      resultsInfo.textContent += categoryTexts[lang];
    }
    if (search) {
      const searchTexts = {
        fr: ` pour "${search}"`,
        mg: ` ho an'ny "${search}"`,
        en: ` for "${search}"`
      };
      resultsInfo.textContent += searchTexts[lang];
    }
  }

  // État vide
  if (emptyState) {
    if (list.length === 0) {
      emptyState.classList.remove('hidden');
      grid.classList.add('hidden');
    } else {
      emptyState.classList.add('hidden');
      grid.classList.remove('hidden');
    }
  }

  // Rendu des cartes
  list.forEach((p, idx) => {
    const card = document.createElement('article');
    card.className = 'bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group';
    card.innerHTML = `
      <div class="relative overflow-hidden">
        <img src="${p.img}" alt="${p.title}" 
             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
        <div class="absolute top-3 right-3">
          <span class="px-2 py-1 bg-blue-500 text-white rounded-full text-[11px] font-bold backdrop-blur-sm">
            ${p.year}
          </span>
        </div>
      </div>
      <div class="p-4 sm:p-5">
        <h3 class="font-semibold text-slate-900 dark:text-white text-sm sm:text-base line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          ${p.title}
        </h3>
        <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
          ${p.desc}
        </p>
        <div class="mt-3 sm:mt-4 flex items-center justify-between">
          <div class="flex flex-wrap gap-1">
            ${p.tags.slice(0, 2).map(tag =>
      `<span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs text-slate-600 dark:text-slate-400">${tag}</span>`
    ).join('')}
            ${p.tags.length > 2 ? `<span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs text-slate-600 dark:text-slate-400">+${p.tags.length - 2}</span>` : ''}
          </div>
          <button class="open-btn text-xs sm:text-sm px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium" data-id="${p.id}">
            Voir
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Événements
  document.querySelectorAll('.open-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(btn.dataset.id);
    });
  });

  // Clic sur la carte
  document.querySelectorAll('#projectsGrid article').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        const btn = card.querySelector('.open-btn');
        if (btn) openLightbox(btn.dataset.id);
      }
    });
  });

  if (window.AOS) AOS.refresh();
}

function getCategoryName(category) {
  const names = {
    'all': 'Tous',
    'application': 'Applications Android',
    'web': 'Développement Web',
    'desktop': 'Applications Desktop',
    'formation': 'Formation'
  };
  return names[category] || category;
}

function getCategoryNameMG(category) {
  const names = {
    'all': 'Rehetra',
    'application': 'Fampiharana Android',
    'web': 'Fampandrosoana Web',
    'desktop': 'Fampiharana Desktop',
    'formation': 'Fampiofanana'
  };
  return names[category] || category;
}

function getCategoryNameEN(category) {
  const names = {
    'all': 'All',
    'application': 'Android Applications',
    'web': 'Web Development',
    'desktop': 'Desktop Applications',
    'formation': 'Training'
  };
  return names[category] || category;
}

// Événements de filtrage
document.getElementById('filterCategory')?.addEventListener('change', renderProjectsGrid);
document.getElementById('sortSelect')?.addEventListener('change', renderProjectsGrid);
document.getElementById('searchInput')?.addEventListener('input', debounce(renderProjectsGrid, 300));

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

if (document.getElementById('projectsGrid')) {
  renderProjectsGrid();
}

// ====== LIGHTBOX ======
function openLightbox(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  document.getElementById('lbTitle').textContent = p.title;
  document.getElementById('lbImg').src = p.img;
  document.getElementById('lbImg').alt = p.title;
  document.getElementById('lbDesc').textContent = p.long || p.desc;

  const meta = document.getElementById('lbMeta');
  meta.innerHTML = `
    <span class="px-3 py-1 bg-blue-500 text-white rounded-full text-[11px] font-bold">${p.year}</span>
    ${p.tags.map(tag =>
    `<span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">${tag}</span>`
  ).join('')}
  `;

  const lb = document.getElementById('lightbox');
  lb.classList.remove('hidden');
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.add('hidden');
  lb.style.display = 'none';
  document.body.style.overflow = '';
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// Fermer lightbox avec ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Fermer lightbox en cliquant à l'extérieur
document.getElementById('lightbox')?.addEventListener('click', (e) => {
  if (e.target.id === 'lightbox') closeLightbox();
});