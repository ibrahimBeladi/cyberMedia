var messages = {
	en: {
		message: {
			toBe: 'A quote',
			content: "content ",
		},
		team: {
			team: "Team",
			ibra: "Ibrahim Al-Beladi",
			osama: "Osama Albulaykhi",
			azoz: "Abdulaziz Al-Awwad",
			abood: "Abdullah Moshabab",
			musab: "Musab Alghuraibi",
		},
		links: {
			title1: 'Media',
			title2: 'Team',
		},
		media: {
			a: "Anti-Cyber Crime Law",
			p: "Presentation",
			i: "Infographic",
		}
	},
	ar: {
		message: {
			toBe: 'مقولة',
			content: "المحتوى ",
		},
		team: {
			team: "الفريق",
			ibra: "ابراهيم البلادي",
			osama: "اسامة البليخي",
			azoz: "عبدالعزيز العواد",
			abood: "عبدالله مشبب",
			musab: "مصعب الغريبي",
		},
		links: {
			title1: 'الوسائط',
			title2: 'الفريق',
		},
		media: {
			a: "نظام مكافحة جرائم المعلوماتية",
			p: "العرض التقديمي",
			i: "العرض المرئي",
		}
	}
};

var i18n = new VueI18n({
	locale: 'en',
	messages
});