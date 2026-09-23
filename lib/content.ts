import type { Locale } from "./site";

export interface Dict {
  meta: { title: string; desc: string; keywords: string[] };
  langName: string;
  otherLangName: string;
  theme: { toLight: string; toDark: string };
  menu: string;
  menuTitle: string;
  profile: { role: string };
  nav: { about: string; work: string; services: string; podcast: string; words: string; faq: string; contact: string };
  hero: {
    eb: string[];
    head: string;
    headAccent: string;
    headEnd: string;
    sub: string;
    cta1: string;
    cta2: string;
    proof: string;
    latest: string;
    meta: { n: string; l: string }[];
  };
  trust: { label: string; logos: string[] };
  work: {
    eb: string;
    title: string;
    titleSoft: string;
    view: string;
    all: string;
    items: { cat: string; num: string; t: string; d: string; m: string; tone: "emerald" | "gold" | "ink" | "forest" }[];
  };
  about: {
    eb: string;
    title: string;
    titleSoft: string;
    p1: string;
    p2: string;
    tags: string[];
    timelineTitle: string;
    timeline: { org: string; role: string; period: string }[];
  };
  services: {
    eb: string;
    title: string;
    titleSoft: string;
    items: { icon: "video" | "mic" | "pen"; title: string; desc: string; meta: string }[];
  };
  stats: { n: string; l: string }[];
  pod: {
    eb: string;
    title: string;
    desc: string;
    listen: string;
    playLabel: string;
    episodes: { num: string; t: string; g: string; d: string }[];
  };
  testimonials: {
    eb: string;
    title: string;
    titleSoft: string;
    proof: string;
    items: { quote: string; name: string; role: string }[];
  };
  faq: { eb: string; title: string; titleSoft: string; items: { q: string; a: string }[] };
  cta: { kicker: string; title: string; titleSoft: string };
  contact: { eb: string; nl: string; ph: string; sub: string; ok: string; err: string };
  footer: { big: string; email: string; backToTop: string; legal: string };
}

const ar: Dict = {
  meta: {
    title: "صِدّيق موسى — صانع محتوى تقني",
    desc: "صِدّيق موسى — صانع محتوى في التقنية والذكاء الاصطناعي. نحكي قصص التقنية بلغةٍ صادقة، عبر فيديوهات ومقالات وبودكاست.",
    keywords: ["صِدّيق موسى", "الذكاء الاصطناعي", "التقنية", "بودكاست", "محتوى تقني", "صانع محتوى"],
  },
  langName: "العربية",
  otherLangName: "English",
  theme: { toLight: "الوضع الفاتح", toDark: "الوضع الداكن" },
  menu: "القائمة",
  menuTitle: "تصفّح",
  profile: { role: "صانع محتوى تقني" },
  nav: { about: "عنّي", work: "أعمال", services: "القنوات", podcast: "البودكاست", words: "آراء", faq: "الأسئلة", contact: "النشرة" },
  hero: {
    eb: ["تقنية", "محتوى"],
    head: "نحكي التقنية",
    headAccent: "بصِدق",
    headEnd: "— وبلا ضجيج.",
    sub: "صانع محتوى في التقنية والذكاء الاصطناعي. أقرّب الأفكار المعقّدة من الناس عبر فيديوهات ومقالاتٍ وبودكاست باللغة العربية.",
    cta1: "شاهد الأحدث",
    cta2: "عن صِدّيق",
    proof: "أكثر من ٩٩ علامة وضيف",
    latest: "أحدث حلقة",
    meta: [
      { n: "48M+", l: "مشاهدة" },
      { n: "120+", l: "مقطع وحلقة" },
      { n: "6", l: "سنوات" },
    ],
  },
  trust: {
    label: "موثوق من قِبل",
    logos: ["رَوافد", "أفق", "نبض", "مدار", "نواة", "سَنا"],
  },
  work: {
    eb: "مشاريع مختارة",
    title: "ألقِ نظرة",
    titleSoft: "على أعمالي",
    view: "استعرض",
    all: "رؤية جميع المشاريع",
    items: [
      { cat: "سلسلة", num: "01", t: "الذكاء ببساطة", d: "سلسلة تشرح كيف تفكّر النماذج، من الصفر إلى الاستخدام اليومي.", m: "2025 · فيديو", tone: "emerald" },
      { cat: "بودكاست", num: "02", t: "مستقبل العمل", d: "موسمٌ عن كيف يغيّر الذكاء الاصطناعي المِهن، بأصوات من عاشوا التغيير.", m: "2025 · صوت", tone: "gold" },
      { cat: "دليل", num: "03", t: "أدوات المبدع العربي", d: "دليلٌ عملي لأفضل أدوات الذكاء الاصطناعي للكتابة والتصميم والصوت.", m: "2024 · مقال", tone: "forest" },
      { cat: "ورشة", num: "04", t: "ابنِ منتجًا بالذكاء الاصطناعي", d: "ورشة تأخذك من الفكرة إلى نموذجٍ أوّلي يعمل في يومٍ واحد.", m: "2024 · ورشة", tone: "ink" },
    ],
  },
  about: {
    eb: "عن صِدّيق",
    title: "أحكي قصص التقنية",
    titleSoft: "بلغةٍ صادقة.",
    p1: "أنا صِدّيق موسى، أصنع محتوى عن التقنية والذكاء الاصطناعي منذ ست سنوات. بدأت بسؤالٍ بسيط: لماذا يُشرَح الذكاء الاصطناعي دائمًا بلغةٍ معقّدة؟ فقرّرت أن أحكيه كما أحكيه لصديق.",
    p2: "أهتم بالتفاصيل الصغيرة لأنها تصنع الفرق الكبير. هدفي أن تخرج من كل حلقة أو مقطع وأنت أقرب إلى الفهم، لا أكثر ارتباكًا — بعيدًا عن الضجيج والمصطلحات.",
    tags: ["كتابة السيناريو", "الإلقاء والتقديم", "استراتيجية المحتوى", "إنتاج البودكاست", "المونتاج", "بناء المجتمع"],
    timelineTitle: "المسار الذي سلكته",
    timeline: [
      { org: "مستقل", role: "صانع محتوى تقني — يوتيوب وبودكاست", period: "٢٠٢٢ - الآن" },
      { org: "منصّة تقنية", role: "منتج ومحرّر محتوى", period: "٢٠٢٠ - ٢٠٢٢" },
      { org: "مدوّنة تقنية", role: "كاتب تقني", period: "٢٠١٨ - ٢٠٢٠" },
    ],
  },
  services: {
    eb: "أين تجدني",
    title: "ثلاث قنوات،",
    titleSoft: "قصة واحدة",
    items: [
      { icon: "video", title: "يوتيوب", desc: "شروحات ومقاطع تفكّك أفكار التقنية والذكاء الاصطناعي إلى صورٍ يفهمها أي شخص.", meta: "320K مشترك" },
      { icon: "mic", title: "البودكاست", desc: "حواراتٌ أسبوعية صريحة مع مهندسين ومؤسّسين وباحثين عن كيف يُبنى المستقبل.", meta: "90 حلقة" },
      { icon: "pen", title: "النشرة", desc: "فكرة واحدة عن الذكاء الاصطناعي كل أسبوع — تحليلٌ هادئ، بلا مبالغة ولا خوف.", meta: "12K قارئ" },
    ],
  },
  stats: [
    { n: "320K+", l: "مشترك عبر القنوات" },
    { n: "90", l: "حلقة بودكاست" },
    { n: "140", l: "مقال ونشرة" },
    { n: "40", l: "دولة يصلها المحتوى" },
  ],
  pod: {
    eb: "البودكاست",
    title: "مقابلاتٌ",
    desc: "كل أسبوع، أجلس مع صانعٍ أو مهندسٍ أو مؤسّس، ونسأل السؤال نفسه: كيف تبني المستقبل؟ ثم نحكيه بلغةٍ يفهمها الجميع.",
    listen: "استمع على منصّتك",
    playLabel: "تشغيل أحدث حلقة",
    episodes: [
      { num: "042", t: "لماذا «يهلوس» الذكاء الاصطناعي؟", g: "مع د. ليلى الحربي", d: "٤٨ دقيقة" },
      { num: "041", t: "بناء شركةٍ بشخصٍ واحد", g: "مع عمر السالم", d: "٥٣ دقيقة" },
      { num: "040", t: "الخصوصية في زمن النماذج", g: "مع سارة القحطاني", d: "٣٩ دقيقة" },
    ],
  },
  testimonials: {
    eb: "آراء",
    title: "كلماتٌ صادقة",
    titleSoft: "من شركائي",
    proof: "أكثر من ٩٩ علامة وضيف",
    items: [
      { quote: "شرح فكرتنا التقنية بطريقةٍ فهمها جمهورنا فورًا. المقطع وحده رفع تفاعلنا بشكلٍ ملحوظ.", name: "فهد الدوسري", role: "مدير التسويق في رُؤى" },
      { quote: "التعاون معه كان سلسًا من البداية للنهاية، واهتمامه بالتفاصيل رفع جودة الحملة بوضوح.", name: "عبدالله القحطاني", role: "مؤسّس متجر نقطة" },
      { quote: "استضافني في حلقةٍ كانت من أمتع ما سجّلت. أسئلته دقيقة، والإخراج احترافي.", name: "يوسف السالم", role: "مدير منتج في أفق" },
      { quote: "بسّط منتجنا المعقّد وحوّله إلى قصةٍ واضحة. لمسنا فرقًا حقيقيًا في وعي الجمهور.", name: "سامر الحربي", role: "المدير التقني في مسار" },
      { quote: "محتواه يجمع بين العمق والبساطة. نادرًا ما تجد من يشرح الذكاء الاصطناعي بهذا الصدق.", name: "عمر العبدالله", role: "مؤسّس استوديو مدار" },
      { quote: "من أول اجتماع فهم رسالتنا بسرعة، وحوّلها إلى محتوى تجاوزت نتائجه توقعاتنا.", name: "خالد العتيبي", role: "شريك مؤسّس في نواة" },
    ],
  },
  faq: {
    eb: "الأسئلة الشائعة",
    title: "أسئلتك،",
    titleSoft: "جاوبت عليها.",
    items: [
      { q: "كيف أتعاون معك في حملة أو رعاية؟", a: "راسلني بفكرتك وجمهورك المستهدف، ونحدّد في مكالمةٍ قصيرة الشكل الأنسب — مقطع، سلسلة، أو حلقة بودكاست — مع جدولٍ وميزانيةٍ واضحين." },
      { q: "هل تستضيف ضيوفًا في البودكاست؟", a: "نعم، أستضيف صنّاعًا ومهندسين ومؤسّسين لديهم قصة تقنية تستحق أن تُروى. أرسل لي نبذة عنك وعن الموضوع الذي تودّ الحديث فيه." },
      { q: "كم يستغرق إنتاج فيديو مخصّص؟", a: "يختلف حسب النوع والطول. المقاطع القصيرة عادةً أسبوع إلى أسبوعين، والأعمال الأكبر من ثلاثة أسابيع فأكثر. أوضّح الجدول بدقة بعد أول مكالمة." },
      { q: "بأي لغة تصنع المحتوى؟", a: "المحتوى عربيٌّ أولًا، مع لمساتٍ إنجليزية حين يتطلّب الموضوع ذلك. يمكنني إنتاج نسخٍ ثنائية اللغة عند الحاجة." },
      { q: "كيف أشترك في النشرة؟", a: "اترك بريدك في الأسفل، وستصلك رسالة تأكيد. أرسل كل أسبوع فكرةً واحدة عن الذكاء الاصطناعي، بلا ضجيج." },
    ],
  },
  cta: {
    kicker: "النشرة الأسبوعية",
    title: "فكرة عن الذكاء الاصطناعي،",
    titleSoft: "كل أسبوع.",
  },
  contact: {
    eb: "النشرة البريدية",
    nl: "أفكار عن الذكاء الاصطناعي كل أسبوع، بلا ضجيج.",
    ph: "you@example.com",
    sub: "اشترك",
    ok: "شكرًا — تحقّق من بريدك لتأكيد الاشتراك.",
    err: "من فضلك أدخل بريدًا إلكترونيًا صحيحًا.",
  },
  footer: {
    big: "خلّينا نصنع محتوى يستحق.",
    email: "hello@siddiqmousa.com",
    backToTop: "العودة للأعلى",
    legal: "© 2026 صِدّيق موسى. صُمّم بنظام هوية صِدّيق موسى.",
  },
};

const en: Dict = {
  meta: {
    title: "Siddiq Mousa — Tech & AI content creator",
    desc: "Siddiq Mousa — a creator in technology and AI. Telling tech stories in an honest voice, through videos, essays, and a podcast.",
    keywords: ["Siddiq Mousa", "artificial intelligence", "technology", "podcast", "tech content", "content creator"],
  },
  langName: "English",
  otherLangName: "العربية",
  theme: { toLight: "Light mode", toDark: "Dark mode" },
  menu: "Menu",
  menuTitle: "Browse",
  profile: { role: "Tech content creator" },
  nav: { about: "About", work: "Work", services: "Channels", podcast: "Podcast", words: "Words", faq: "FAQ", contact: "Newsletter" },
  hero: {
    eb: ["Tech", "Content"],
    head: "Telling tech",
    headAccent: "honestly",
    headEnd: "— no noise.",
    sub: "A creator in technology and AI. I bring complex ideas closer to people through videos, essays, and a podcast.",
    cta1: "Watch the latest",
    cta2: "About Siddiq",
    proof: "99+ brands & guests",
    latest: "Latest episode",
    meta: [
      { n: "48M+", l: "Views" },
      { n: "120+", l: "Videos & episodes" },
      { n: "6", l: "Years" },
    ],
  },
  trust: {
    label: "Trusted by",
    logos: ["Rawafid", "Ufuq", "Nabd", "Madar", "Nawah", "Sana"],
  },
  work: {
    eb: "Selected work",
    title: "Take a look",
    titleSoft: "at my work",
    view: "View",
    all: "See all projects",
    items: [
      { cat: "Series", num: "01", t: "AI, Simply", d: "A series on how models think, from zero to everyday use.", m: "2025 · Video", tone: "emerald" },
      { cat: "Podcast", num: "02", t: "The Future of Work", d: "A season on how AI reshapes careers, in the voices of people living the change.", m: "2025 · Audio", tone: "gold" },
      { cat: "Guide", num: "03", t: "The Arab Creator's Toolkit", d: "A practical guide to the best AI tools for writing, design, and audio.", m: "2024 · Essay", tone: "forest" },
      { cat: "Workshop", num: "04", t: "Build a Product with AI", d: "A workshop taking you from idea to a working prototype in a single day.", m: "2024 · Workshop", tone: "ink" },
    ],
  },
  about: {
    eb: "About Siddiq",
    title: "I tell tech stories",
    titleSoft: "in an honest voice.",
    p1: "I'm Siddiq Mousa, and I've made content about technology and AI for six years. It started with a simple question: why is AI always explained in such complicated language? So I decided to tell it the way I'd tell a friend.",
    p2: "I care about the small details because they make the big difference. My goal is that you leave every video or episode a little closer to understanding — not more confused — past the hype and the jargon.",
    tags: ["Scriptwriting", "Hosting", "Content strategy", "Podcast production", "Editing", "Community"],
    timelineTitle: "The path I took",
    timeline: [
      { org: "Independent", role: "Tech content creator — YouTube & podcast", period: "2022 - Now" },
      { org: "Tech platform", role: "Content producer & editor", period: "2020 - 2022" },
      { org: "Tech blog", role: "Technology writer", period: "2018 - 2020" },
    ],
  },
  services: {
    eb: "Where to find me",
    title: "Three channels,",
    titleSoft: "one story",
    items: [
      { icon: "video", title: "YouTube", desc: "Explainers that break AI and tech ideas into pictures anyone can follow.", meta: "320K subscribers" },
      { icon: "mic", title: "The podcast", desc: "Honest weekly conversations with engineers, founders, and researchers.", meta: "90 episodes" },
      { icon: "pen", title: "Newsletter", desc: "One idea on AI every week — a calm read, no hype, no fear.", meta: "12K readers" },
    ],
  },
  stats: [
    { n: "320K+", l: "Subscribers across channels" },
    { n: "90", l: "Podcast episodes" },
    { n: "140", l: "Essays & newsletters" },
    { n: "40", l: "Countries reached" },
  ],
  pod: {
    eb: "The podcast",
    title: "Conversations",
    desc: "Every week I sit down with a builder, an engineer, or a founder and ask the same question: how do you build the future? Then we tell it in language everyone understands.",
    listen: "Listen on your platform",
    playLabel: "Play the latest episode",
    episodes: [
      { num: "042", t: "Why does AI “hallucinate”?", g: "with Dr. Layla Al-Harbi", d: "48 min" },
      { num: "041", t: "Building a one-person company", g: "with Omar Al-Salem", d: "53 min" },
      { num: "040", t: "Privacy in the age of models", g: "with Sara Al-Qahtani", d: "39 min" },
    ],
  },
  testimonials: {
    eb: "Words",
    title: "Honest words",
    titleSoft: "from my partners",
    proof: "99+ brands & guests",
    items: [
      { quote: "He explained our technical idea in a way our audience understood instantly. That one video noticeably lifted our engagement.", name: "Fahad Al-Dosari", role: "Marketing lead at Ru'a" },
      { quote: "Working with him was smooth from start to finish, and his eye for detail clearly raised the campaign's quality.", name: "Abdullah Al-Qahtani", role: "Founder of Nuqta" },
      { quote: "He hosted me for one of the most enjoyable episodes I've recorded. Sharp questions, professional production.", name: "Yousef Al-Salem", role: "Product lead at Ufuq" },
      { quote: "He simplified our complex product into a clear story. We felt a real difference in audience awareness.", name: "Samer Al-Harbi", role: "CTO at Masar" },
      { quote: "His content blends depth and simplicity. You rarely find someone who explains AI this honestly.", name: "Omar Al-Abdullah", role: "Founder of Madar Studio" },
      { quote: "From the first meeting he understood our message fast, and turned it into content that beat our expectations.", name: "Khalid Al-Otaibi", role: "Co-founder at Nawah" },
    ],
  },
  faq: {
    eb: "FAQ",
    title: "Your questions,",
    titleSoft: "answered.",
    items: [
      { q: "How do I work with you on a campaign or sponsorship?", a: "Send me your idea and target audience, and in a short call we'll pick the best format — a video, a series, or a podcast episode — with a clear timeline and budget." },
      { q: "Do you host guests on the podcast?", a: "Yes — I host builders, engineers, and founders with a tech story worth telling. Send me a short intro about you and the topic you'd like to discuss." },
      { q: "How long does a custom video take?", a: "It depends on the format and length. Short pieces are usually one to two weeks; larger work is three weeks or more. I share an exact timeline after the first call." },
      { q: "What language do you create in?", a: "Content is Arabic-first, with English touches when the topic calls for it. I can produce bilingual versions when needed." },
      { q: "How do I subscribe to the newsletter?", a: "Drop your email below and you'll get a confirmation. Every week I send one idea about AI — no noise." },
    ],
  },
  cta: {
    kicker: "The weekly newsletter",
    title: "One idea on AI,",
    titleSoft: "every week.",
  },
  contact: {
    eb: "Newsletter",
    nl: "Ideas on AI every week, no noise.",
    ph: "you@example.com",
    sub: "Subscribe",
    ok: "Thanks — check your inbox to confirm.",
    err: "Please enter a valid email address.",
  },
  footer: {
    big: "Let's make content worth making.",
    email: "hello@siddiqmousa.com",
    backToTop: "Back to top",
    legal: "© 2026 Siddiq Mousa. Built with the Siddiq Mousa design system.",
  },
};

export const dictionaries: Record<Locale, Dict> = { ar, en };
export const getDict = (l: Locale): Dict => dictionaries[l] ?? ar;
