var messages = {
	en: {
		message: {
			quote: 'It takes 20 years to build a reputation and few minutes of cyber-incident to ruin it.',
			quoter: "―&nbsp;Stephane&nbsp;Nappo",
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
		},
		password: {
			time: "Time needed to crack a password"
		}
	},
	ar: {
		message: {
			quote: 'يستغرق الأمر 20 عامًا لبناء سمعة وبضع دقائق من الحوادث الإلكترونية لإفسادها.',
			quoter: "―&nbsp;ستيفن&nbsp;نابو",
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
		},
		password: {
			time: "الوقت اللازم لكسر كلمة المرور"
		}
	}
};

var i18n = new VueI18n({
	locale: 'en',
	messages
});