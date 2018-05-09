var messages = {
    en: {
        message: {
            toBe: 'A quote',
            title1: 'first link',
            title2: 'second link',
            title3: 'third link',
            title4: 'fourth link',
            content: "content ",
            hacker: "hacker name",
        },
        team: {
            team: "Team",
            ibra: "Ibrahim Al-Beladi",
            osama: "Osama Albulaykhi",
            azoz: "Abdulaziz Al-Awwad",
            abood: "Abdullah Moshabab",
            musab: "Musab Alghuraibi",
        }
    },
    ar: {
        message: {
            toBe: 'مقولة',
            title1: 'الرابط الاول',
            title2: 'الرابط الثاني',
            title3: 'الرابط الثالث',
            title4: 'الرابط الرابع',
            content: "المحتوى ",
            hacker: "اسم الهكر",
        },
        team: {
            team: "الفريق",
            ibra: "ابراهيم البلادي",
            osama: "اسامة البليخي",
            azoz: "عبدالعزيز العواد",
            abood: "عبدالله مشبب",
            musab: "مصعب الغريبي",
        }
    }
};

var i18n = new VueI18n({
    locale: 'en',
    messages
});