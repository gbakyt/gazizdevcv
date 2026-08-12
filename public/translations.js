const translations = {
  en: {
    title: 'Gaziz Bakyt — Senior Software Engineer',
    metaDescription: 'Gaziz Bakyt — Senior Software Engineer. 6+ years building high-load microservices, REST/SOAP APIs and enterprise integrations.',
    role: 'Senior Software Engineer',
    tagline: 'Owning backend architecture end-to-end — database, messaging, and integration design — across enterprise and government-scale systems.',

    'nav-about': 'About',
    'nav-experience': 'Experience',
    'nav-skills': 'Skills',
    'nav-highlights': 'Highlights',
    'nav-education': 'Education',
    'nav-contact': 'Contact',

    'about-heading': 'About',
    'about-text': 'Backend-focused Java developer with 6+ years building and owning large-scale systems end-to-end — from initial architecture decisions through production. Currently driving core architecture for a large internal enterprise platform at BI Group, including its persistence, messaging, and integration layers and an event-driven Kafka platform with built-in failure replay. Previously built and hardened a ~25-service SOAP/REST integration platform for a national government records system, including finding and fixing a security vulnerability shared across multiple services. Comfortable across the full stack: Spring Boot, jOOQ/JPA, Kafka/RabbitMQ, PostgreSQL/MongoDB/Redis, and OAuth2/Keycloak authentication. Open to remote roles and relocation for the right opportunity.',

    'experience-heading': 'Experience',

    'exp1-title': 'Senior Software Engineer',
    'exp1-date': 'Jun 2023 — Present',
    'exp1-li1': 'Selected and stood up the core backend architecture for a large-scale internal enterprise platform — type-safe SQL query building in place of a traditional ORM, schema migrations, event-driven messaging, and object storage — decisions that still underpin the system (1,000+ files, 100+ REST controllers, 600+ endpoints).',
    'exp1-li2': 'Designed multi-tenant JWT authentication supporting two separate identity realms (internal staff and an external mobile app) against a single API, with hardened security headers.',
    'exp1-li3': "Built the platform's Kafka integration layer end-to-end, including a message-log-and-replay subsystem that lets failed integration events be re-processed from an admin view instead of manually replaying topics.",
    'exp1-li4': 'Designed and built an internal workflow board from scratch — configurable status funnels, SLA tracking with automatic overdue detection, and full audit history.',
    'exp1-li5': 'Built an automated multi-step eligibility engine that validates a business transaction against ~10 independent checks before allowing it to proceed.',
    'exp1-li6': "Own the majority of the platform's external-system integrations — accounting/ERP, identity, e-signature, and OCR services — spanning more than a dozen integration clients.",

    'exp2-title': 'Software Engineer',
    'exp2-date': 'Apr 2022 — Jun 2023',
    'exp2-li1': 'Contributed across roughly 25 independently-deployed SOAP/REST microservices for a national government records platform covering court records, criminal/administrative case lookups, wanted-persons registries, vital records, traffic-accident records, probation checks, and emergency-incident reporting.',
    'exp2-li2': 'Found and fixed an XXE (XML External Entity) vulnerability in a shared XML-deserialization utility, hardening it against malicious external entity injection, and applied the fix consistently across multiple services.',
    'exp2-li3': 'Built several services end-to-end from scratch — contract-first SOAP endpoints (XSD/WSDL), JPA/Flyway-backed persistence, and CI/CD pipelines.',
    'exp2-li4': "Reworked an integration client's architecture from an inbound REST server into an outbound OAuth2 client-credentials integration, adding resubmission logic for changed records and audit-history preservation across transaction rollbacks.",
    'exp2-li5': 'Optimized production SQL queries — replacing expensive subqueries with indexed lookups — and fixed data-precision bugs by correcting field types.',
    'exp2-li6': 'Built a reusable Kazakhstani national-ID (IIN) checksum validator adopted across multiple services.',

    'exp3-title': 'Software Engineer',
    'exp3-date': 'Jan 2020 — Mar 2022',
    'exp3-li1': 'Contributed to a Security Operations Center platform for malware detection and reporting.',
    'exp3-li2': 'Owned feature development, bug fixes, and long-term maintenance for a production security system.',

    'skills-heading': 'Skills',

    'highlights-heading': 'Highlights',
    'proj1-title': 'Enterprise Platform Architecture & Kafka Replay System',
    'proj1-desc': 'Stood up the core architecture of a large internal enterprise platform at BI Group — persistence, messaging, and integrations — including a Kafka platform with a built-in subsystem to replay failed integration events from an admin view.',
    'proj2-title': 'Government Records Integration Platform',
    'proj2-desc': 'Contributed across ~25 SOAP/REST microservices for a national government records system, including finding and fixing a security vulnerability shared across multiple services.',
    'proj3-title': 'Esports Tournament Federation Platform',
    'proj3-desc': 'Solo-built backend (Java 21, Spring Boot 3) for a Kazakhstani esports federation — tournament bracket engine, Keycloak-based auth with SMS verification, national-ID document validation, and MinIO file storage.',

    'education-heading': 'Education',
    'edu-degree': "Bachelor's, Information Systems",
    'edu-university': 'Kazakh University of Technology and Business · Astana',
    'languages-heading': 'Languages',
    'lang-kk-tag': 'Kazakh — Native',
    'lang-en-tag': 'English — C1 Fluent',

    'contact-heading': "Let's Connect",
    'contact-text': 'Open to new remote opportunities and relocation — feel free to reach out.',

    'footer-text': 'Built with care.',
  },

  kk: {
    title: 'Ғазиз Бақыт — Аға бағдарламалық жасақтама инженері',
    metaDescription: 'Ғазиз Бақыт — Аға бағдарламалық жасақтама инженері. Жоғары жүктемелі микросервистерді, REST/SOAP API мен корпоративтік интеграцияларды құруда 6+ жылдық тәжірибе.',
    role: 'Аға бағдарламалық жасақтама инженері',
    tagline: 'Дерекқор, хабар алмасу және интеграция дизайнын қамтитын бэкенд-архитектураны толықтай басқарамын — корпоративтік және мемлекеттік ауқымдағы жүйелерде.',

    'nav-about': 'Мен туралы',
    'nav-experience': 'Тәжірибе',
    'nav-skills': 'Дағдылар',
    'nav-highlights': 'Жетістіктер',
    'nav-education': 'Білім',
    'nav-contact': 'Байланыс',

    'about-heading': 'Мен туралы',
    'about-text': 'Бэкендке бағытталған, 6+ жылдық тәжірибесі бар Java әзірлеушімін — ірі ауқымды жүйелерді бастапқы архитектуралық шешімдерден бастап өндіріске дейін толықтай құрып, басқарамын. Қазіргі уақытта BI Group компаниясында ірі ішкі корпоративтік платформаның негізгі архитектурасын, оның ішінде деректерді сақтау, хабар алмасу және интеграция қабаттарын, сондай-ақ сәтсіздіктерді қайта ойнату мүмкіндігі бар оқиғаға негізделген Kafka платформасын жетекшілікпен жүргіземін. Бұған дейін ұлттық мемлекеттік тіркелімдер жүйесі үшін ~25 сервистен тұратын SOAP/REST интеграция платформасын құрып, нығайттым, оның ішінде бірнеше сервисте ортақ қауіпсіздік осалдығын тауып, түзеттім. Толық технологиялар стегінде еркін жұмыс істеймін: Spring Boot, jOOQ/JPA, Kafka/RabbitMQ, PostgreSQL/MongoDB/Redis және OAuth2/Keycloak аутентификациясы. Қашықтан жұмыс пен көшуге лайықты мүмкіндік үшін ашықпын.',

    'experience-heading': 'Тәжірибе',

    'exp1-title': 'Аға бағдарламалық жасақтама инженері',
    'exp1-date': '2023 ж. маусым — қазіргі уақыт',
    'exp1-li1': 'Ірі ішкі корпоративтік платформаның негізгі бэкенд-архитектурасын таңдап, іске қостым — дәстүрлі ORM орнына типті қауіпсіз SQL сұраныстарын құру, схема миграциялары, оқиғаға негізделген хабар алмасу және объектілерді сақтау қоймасы — бұл шешімдер жүйенің әлі күнге дейін негізі болып тұр (1000+ файл, 100+ REST контроллер, 600+ endpoint).',
    'exp1-li2': 'Бір API аясында екі бөлек сәйкестендіру ортасын (ішкі қызметкерлер мен сыртқы мобильді қолданба) қолдайтын, күшейтілген қауіпсіздік тақырыптары бар мультитенантты JWT аутентификациясын әзірледім.',
    'exp1-li3': 'Платформаның Kafka интеграция қабатын толықтай құрдым, оның ішінде сәтсіз аяқталған интеграция оқиғаларын топиктерді қолмен қайта ойнатпай-ақ, әкімші тұғырнамасынан қайта өңдеуге мүмкіндік беретін хабарлама журналы мен қайта ойнату ішкі жүйесі бар.',
    'exp1-li4': 'Ішкі жұмыс үрдісі тақтасын нөлден бастап әзірлеп, құрдым — баптауға болатын статус воронкалары, мерзімі өткенін автоматты анықтайтын SLA бақылауы және толық аудит тарихы.',
    'exp1-li5': 'Бизнес-транзакцияны жалғастыруға рұқсат етпес бұрын ~10 тәуелсіз тексеруден өткізетін автоматтандырылған көп сатылы сәйкестікті тексеру жүйесін құрдым.',
    'exp1-li6': 'Платформаның сыртқы жүйелермен интеграцияларының басым бөлігін жүргіземін — бухгалтерлік есеп/ERP, сәйкестендіру, электрондық қолтаңба және OCR қызметтері, ондаған интеграциялық клиенттерді қамтиды.',

    'exp2-title': 'Бағдарламалық жасақтама инженері',
    'exp2-date': '2022 ж. сәуір — 2023 ж. маусым',
    'exp2-li1': 'Сот тіркелімдері, қылмыстық/әкімшілік істерді іздеу, іздеудегі тұлғалар тізілімі, азаматтық хал актілерін тіркеу, жол-көлік оқиғалары туралы мәліметтер, пробация тексерулері және төтенше жағдайлар туралы есептілікті қамтитын мемлекеттік тіркелімдер платформасының шамамен 25 дербес жайғастырылған SOAP/REST микросервисіне үлес қостым.',
    'exp2-li2': 'Ортақ XML-десериализация утилитасынан XXE (XML External Entity) осалдығын тауып, зиянды сыртқы нысандар енгізуден қорғап түзеттім және бұл түзетуді бірнеше сервисте бірізді түрде қолдандым.',
    'exp2-li3': 'Бірнеше сервисті нөлден бастап толықтай құрдым — контракт негізіндегі SOAP endpoint-тер (XSD/WSDL), JPA/Flyway арқылы деректерді сақтау және CI/CD конвейерлері.',
    'exp2-li4': 'Интеграциялық клиенттің архитектурасын кіріс REST серверінен OAuth2 client-credentials негізіндегі шығыс интеграцияға қайта құрдым, өзгерген жазбаларды қайта жіберу логикасын және транзакция кері қайтарылғанда аудит тарихын сақтауды қостым.',
    'exp2-li5': 'Өндірістік SQL сұрауларын оңтайландырдым — қымбат ішкі сұрауларды индекстелген іздеумен алмастырдым — және өріс типтерін түзету арқылы деректер дәлдігіндегі қателерді жөндедім.',
    'exp2-li6': 'Бірнеше сервисте қолданылатын, Қазақстанның ЖСН (IIN) бақылау сомасын тексеретін қайта пайдалануға болатын валидатор құрдым.',

    'exp3-title': 'Бағдарламалық жасақтама инженері',
    'exp3-date': '2020 ж. қаңтар — 2022 ж. наурыз',
    'exp3-li1': 'Зиянды бағдарламаларды анықтау және есептілік жүргізу үшін Security Operations Center платформасына үлес қостым.',
    'exp3-li2': 'Өндірістік қауіпсіздік жүйесінің функцияларын әзірлеу, қателерді түзету және ұзақ мерзімді қолдау көрсету жұмыстарын жүргіздім.',

    'skills-heading': 'Дағдылар',

    'highlights-heading': 'Жетістіктер',
    'proj1-title': 'Корпоративтік платформа архитектурасы және Kafka қайта ойнату жүйесі',
    'proj1-desc': 'BI Group компаниясында ірі ішкі корпоративтік платформаның негізгі архитектурасын — деректерді сақтау, хабар алмасу және интеграцияларды — құрдым, оның ішінде сәтсіз интеграция оқиғаларын әкімші тұғырнамасынан қайта ойнатуға арналған ішкі жүйесі бар Kafka платформасы да бар.',
    'proj2-title': 'Мемлекеттік тіркелімдер интеграция платформасы',
    'proj2-desc': 'Ұлттық мемлекеттік тіркелімдер жүйесінің ~25 SOAP/REST микросервисіне үлес қостым, оның ішінде бірнеше сервисте ортақ қауіпсіздік осалдығын тауып, түзеттім.',
    'proj3-title': 'Киберспорт турнирлері федерациясының платформасы',
    'proj3-desc': 'Қазақстандық киберспорт федерациясы үшін бэкендті жеке өзім құрдым (Java 21, Spring Boot 3) — турнир торы жүйесі, SMS растауы бар Keycloak негізіндегі аутентификация, жеке куәлік құжаттарын тексеру және MinIO файл қоймасы.',

    'education-heading': 'Білім',
    'edu-degree': 'Бакалавр, Ақпараттық жүйелер',
    'edu-university': 'Қазақ технология және бизнес университеті · Астана',
    'languages-heading': 'Тілдер',
    'lang-kk-tag': 'Қазақ тілі — Ана тілі',
    'lang-en-tag': 'Ағылшын тілі — C1 деңгейі',

    'contact-heading': 'Байланысайық',
    'contact-text': 'Жаңа қашықтан жұмыс мүмкіндіктері мен көшуге ашықпын — хабарласыңыз.',

    'footer-text': 'Ыждағаттылықпен жасалған.',
  },
};
