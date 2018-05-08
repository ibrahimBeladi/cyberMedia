var messages = {
    en: {
        message: {
            toBe: 'To be or not to be',
            title1: 'first link',
            title2: 'second link',
            title3: 'third link',
            title4: 'fourth link',
            team: "Team",
            ibra: "Ibrahim Al-Beladi",
            content: "content ",
            hacker: "hacker name",
        }
    },
    ar: {
        message: {
            toBe: 'اكون او لا اكون',
            title1: 'الرابط الاول',
            title2: 'الرابط الثاني',
            title3: 'الرابط الثالث',
            title4: 'الرابط الرابع',
            team: "الفريق",
            ibra: "ابراهيم البلادي",
            content: "المحتوى ",
            hacker: "اسم الهكر",
        }
    }
};

var i18n = new VueI18n({
    locale: 'en',
    messages
});