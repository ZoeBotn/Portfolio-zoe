const translations = {
  fr: {
    // Nav
    nav_home:    'Accueil',
    nav_exp:     'Expériences',
    nav_skills:  'Compétences',
    nav_contact: 'Contact',
    nav_cv:      'CV ↓',

    // Hero
    hero_tag:         'CRM Project Leader',
    hero_tagline:     'Votre prochaine recrue marketing ? Spoiler : c\'est moi.',
    hero_status:      'Disponible · CDI · Graduate Programme · VIE',
    hero_location:    '📍 Paris, France',
    hero_cta_contact: 'Me contacter',
    hero_cta_cv:      'Télécharger mon CV',

    // Ticker
    ticker: '<span class="sep">✦</span> Marketing <span class="sep">✦</span> CRM <span class="sep">✦</span> Gestion de projet <span class="sep">✦</span> International <span class="sep">✦</span> Bilingue FR/EN <span class="sep">✦</span> Paris <span class="sep">✦</span> Marketing <span class="sep">✦</span> CRM <span class="sep">✦</span> Gestion de projet <span class="sep">✦</span> International <span class="sep">✦</span> Bilingue FR/EN <span class="sep">✦</span> Paris ',

    // Profile
    profile_title: 'Qui suis-je ?',
    profile_text:  'J\'ai fait mes armes en CRM chez Rakuten pendant mon alternance : 70 campagnes à piloter, optimiser et analyser, et une migration système menée de A à Z.<br><br>Une expérience exigeante, qui m\'a donné de vrais réflexes (rigueur, données, sens du résultat) que j\'aime appliquer à tout le marketing : stratégie, contenu, gestion de projet.<br><br>Pour la suite, j\'ai envie de voir plus grand : des projets à l\'international, une équipe ambitieuse, et de quoi continuer à apprendre.',

    // Stats
    section_numbers: 'En chiffres',
    stat1_number: '70+',
    stat1_label:  'campagnes automatisées',
    stat2_number: '3',
    stat2_label:  'pays d\'immersion',
    stat3_number: '2 ans',
    stat3_label:  'd\'expérience pro cumulée',

    // Pillars
    section_pillars:  'Ce que j\'apporte',
    pillar1_title:    'Gestion de projet Marketing',
    pillar1_text:     'Stratégie, campagnes, suivi : je pilote des projets marketing de bout en bout.',
    pillar2_title:    'Un profil international',
    pillar2_text:     'Oslo, Kuala Lumpur, Oldenburg : trois langues, trois cultures, et l\'habitude de travailler dans un environnement international.',
    pillar3_title:    'Je m\'adapte vite',
    pillar3_text:     'Nouveaux outils, nouveaux sujets, nouvelles équipes : je trouve mes marques rapidement et je suis vite opérationnelle.',

    // Languages
    section_languages: 'Langues',
    lang1_name:  'Français',
    lang1_level: 'Langue maternelle',
    lang2_name:  'Anglais',
    lang2_level: 'Courant · C1',
    lang3_name:  'Allemand',
    lang3_level: 'Intermédiaire · B2',
    lang4_name:  'Malais',
    lang4_level: 'Notions',

    // Exp teaser
    section_exp:        'Expériences',
    exp_teaser_company1: 'Rakuten France',
    exp_teaser_role1:    'CRM Project Leader',
    exp_teaser_dates1:   'Sep 2025 – Sep 2026 · Alternance',
    exp_teaser_company2: 'HomeExchange',
    exp_teaser_role2:    'Project Leader',
    exp_teaser_dates2:   'Juin – Déc 2023 · Stage',
    exp_teaser_cta:      'Voir tout le parcours →',

    // Skills teaser
    skills_teaser_cta: 'Voir toutes mes compétences →',

    // Contact banner
    banner_title: 'Travaillons ensemble.',
    banner_cta:   'Me contacter',

    // Footer
    footer_name: 'Zoé Bouton · Paris · 2026',

    // Experiences page
    section_edu: 'Formation',
    cta_skills:  'Voir mes compétences →',

    // Rakuten
    exp1_period:  'Sep 2025 – Sep 2026 · Paris · Alternance',
    exp1_role:    'CRM PROJECT LEADER',
    exp1_company: 'Rakuten France',
    exp1_bullets: '<li>Pilotage du projet de migration CRM Salesforce → Batch, continuité processus &amp; automatisations</li><li>Conception, paramétrage et gestion de 70+ campagnes automatisées sur l\'ensemble du cycle de vie client</li><li>Optimisation du ciblage, de la personnalisation et de la délivrabilité des campagnes</li><li>Refonte de la charte graphique email : nouveaux templates, tests et validation</li><li>Coordination des équipes CRM, marketing et technique en mode projet</li><li>Analyse des KPIs d\'engagement et mise en place des plans d\'optimisation continue</li>',

    // HomeExchange PL
    exp2_period:  'Juin – Déc 2023 · Paris · Stage',
    exp2_role:    'PROJECT LEADER',
    exp2_company: 'HomeExchange',
    exp2_bullets: '<li>Gestion des projets de l\'équipe Service Membres aux côtés du Project Manager</li><li>Recherche et déploiement de nouveaux outils pour améliorer l\'efficacité de l\'équipe</li><li>Suivi et analyse des projets d\'autonomisation des membres</li><li>Production des reportings de performance et communication interne</li>',

    // HomeExchange CRC
    exp3_period:  'Juin – Sep 2022 · Paris · Stage',
    exp3_role:    'CHARGÉE DE RELATION CLIENT',
    exp3_company: 'HomeExchange',
    exp3_bullets: '<li>Traitement des demandes membres par email (clarté, réactivité, satisfaction)</li><li>Accompagnement des membres dans la prise en main de la plateforme</li><li>Organisation d\'échanges de logements avec suivi personnalisé</li><li>Gestion des réclamations et situations sensibles</li>',

    // BNSSA
    exp4_period:  '2022 – 2025 · CDD saisonniers',
    exp4_role:    'BNSSA, SECOURISTE AQUATIQUE',
    exp4_company: 'Center Parcs Les Bois Francs',
    exp4_bullets: '<li>Surveillance et sécurité des bassins et espaces aquatiques à forte fréquentation</li><li>Réalisation des soins de premiers secours et gestion des situations d\'urgence</li><li>Contrôles quotidiens de conformité (toboggans, surfaces, bassins, signalétique)</li><li>Accueil et accompagnement des clients avec bienveillance et pédagogie</li>',

    // Education
    edu1_school:   'ESCE International Business School',
    edu1_period:   '2021–2026 · Paris 🇫🇷',
    edu1_program:  'Master Grande École · Marketing Digital International & Grande Consommation',
    edu2_school:   'Asia Pacific University (APU)',
    edu2_period:   'Fev – Jul 2025 · Kuala Lumpur 🇲🇾',
    edu2_program:  'Programme d\'échange international',
    edu3_school:   'BI Norwegian Business School',
    edu3_period:   'Jan – Jun 2023 · Oslo 🇳🇴',
    edu3_program:  'Programme d\'échange international',

    // Skills page
    section_skills:  'Compétences',
    skills_intro:    'Des outils maîtrisés sur le terrain, des compétences construites projet après projet.',
    hardskills_title: 'Hard Skills',
    certif_title: 'Certifications ✓',
    group_marketing_crm: 'Marketing <span class="ampersand">&amp;</span> CRM',
    group_data:          'Data <span class="ampersand">&amp;</span> Analytics',
    group_ai:            'IA <span class="ampersand">&amp;</span> Outils génératifs',
    group_collab:        'Collaboration <span class="ampersand">&amp;</span> Productivité',
    group_design:        'Bureautique <span class="ampersand">&amp;</span> Design',

    // Soft skills
    soft1_title: 'Proactivité',
    soft1_text:  'J\'anticipe. Je propose. Je n\'attends pas qu\'on me le demande.',
    soft2_title: 'Rigueur',
    soft2_text:  'Rien ne part sans relecture. Rien n\'est laissé au hasard.',
    soft3_title: 'Esprit d\'équipe',
    soft3_text:  'À l\'aise en coordination multi-équipes : marketing, tech, créa.',
    soft4_title: 'Adaptabilité',
    soft4_text:  'Nouveau contexte, nouvelle équipe, nouvel outil. Je m\'adapte.',
    soft5_title: 'Force de proposition',
    soft5_text:  'Je viens avec des solutions, pas des problèmes.',
    soft6_title: 'Curiosité',
    soft6_text:  'Curieuse par nature : outils, tendances, IA. J\'apprends en continu.',

    // Association
    assoc_title: 'Association Furious',
    assoc_role:  'Responsable Événementiel & Co-fondatrice',
    assoc_bullets: '<li>Co-fondation de l\'association</li><li>Direction du pôle événements</li><li>Recrutement et intégration des membres</li><li>Sports extrêmes · Activités insolites · Gestion bénévole</li>',

    // Interests
    interests_title: 'Centres d\'intérêt',

    // CTA contact
    cta_contact: 'Me contacter →',

    // Contact page
    contact_title: 'Travaillons ensemble.',
    contact_sub:   'Un projet, une opportunité, une question : je lis tout.',
    cv_label:      'Mon CV en PDF, à télécharger directement.',
    availability:  '✅ Disponible',
    cv_download:   'Télécharger',

    // Form
    form_name:        'Nom',
    form_email:       'Email',
    form_company:     'Entreprise (optionnel)',
    form_subject:     'Objet',
    form_subject_job:  'Opportunité professionnelle',
    form_subject_info: 'Demande d\'information',
    form_subject_other:'Autre',
    form_message:     'Message',
    form_send:        'Envoyer',
    form_success:     'Message reçu, je reviens vers vous rapidement.',

    // 404
    page404_title: 'Cette page n\'existe pas, mais moi, oui.',
    page404_text:  'La page que vous cherchez a peut-être été déplacée ou supprimée.',
    page404_cta:   'Retour à l\'accueil',
  },

  en: {
    // Nav
    nav_home:    'Home',
    nav_exp:     'Experience',
    nav_skills:  'Skills',
    nav_contact: 'Contact',
    nav_cv:      'Resume ↓',

    // Hero
    hero_tag:         'CRM Project Leader',
    hero_tagline:     'Your next marketing hire? Spoiler: it\'s me.',
    hero_status:      'Open to · Full-time · Graduate Programme · VIE',
    hero_location:    '📍 Paris, France',
    hero_cta_contact: 'Get in touch',
    hero_cta_cv:      'Download my Resume',

    // Ticker
    ticker: '<span class="sep">✦</span> Marketing <span class="sep">✦</span> CRM <span class="sep">✦</span> Project Management <span class="sep">✦</span> International <span class="sep">✦</span> Bilingual FR/EN <span class="sep">✦</span> Paris <span class="sep">✦</span> Marketing <span class="sep">✦</span> CRM <span class="sep">✦</span> Project Management <span class="sep">✦</span> International <span class="sep">✦</span> Bilingual FR/EN <span class="sep">✦</span> Paris ',

    // Profile
    profile_title: 'Who am I?',
    profile_text:  'I started out in CRM at Rakuten during my apprenticeship: managing, optimizing and analyzing 70 campaigns, plus a full system migration from start to finish.<br><br>A demanding experience that gave me real instincts (rigor, data, a results mindset) that I love bringing to every side of marketing: strategy, content, project management.<br><br>Looking ahead, I want to think bigger: international projects, an ambitious team, and plenty of room to keep learning.',

    // Stats
    section_numbers: 'By the numbers',
    stat1_number: '70+',
    stat1_label:  'automated campaigns',
    stat2_number: '3',
    stat2_label:  'countries lived in',
    stat3_number: '2 yrs',
    stat3_label:  'of cumulative work experience',

    // Pillars
    section_pillars:  'What I bring',
    pillar1_title:    'Marketing <span class="ampersand">&amp;</span> project management',
    pillar1_text:     'Strategy, campaigns, follow-up: I run marketing projects end to end.',
    pillar2_title:    'An international profile',
    pillar2_text:     'Oslo, Kuala Lumpur, Oldenburg: three languages, three cultures, at home working internationally.',
    pillar3_title:    'I adapt fast',
    pillar3_text:     'New tools, topics, teams: I find my feet quickly and get up to speed fast.',

    // Languages
    section_languages: 'Languages',
    lang1_name:  'French',
    lang1_level: 'Native',
    lang2_name:  'English',
    lang2_level: 'Fluent · C1',
    lang3_name:  'German',
    lang3_level: 'Intermediate · B2',
    lang4_name:  'Malay',
    lang4_level: 'Basic',

    // Exp teaser
    section_exp:        'Experience',
    exp_teaser_company1: 'Rakuten France',
    exp_teaser_role1:    'CRM Project Leader',
    exp_teaser_dates1:   'Sep 2025 – Sep 2026 · Work-study',
    exp_teaser_company2: 'HomeExchange',
    exp_teaser_role2:    'Project Leader',
    exp_teaser_dates2:   'Jun – Dec 2023 · Internship',
    exp_teaser_cta:      'See full experience →',

    // Skills teaser
    skills_teaser_cta: 'See all my skills →',

    // Contact banner
    banner_title: 'Let\'s work together.',
    banner_cta:   'Get in touch',

    // Footer
    footer_name: 'Zoé Bouton · Paris · 2026',

    // Experiences page
    section_edu: 'Education',
    cta_skills:  'See my skills →',

    // Rakuten
    exp1_period:  'Sep 2025 – Sep 2026 · Paris · Work-study',
    exp1_role:    'CRM PROJECT LEADER',
    exp1_company: 'Rakuten France',
    exp1_bullets: '<li>Led the full CRM migration from Salesforce to Batch</li><li>Built and managed 70+ automated campaigns across the customer lifecycle</li><li>Improved targeting, personalization, and deliverability performance</li><li>Redesigned email templates: from brief to testing to production rollout</li><li>Coordinated CRM, marketing, and tech teams on campaign delivery</li><li>Tracked engagement KPIs and drove continuous optimization cycles</li>',

    // HomeExchange PL
    exp2_period:  'Jun – Dec 2023 · Paris · Internship',
    exp2_role:    'PROJECT LEADER',
    exp2_company: 'HomeExchange',
    exp2_bullets: '<li>Supported the Project Manager in daily project coordination</li><li>Researched and rolled out new tools to improve team efficiency</li><li>Tracked and analyzed member autonomy project outcomes</li><li>Delivered performance reports and handled internal communications</li>',

    // HomeExchange CRC
    exp3_period:  'Jun – Sep 2022 · Paris · Internship',
    exp3_role:    'CUSTOMER RELATIONS OFFICER',
    exp3_company: 'HomeExchange',
    exp3_bullets: '<li>Handled member inquiries by email with responsiveness and precision</li><li>Guided members through platform onboarding and usage</li><li>Organized home exchanges with end-to-end personalized follow-up</li><li>Resolved complaints and sensitive cases with tact</li>',

    // BNSSA
    exp4_period:  '2022 – 2025 · Seasonal contracts',
    exp4_role:    'AQUATIC LIFEGUARD (BNSSA)',
    exp4_company: 'Center Parcs Les Bois Francs',
    exp4_bullets: '<li>Monitored pools and aquatic areas in a high-traffic environment</li><li>Administered first aid and managed emergency situations</li><li>Conducted daily safety compliance checks (slides, surfaces, pools)</li><li>Welcomed and guided guests with care and clear communication</li>',

    // Education
    edu1_school:   'ESCE International Business School',
    edu1_period:   '2021–2026 · Paris 🇫🇷',
    edu1_program:  'Grande École Master · International Digital Marketing & Consumer Goods',
    edu2_school:   'Asia Pacific University (APU)',
    edu2_period:   'Feb – Jul 2025 · Kuala Lumpur 🇲🇾',
    edu2_program:  'International exchange programme',
    edu3_school:   'BI Norwegian Business School',
    edu3_period:   'Jan – Jun 2023 · Oslo 🇳🇴',
    edu3_program:  'International exchange programme',

    // Skills page
    section_skills:  'Skills',
    skills_intro:    'Tools mastered in the field, skills built project after project.',
    hardskills_title: 'Hard Skills',
    certif_title: 'Certifications ✓',
    group_marketing_crm: 'Marketing <span class="ampersand">&amp;</span> CRM',
    group_data:          'Data <span class="ampersand">&amp;</span> Analytics',
    group_ai:            'AI <span class="ampersand">&amp;</span> Generative tools',
    group_collab:        'Collaboration <span class="ampersand">&amp;</span> Productivity',
    group_design:        'Office <span class="ampersand">&amp;</span> Design',

    // Soft skills
    soft1_title: 'Proactivity',
    soft1_text:  'I anticipate. I propose. I don\'t wait to be asked.',
    soft2_title: 'Rigour',
    soft2_text:  'Nothing goes out without review. Nothing is left to chance.',
    soft3_title: 'Team spirit',
    soft3_text:  'Comfortable coordinating across teams: marketing, tech, design.',
    soft4_title: 'Adaptability',
    soft4_text:  'New context, new team, new tool. I adapt.',
    soft5_title: 'Initiative',
    soft5_text:  'I come with solutions, not problems.',
    soft6_title: 'Curiosity',
    soft6_text:  'Curious by nature: tools, trends, AI. I keep learning.',

    // Association
    assoc_title: 'Association Furious',
    assoc_role:  'Events Manager & Co-founder',
    assoc_bullets: '<li>Co-founded the association</li><li>Led the events department</li><li>Recruited and onboarded members</li><li>Extreme sports · Unique experiences · Volunteer management</li>',

    // Interests
    interests_title: 'Interests',

    // CTA contact
    cta_contact: 'Get in touch →',

    // Contact page
    contact_title: 'Let\'s work together.',
    contact_sub:   'A project, an opportunity, a question: I read everything.',
    cv_label:      'My Resume in PDF, download it directly.',
    availability:  '✅ Available',
    cv_download:   'Download',

    // Form
    form_name:        'Full name',
    form_email:       'Email',
    form_company:     'Company (optional)',
    form_subject:     'Subject',
    form_subject_job:  'Job opportunity',
    form_subject_info: 'Information request',
    form_subject_other:'Other',
    form_message:     'Message',
    form_send:        'Send',
    form_success:     'Message received, I\'ll get back to you shortly.',

    // 404
    page404_title: 'This page doesn\'t exist, but I do.',
    page404_text:  'The page you are looking for may have been moved or deleted.',
    page404_cta:   'Back to home',
  }
};
