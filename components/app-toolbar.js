Vue.component("app-toolbar", {
	template: `
		<v-toolbar :color="color" dense app dark>
			<v-toolbar-items>
				<v-btn to="home" flat>CyberMedia</v-btn>
			</v-toolbar-items>

			<v-spacer></v-spacer>

			<v-toolbar-items>
				<template v-for="link in links">
					<v-btn flat :to="link.to">{{ link.title }}</v-btn>
				</template>
				<v-btn flat @click="changeLang">
					<template v-if="isEN">
						عربي
					</template>
					<template v-else>
						English
					</template>
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	`,
	data: () => ({
		links: [
			{ to: "p1", title: "Link One" },
			{ to: "p2", title: "Link Two" },
			{ to: "p3", title: "Link Three" },
			{ to: "p4", title: "Link Four" }
		]
	}),
	props: {
		color: {
			type: String,
			default: "blue"
		}
	},
	methods: {
		changeLang() {
			if (i18n.locale == "en")
				i18n.locale = "ar";
			else
				i18n.locale = "en";
		}
	},
	computed: {
		isEN: function () {
			return i18n.locale == "en";
		}
	}
});