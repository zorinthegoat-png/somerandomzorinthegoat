const { useState, useEffect, useRef } = window.React;

// --- ICONS COMPONENT ---
const IconBase = ({ children, size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {children}
    </svg>
);

const Icons = {
    Globe: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconBase>,
    GraduationCap: (p) => <IconBase {...p}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></IconBase>,
    Map: (p) => <IconBase {...p}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></IconBase>,
    History: (p) => <IconBase {...p}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></IconBase>,
    Sun: (p) => <IconBase {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></IconBase>,
    Moon: (p) => <IconBase {...p}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></IconBase>,
    Clock: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></IconBase>,
    Calculator: (p) => <IconBase {...p}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></IconBase>,
    BookOpen: (p) => <IconBase {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></IconBase>,
    Music: (p) => <IconBase {...p}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></IconBase>,
    User: (p) => <IconBase {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></IconBase>,
    Palette: (p) => <IconBase {...p}><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></IconBase>,
    Activity: (p) => <IconBase {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></IconBase>,
    Monitor: (p) => <IconBase {...p}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></IconBase>,
    MessageCircle: (p) => <IconBase {...p}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></IconBase>,
    Cpu: (p) => <IconBase {...p}><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></IconBase>,
    ChevronRight: (p) => <IconBase {...p}><path d="m9 18 6-6-6-6"/></IconBase>,
    ArrowRight: (p) => <IconBase {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></IconBase>,
    MapPin: (p) => <IconBase {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></IconBase>,
    CheckCircle: (p) => <IconBase {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></IconBase>,
    AlertTriangle: (p) => <IconBase {...p}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></IconBase>,
    Database: (p) => <IconBase {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></IconBase>,
    Zap: (p) => <IconBase {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></IconBase>,
    Layers: (p) => <IconBase {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></IconBase>,
    X: (p) => <IconBase {...p}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></IconBase>,
    BarChart: (p) => <IconBase {...p}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></IconBase>,
    Lock: (p) => <IconBase {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></IconBase>
};

const TIMINGS = [
    { start: "13:00", end: "13:45" },
    { start: "13:50", end: "14:35" },
    { start: "14:40", end: "15:25" },
    { start: "15:30", end: "16:15" },
    { start: "16:20", end: "17:05" },
    { start: "17:10", end: "17:55" },
    { start: "18:00", end: "18:45" }
];

const SCHEDULE_DATA = {
    1: { // Monday
        ru: ["Классный час", "Математика", "Русский язык", "Естествознание", "Английский язык"],
        uz: ["Sinf soati", "Matematika", "Rus tili", "Tabiiy fanlar", "Ingliz tili"],
        icons: [Icons.Clock, Icons.Calculator, Icons.BookOpen, Icons.Globe, Icons.Globe],
        colors: ["text-pink-600 bg-pink-50", "text-blue-600 bg-blue-50", "text-indigo-600 bg-indigo-50", "text-green-600 bg-green-50", "text-yellow-600 bg-yellow-50"]
    },
    2: { // Tuesday
        ru: ["Математика", "Математика", "Музыка", "Воспитание", "Естествознание"],
        uz: ["Matematika", "Matematika", "Musiqa", "Tarbiya", "Tabiiy fanlar"],
        icons: [Icons.Calculator, Icons.Calculator, Icons.Music, Icons.User, Icons.Globe],
        colors: ["text-blue-600 bg-blue-50", "text-blue-600 bg-blue-50", "text-purple-600 bg-purple-50", "text-orange-600 bg-orange-50", "text-green-600 bg-green-50"]
    },
    3: { // Wednesday
        ru: ["Английский язык", "Математика", "История", "Литература", "Физкультура", "Английский язык"],
        uz: ["Ingliz tili", "Matematika", "Tarix", "Adabiyot", "Jismoniy tarbiya", "Ingliz tili"],
        icons: [Icons.Globe, Icons.Calculator, Icons.History, Icons.BookOpen, Icons.Activity, Icons.Globe],
        colors: ["text-yellow-600 bg-yellow-50", "text-blue-600 bg-blue-50", "text-amber-600 bg-amber-50", "text-rose-600 bg-rose-50", "text-emerald-600 bg-emerald-50", "text-yellow-600 bg-yellow-50"]
    },
    4: { // Thursday
        ru: ["ИЗО", "История", "Физкультура", "Русский язык"],
        uz: ["Tasviriy san'at", "Tarix", "Jismoniy tarbiya", "Rus tili"],
        icons: [Icons.Palette, Icons.History, Icons.Activity, Icons.BookOpen],
        colors: ["text-teal-600 bg-teal-50", "text-amber-600 bg-amber-50", "text-emerald-600 bg-emerald-50", "text-indigo-600 bg-indigo-50"]
    },
    5: { // Friday
        ru: ["Узбекский язык", "Информатика", "Узбекский язык", "Литература", "Технология", "Технология"],
        uz: ["O'zbek tili", "Informatika", "O'zbek tili", "Adabiyot", "Texnologiya", "Texnologiya"],
        icons: [Icons.MessageCircle, Icons.Monitor, Icons.MessageCircle, Icons.BookOpen, Icons.Cpu, Icons.Cpu],
        colors: ["text-cyan-600 bg-cyan-50", "text-slate-600 bg-slate-50", "text-cyan-600 bg-cyan-50", "text-rose-600 bg-rose-50", "text-gray-600 bg-gray-50", "text-gray-600 bg-gray-50"]
    },
    6: { // Saturday
        ru: ["Русский язык", "Математика", "Узбекский язык", "Английский язык", "Естествознание"],
        uz: ["Rus tili", "Matematika", "O'zbek tili", "Ingliz tili", "Tabiiy fanlar"],
        icons: [Icons.BookOpen, Icons.Calculator, Icons.MessageCircle, Icons.Globe, Icons.Globe],
        colors: ["text-indigo-600 bg-indigo-50", "text-blue-600 bg-blue-50", "text-cyan-600 bg-cyan-50", "text-yellow-600 bg-yellow-50", "text-green-600 bg-green-50"]
    }
};

const TRANSLATIONS = {
    ru: {
        days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        nav: { home: "Главная", school: "Школа 169", history: "История", geo: "О Стране", settings: "Настройки" },
        common: { made_by: "Сделано: MuhammadMuso" },
        hero: { 
            label: "РЕСПУБЛИКА УЗБЕКИСТАН", 
            main_title: "УЗБЕКИСТАН",
            sub_title: "& ШКОЛА №169",
            title: "Земля Великого Наследия", 
            sub: "Ташкент • Школа №169 • 6-Д Класс",
            btn_school: "Открыть Дневник",
            btn_explore: "Узнать об Узбекистане"
        },
        school: {
            title: "Моя Школа: №169",
            sub: "Опорная школа Шайхантахурского района",
            schedule_header: "Расписание Уроков 6-Д",
            subject_label: "Предмет",
            break_label: "Перемена 5 мин",
            no_lessons: "Уроков нет, отдыхайте!",
            info_shift: "2-я Смена (с 13:00)",
            info_loc: "Ориентир: Махалля Хувайдо",
            modal: {
                time_label: "Время урока",
                about_label: "О предмете",
                btn_close: "Закрыть",
                default_desc: "Важный школьный предмет, направленный на всестороннее развитие ученика."
            }
        },
        history: {
            title: "Хронология Веков",
            timeline: [
                { date: "VI в. до н.э.", event: "Основание Самарканда", desc: "Один из древнейших городов мира, ровесник Рима." },
                { date: "329 г. до н.э.", event: "Поход Александра", desc: "Македонская армия завоевывает Мараканду." },
                { date: "VIII-IX вв.", event: "Исламский Ренессанс", desc: "Расцвет науки: Аль-Хорезми, Беруни, Ибн Сина." },
                { date: "1336-1405 гг.", event: "Эпоха Амира Тимура", desc: "Создание великой империи со столицей в Самарканде." },
                { date: "1991 г.", event: "Независимость", desc: "1-сентября объявлено Днем Независимости Республики." }
            ]
        },
        info: {
            title: "Факты об Узбекистане",
            cards: [
                { label: "Площадь", val: "448,9 тыс. км²" },
                { label: "Население", val: "36+ млн чел." },
                { label: "Столица", val: "Ташкент" },
                { label: "Валюта", val: "Сум (UZS)" }
            ],
            header_gold: "Золото и Ресурсы",
            header_cotton: "Хлопок и Текстиль",
            header_food: "Культура и Еда",
            header_pc: "Плюсы и Минусы",
            label_pros: "Плюсы",
            label_cons: "Минусы",
            text_gold: "Узбекистан занимает 4-е место в мире по запасам золота.",
            text_cotton: "Страна является одним из крупнейших экспортеров хлопка и текстиля.",
            text_food: "Узбекская кухня (Плов) внесена в список наследия ЮНЕСКО.",
            pros: ["Гостеприимство", "Безопасность", "Дешевые фрукты"],
            cons: ["Жаркое лето", "Пробки в Ташкенте"]
        },
        settings: {
            title: "Настройки Портала",
            theme: "Тема оформления",
            lang: "Язык интерфейса",
            admin_btn: "Статистика (Админ)"
        },
        descriptions: {
            "Математика": "Наука о числах, величинах и геометрических фигурах. Развивает логическое мышление.",
            "Русский язык": "Изучение грамматики, орфографии и культуры речи русского языка.",
            "Естествознание": "Основы знаний о природе, физических явлениях и окружающем мире.",
            "Английский язык": "Изучение международного языка общения, грамматики и словарного запаса.",
            "Классный час": "Организационное время для обсуждения важных вопросов класса и воспитательной работы.",
            "Музыка": "Развитие музыкального слуха, изучение истории музыки и пение.",
            "Воспитание": "Урок, направленный на формирование этических норм и патриотизма.",
            "История": "Изучение прошлого человечества, важных дат и событий Узбекистана и мира.",
            "Литература": "Чтение и анализ произведений великих писателей и поэтов.",
            "Физкультура": "Физическое развитие, спорт и укрепление здоровья.",
            "ИЗО": "Уроки рисования, развитие творческих способностей и воображения.",
            "Узбекский язык": "Изучение государственного языка Республики Узбекистан.",
            "Информатика": "Основы работы с компьютером, программирование и цифровая грамотность.",
            "Технология": "Приобретение практических навыков, рукоделие и труд."
        }
    },
    uz: {
        days: ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
        nav: { home: "Bosh Sahifa", school: "169-Maktab", history: "Tarix", geo: "Mamlakat", settings: "Sozlamalar" },
        common: { made_by: "Yaratuvchi: MuhammadMuso" },
        hero: { 
            label: "O'ZBEKISTON RESPUBLIKASI", 
            main_title: "O'ZBEKISTON",
            sub_title: "& 169-MAKTAB",
            title: "Buyuk Meros Yurti", 
            sub: "Toshkent • 169-Maktab • 6-D Sinf",
            btn_school: "Kundalikni Ochish",
            btn_explore: "O'zbekiston Haqida"
        },
        school: {
            title: "Mening Maktabim: №169",
            sub: "Shayxontohur tumanining tayanch maktabi",
            schedule_header: "6-D Sinf Dars Jadvali",
            subject_label: "Fan",
            break_label: "Tanaffus 5 daqiqa",
            no_lessons: "Darslar yo'q, dam oling!",
            info_shift: "2-smena (13:00 dan)",
            info_loc: "Mo'ljal: Huvaydo mahallasi",
            modal: {
                time_label: "Dars vaqti",
                about_label: "Fan haqida",
                btn_close: "Yopish",
                default_desc: "O'quvchining har tomonlama rivojlanishiga qaratilgan muhim maktab fani."
            }
        },
        history: {
            title: "Asrlar Xronologiyasi",
            timeline: [
                { date: "M.a. VI asr", event: "Samarqandning asoslanishi", desc: "Rim bilan tengdosh bo'lgan dunyoning eng qadimiy shaharlaridan biri." },
                { date: "M.a. 329 yil", event: "Aleksandr Yurishi", desc: "Makedoniya armiyasi Marokandni zabt etdi." },
                { date: "VIII-IX asrlar", event: "Islom Renessansi", desc: "Ilm-fan rivoji: Al-Xorazmiy, Beruniy, Ibn Sino." },
                { date: "1336-1405 yy.", event: "Amir Temur Davri", desc: "Samarqandda poytaxti bo'lgan buyuk imperiyaning yaratilishi." },
                { date: "1991 yil", event: "Mustaqillik", desc: "1-sentabr Respublika Mustaqillik kuni deb e'lon qilindi." }
            ]
        },
        info: {
            title: "O'zbekiston Faktlarda",
            cards: [
                { label: "Maydon", val: "448,9 ming km²" },
                { label: "Aholi", val: "36+ mln kishi" },
                { label: "Poytaxt", val: "Toshkent" },
                { label: "Valyuta", val: "So'm (UZS)" }
            ],
            header_gold: "Oltin va Resurslar",
            header_cotton: "Paxta va To'qimachilik",
            header_food: "Madaniyat va Taomlar",
            header_pc: "Afzallik va Kamchiliklar",
            label_pros: "Afzalliklar",
            label_cons: "Kamchiliklar",
            text_gold: "O'zbekiston oltin zaxiralari bo'yicha dunyoda 4-o'rinni egallaydi.",
            text_cotton: "Mamlakat paxta va to'qimachilik mahsulotlarining yirik eksportchisi.",
            text_food: "O'zbek oshxonasi (Palov) YuNESKO merosi ro'yxatiga kiritilgan.",
            pros: ["Mehmondo'stlik", "Xavfsizlik", "Arzon mevalar"],
            cons: ["Issiq yoz", "Toshkentdagi tirbandliklar"]
        },
        settings: {
            title: "Portal Sozlamalari",
            theme: "Mavzu",
            lang: "Til",
            admin_btn: "Statistika (Admin)"
        },
        descriptions: {
            "Matematika": "Sonlar, miqdorlar va geometrik shakllar haqidagi fan. Mantiqiy fikrlashni rivojlantiradi.",
            "Rus tili": "Rus tilining grammatikasi, imlosi va nutq madaniyatini o'rganish.",
            "Tabiiy fanlar": "Tabiat, fizik hodisalar va atrof-muhit haqidagi asosiy bilimlar.",
            "Ingliz tili": "Xalqaro muloqot tili, grammatika va lug'at boyligini o'rganish.",
            "Sinf soati": "Sinfning muhim masalalarini muhokama qilish va tarbiyaviy ishlar uchun tashkiliy vaqt.",
            "Musiqa": "Musiqiy eshitish qobiliyatini rivojlantirish, musiqa tarixi va qo'shiq aytish.",
            "Tarbiya": "Odob-axloq qoidalari va vatanparvarlikni shakllantirishga qaratilgan dars.",
            "Tarix": "Insoniyat o'tmishi, O'zbekiston va jahonning muhim sanalari va voqealarini o'rganish.",
            "Adabiyot": "Buyuk yozuvchi va shoirlarning asarlarini o'qish va tahlil qilish.",
            "Jismoniy tarbiya": "Jismoniy rivojlanish, sport va salomatlikni mustahkamlash.",
            "Tasviriy san'at": "Rasm chizish darslari, ijodiy qobiliyat va tasavvurni rivojlantirish.",
            "O'zbek tili": "O'zbekiston Respublikasining davlat tilini o'rganish.",
            "Informatika": "Kompyuterda ishlash asoslari, dasturlash va raqamli savodxonlik.",
            "Texnologiya": "Amaliy ko'nikmalar, hunarmandchilik va mehnatni o'rganish."
        }
    }
};

const getLessonInfo = (subjectName, lang) => {
    const t = TRANSLATIONS[lang];
    const desc = t.descriptions[subjectName] || t.school.modal.default_desc;
    return {
        description: desc
    };
};

// --- STATS LOGIC ---
const NAMESPACE = "uzbproject_school169_v1";

const getTodayKey = () => {
    // Returns date string like "2023-11-28" in Uzbekistan timezone
    return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Tashkent' });
}

const getYesterdayKey = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date.toLocaleDateString('en-CA', { timeZone: 'Asia/Tashkent' });
}

// --- COMPONENTS ---

function StatsModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const [stats, setStats] = useState({ total: 0, today: 0, yesterday: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch Total
                const totalReq = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/visits_total`);
                const totalData = await totalReq.json();
                
                // Fetch Today
                const todayKey = `visits_${getTodayKey()}`;
                const todayReq = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${todayKey}`);
                const todayData = await todayReq.json();
                
                // Fetch Yesterday
                const yestKey = `visits_${getYesterdayKey()}`;
                const yestReq = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${yestKey}`);
                const yestData = await yestReq.json();

                setStats({
                    total: totalData.count || 0,
                    today: todayData.count || 0,
                    yesterday: yestData.count || 0
                });
            } catch (e) {
                console.error("Stats fetch error:", e);
                // If keys don't exist yet, they might 404, default to 0
                setStats({ total: 0, today: 0, yesterday: 0 });
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-enter" onClick={handleBackdropClick}>
            <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-pop relative">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between">
                     <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Icons.BarChart size={24}/> Admin Stats
                     </h3>
                     <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors">
                        <Icons.X size={18} />
                    </button>
                </div>
                
                <div className="p-6 space-y-6">
                    {loading ? (
                        <div className="flex justify-center py-8">
                             <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl flex justify-between items-center border border-slate-100 dark:border-slate-700">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">Total Visits</p>
                                    <p className="text-2xl font-black text-slate-800 dark:text-white">{stats.total}</p>
                                </div>
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
                                    <Icons.Globe size={20}/>
                                </div>
                            </div>
                             <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-2xl flex justify-between items-center border border-green-100 dark:border-green-900/30">
                                <div>
                                    <p className="text-xs text-green-600 uppercase font-bold">Today</p>
                                    <p className="text-2xl font-black text-green-700 dark:text-green-400">{stats.today}</p>
                                </div>
                                <div className="p-2 bg-green-200 dark:bg-green-800/40 text-green-700 rounded-xl">
                                    <Icons.Sun size={20}/>
                                </div>
                            </div>
                             <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl flex justify-between items-center border border-orange-100 dark:border-orange-900/30">
                                <div>
                                    <p className="text-xs text-orange-600 uppercase font-bold">Yesterday</p>
                                    <p className="text-2xl font-black text-orange-700 dark:text-orange-400">{stats.yesterday}</p>
                                </div>
                                <div className="p-2 bg-orange-200 dark:bg-orange-800/40 text-orange-700 rounded-xl">
                                    <Icons.History size={20}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function HeroSection({ t, setActiveTab }) {
    return (
        <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 pattern-grid pointer-events-none z-0"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-600/10"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[100px] dark:bg-green-600/10"></div>
            
            <div className="relative z-10 text-center max-w-4xl space-y-8 animate-enter">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 font-mono text-sm tracking-widest uppercase">
                   <Icons.Globe size={14} /> {t.hero.label}
                </div>
                
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-green-600 dark:from-blue-400 dark:via-indigo-400 dark:to-green-400">
                        {t.hero.main_title}
                    </span>
                    <br />
                    <span className="text-slate-900 dark:text-white text-3xl md:text-5xl font-bold mt-2 block">
                        {t.hero.sub_title}
                    </span>
                </h1>
                
                <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
                    {t.hero.title}
                    <span className="block mt-2 text-base font-mono text-slate-400 dark:text-slate-500">{t.hero.sub}</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button onClick={() => setActiveTab('school')} className="btn-press group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all">
                        <Icons.GraduationCap /> {t.hero.btn_school}
                        <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                    </button>
                    <button onClick={() => setActiveTab('history')} className="btn-press px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors">
                        <Icons.Map /> {t.hero.btn_explore}
                    </button>
                </div>
            </div>
        </div>
    );
}

function LessonModal({ isOpen, onClose, data, t, lang }) {
    if (!isOpen || !data) return null;
    
    const details = getLessonInfo(data.name, lang);
    const Icon = data.icon;
    
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-enter" onClick={handleBackdropClick}>
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-pop relative">
                <div className={`p-6 ${data.color.split(' ')[1]} flex items-start justify-between`}>
                    <div className="flex items-center gap-4">
                        <div className={`p-3 bg-white/20 backdrop-blur-md rounded-xl text-slate-900`}>
                            <Icon size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">{data.name}</h3>
                            <span className="text-sm font-mono opacity-70 text-slate-700">{t.school.subject_label} #{data.index + 1}</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors text-slate-900">
                        <Icons.X size={20} />
                    </button>
                </div>
                
                <div className="p-6 space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                            <Icons.Clock size={20} />
                        </div>
                        <div>
                            <span className="text-xs uppercase text-slate-400 font-bold">{t.school.modal.time_label}</span>
                            <div className="font-mono font-bold text-lg text-slate-800 dark:text-slate-100">
                                {data.timing.start} - {data.timing.end}
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <Icons.BookOpen size={16} className="text-blue-500"/> {t.school.modal.about_label}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            {details.description}
                        </p>
                    </div>

                    <button onClick={onClose} className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl transition-colors">
                        {t.school.modal.btn_close}
                    </button>
                </div>
            </div>
        </div>
    );
}

function SchoolSection({ t, currentDay, setCurrentDay, isUz, lang }) {
    const [selectedLesson, setSelectedLesson] = useState(null);
    
    useEffect(() => {
        setSelectedLesson(null);
    }, [lang, currentDay]);

    const daySchedule = SCHEDULE_DATA[currentDay] || {};
    const lessons = isUz ? (daySchedule.uz || []) : (daySchedule.ru || []);
    const icons = daySchedule.icons || [];
    const colors = daySchedule.colors || [];

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8 animate-enter">
            <LessonModal 
                isOpen={!!selectedLesson} 
                onClose={() => setSelectedLesson(null)} 
                data={selectedLesson}
                t={t}
                lang={lang}
            />

            <div className="mb-10 text-center">
                <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 rounded-3xl mb-4 text-blue-600 dark:text-blue-400">
                    <Icons.GraduationCap size={48} />
                </div>
                <h2 className="text-4xl font-black mb-2 text-slate-900 dark:text-white">{t.school.title}</h2>
                <p className="text-slate-500 font-mono">{t.school.sub}</p>
                <div className="mt-4 flex justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700"><Icons.Clock size={14}/> {t.school.info_shift}</span>
                    <span className="flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700"><Icons.MapPin size={14}/> {t.school.info_loc}</span>
                </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3 space-y-2">
                    {t.days.map((d, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentDay(idx + 1)}
                            className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all flex justify-between items-center ${
                                currentDay === idx + 1 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105' 
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                            }`}
                        >
                            {d}
                            {currentDay === idx + 1 && <Icons.ChevronRight size={16}/>}
                        </button>
                    ))}
                </div>

                <div className="md:col-span-9">
                    <div className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[500px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full pointer-events-none"></div>

                        <div className="flex justify-between items-end mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{t.days[currentDay - 1]}</h3>
                                <p className="text-slate-500">{t.school.schedule_header}</p>
                            </div>
                            <div className="text-4xl font-black text-slate-100 dark:text-slate-800 pointer-events-none select-none">6-D</div>
                        </div>

                        {lessons.length > 0 ? (
                            <div className="space-y-4">
                                {lessons.map((lesson, idx) => {
                                    const Icon = icons[idx] ? icons[idx] : Icons.BookOpen;
                                    const colorClass = colors[idx] ? colors[idx] : "text-slate-600 bg-slate-50";
                                    const timing = TIMINGS[idx] || { start: "--:--", end: "--:--" };
                                    
                                    return (
                                        <div key={idx} className="group relative">
                                            {idx > 0 && (
                                                <div className="absolute -top-4 left-24 right-0 h-4 flex items-center">
                                                    <div className="h-px w-full bg-slate-100 dark:bg-slate-700"></div>
                                                    <span className="text-[10px] text-slate-300 dark:text-slate-600 px-2 font-mono whitespace-nowrap">{t.school.break_label}</span>
                                                </div>
                                            )}
                                            <div 
                                                onClick={() => setSelectedLesson({
                                                    name: lesson,
                                                    timing: timing,
                                                    icon: Icon,
                                                    color: colorClass,
                                                    index: idx
                                                })}
                                                className="flex cursor-pointer items-stretch gap-4 p-2 rounded-xl hover:bg-white/50 dark:hover:bg-slate-700/50 hover:scale-[1.01] hover:shadow-md transition-all duration-200"
                                            >
                                                <div className="w-20 flex flex-col justify-center items-end pr-4 border-r-2 border-blue-100 dark:border-blue-900/50">
                                                    <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{timing.start}</span>
                                                    <span className="font-mono text-xs text-slate-400">{timing.end}</span>
                                                </div>
                                                <div className="flex-1 flex items-center gap-4">
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colorClass.split(" ")[1]} ${colorClass.split(" ")[0]}`}>
                                                        <Icon size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg leading-tight text-slate-800 dark:text-slate-200">{lesson}</h4>
                                                        <span className="text-xs text-slate-400 uppercase tracking-wider">{t.school.subject_label} #{idx + 1}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-slate-300 dark:text-slate-600 pr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Icons.ChevronRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="h-64 flex flex-col items-center justify-center text-slate-400">
                                <Icons.Sun size={64} className="mb-4 text-yellow-500 opacity-50" />
                                <p className="text-xl font-medium">{t.school.no_lessons}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function HistorySection({ t }) {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-12 animate-enter">
             <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-600 mb-2">
                    <Icons.History size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{t.history.title}</h2>
                <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
             </div>

             <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

                <div className="space-y-12">
                    {t.history.timeline.map((item, idx) => (
                        <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 hidden md:block"></div>
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-amber-500 border-4 border-white dark:border-slate-900 rounded-full -translate-x-1.5 md:-translate-x-1/2 mt-6 z-10 shadow-lg"></div>
                            <div className="flex-1 ml-12 md:ml-0">
                                <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 border-l-4 border-amber-500">
                                    <span className="font-mono font-bold text-amber-600 dark:text-amber-400 text-sm tracking-wider mb-2 block">{item.date}</span>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{item.event}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>
    );
}

function InfoSection({ t }) {
    return (
        <div className="max-w-6xl mx-auto p-6 space-y-12 animate-enter">
            <div className="text-center">
                <h2 className="text-4xl font-black mb-8 text-slate-900 dark:text-white">{t.info.title}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.info.cards.map((card, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-center shadow-sm">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">{card.label}</p>
                        <p className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400">{card.val}</p>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                     <div className="p-6 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-800/30 flex gap-4">
                        <div className="p-3 bg-yellow-200 dark:bg-yellow-800/40 rounded-xl h-fit text-yellow-700 dark:text-yellow-400"><Icons.Database size={24}/></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">{t.info.header_gold}</h3>
                            <p className="text-sm opacity-80 text-slate-600 dark:text-slate-400">{t.info.text_gold}</p>
                        </div>
                     </div>
                     <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 flex gap-4">
                        <div className="p-3 bg-indigo-200 dark:bg-indigo-800/40 rounded-xl h-fit text-indigo-700 dark:text-indigo-400"><Icons.Layers size={24}/></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">{t.info.header_cotton}</h3>
                            <p className="text-sm opacity-80 text-slate-600 dark:text-slate-400">{t.info.text_cotton}</p>
                        </div>
                     </div>
                     <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800/30 flex gap-4">
                        <div className="p-3 bg-rose-200 dark:bg-rose-800/40 rounded-xl h-fit text-rose-700 dark:text-rose-400"><Icons.Zap size={24}/></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">{t.info.header_food}</h3>
                            <p className="text-sm opacity-80 text-slate-600 dark:text-slate-400">{t.info.text_food}</p>
                        </div>
                     </div>
                </div>

                <div className="glass-card rounded-3xl p-8">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                        <Icons.AlertTriangle className="text-blue-500"/> {t.info.header_pc}
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2 block">{t.info.label_pros}</span>
                            <div className="space-y-2">
                                {t.info.pros.map((p, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                                        <Icons.CheckCircle size={18} className="text-green-600 dark:text-green-400"/>
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">{t.info.label_cons}</span>
                            <div className="space-y-2">
                                {t.info.cons.map((c, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
                                        <Icons.AlertTriangle size={18} className="text-red-600 dark:text-red-400"/>
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- MAIN APP ---

function App() {
    const [lang, setLang] = useState(() => localStorage.getItem('portal_lang') || 'ru');
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portal_theme') === 'dark');
    const [activeTab, setActiveTab] = useState('home');
    const [adminModalOpen, setAdminModalOpen] = useState(false);
    
    const mainRef = useRef(null);
    
    const [currentDay, setCurrentDay] = useState(() => {
        const day = new Date().getDay();
        return day === 0 ? 1 : day;
    });

    const t = TRANSLATIONS[lang];
    const isUz = lang === 'uz';

    // REMOVE LOADER
    useEffect(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    }, []);

    // COUNT VISITS (ONCE PER LOAD)
    useEffect(() => {
        const countVisit = async () => {
            try {
                // Increment Total
                await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/visits_total/up`);
                // Increment Today
                const todayKey = `visits_${getTodayKey()}`;
                await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${todayKey}/up`);
            } catch (e) {
                console.error("Counter API failed", e);
            }
        };
        // Simple duplicate check could go here, but per request we count "entries"
        countVisit();
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('portal_theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('portal_theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('portal_lang', lang);
    }, [lang]);

    useEffect(() => {
        if (mainRef.current) mainRef.current.scrollTo(0, 0);
        window.scrollTo(0, 0);
    }, [activeTab]);

    const toggleLang = () => setLang(l => l === 'ru' ? 'uz' : 'ru');

    const handleAdminClick = () => {
        const pass = prompt("Enter Admin Password:");
        if (pass === "muso12g") {
            setAdminModalOpen(true);
        } else if (pass !== null) {
            alert("Wrong password!");
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <StatsModal isOpen={adminModalOpen} onClose={() => setAdminModalOpen(false)} />

            {/* SIDEBAR NAVIGATION */}
            <aside className="w-full md:w-20 lg:w-72 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex md:flex-col items-center justify-between p-4 fixed bottom-0 md:relative z-50 md:h-screen shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:shadow-none pb-safe">
                 <div className="hidden md:flex flex-col items-center lg:items-start w-full mb-8">
                    <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-blue-500/30">
                        UZ
                    </div>
                    <span className="hidden lg:block font-bold text-xl tracking-tight text-slate-800 dark:text-white">PORTAL <span className="text-blue-600">169</span></span>
                 </div>

                 <nav className="flex md:flex-col gap-2 md:gap-4 w-full justify-around md:justify-start">
                     {[
                         { id: 'home', icon: Icons.Globe, label: t.nav.home },
                         { id: 'school', icon: Icons.GraduationCap, label: t.nav.school },
                         { id: 'history', icon: Icons.History, label: t.nav.history },
                         { id: 'info', icon: Icons.Map, label: t.nav.geo },
                     ].map(item => (
                         <button 
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`p-3 lg:px-4 lg:py-3 rounded-xl flex items-center gap-3 transition-all ${
                                activeTab === item.id 
                                ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                                : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                         >
                            <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                            <span className="hidden lg:block font-medium">{item.label}</span>
                         </button>
                     ))}
                 </nav>

                 <div className="hidden lg:flex flex-col gap-4 w-full mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                     <div className="flex flex-col gap-2 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 text-slate-500">{t.settings.title}</span>
                         
                         <button onClick={toggleLang} className="flex justify-between items-center text-sm font-medium hover:text-blue-500 text-slate-700 dark:text-slate-300">
                             <span>{t.settings.lang}</span>
                             <span className="bg-white dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">{lang.toUpperCase()}</span>
                         </button>
                         
                         <button onClick={() => setDarkMode(!darkMode)} className="flex justify-between items-center text-sm font-medium hover:text-blue-500 text-slate-700 dark:text-slate-300">
                             <span>{t.settings.theme}</span>
                             {darkMode ? <Icons.Moon size={16}/> : <Icons.Sun size={16}/>}
                         </button>

                         {/* ADMIN BUTTON */}
                         <button onClick={handleAdminClick} className="flex justify-between items-center text-sm font-medium text-slate-400 hover:text-red-500 transition-colors pt-2 border-t border-slate-200 dark:border-slate-800 mt-2">
                            <span>{t.settings.admin_btn}</span>
                            <Icons.Lock size={14} />
                         </button>
                     </div>
                     <div className="text-[10px] text-slate-300 dark:text-slate-600 text-center font-mono">
                         {t.common.made_by}
                     </div>
                 </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main ref={mainRef} className="flex-1 pb-24 md:pb-0 h-screen md:overflow-y-auto relative scroll-smooth flex flex-col">
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40 z-[-1]" style={{
                    background: `radial-gradient(circle at 50% 50%, ${darkMode ? '#1e293b' : '#e2e8f0'} 0%, transparent 50%)`
                }}></div>
                
                <div className="lg:hidden flex justify-between items-center p-4 sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
                     <div className="font-bold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                         <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">UZ</div>
                         School 169
                     </div>
                     <div className="flex gap-2">
                         <button onClick={toggleLang} aria-label="Toggle Language" className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold text-slate-700 dark:text-slate-300">{lang.toUpperCase()}</button>
                         <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Theme" className="p-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
                             {darkMode ? <Icons.Moon size={18}/> : <Icons.Sun size={18}/>}
                         </button>
                     </div>
                </div>

                <div className="flex-1">
                    {activeTab === 'home' && <HeroSection t={t} setActiveTab={setActiveTab} />}
                    {activeTab === 'school' && <SchoolSection t={t} currentDay={currentDay} setCurrentDay={setCurrentDay} isUz={isUz} lang={lang} />}
                    {activeTab === 'history' && <HistorySection t={t} />}
                    {activeTab === 'info' && <InfoSection t={t} />}
                </div>

                <footer className="py-8 mt-auto flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                        <Icons.Cpu size={14} className="text-blue-500" />
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono tracking-wide">
                            {t.common.made_by}
                        </span>
                    </div>
                </footer>
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
