Vue.component("app-toolbar", {
	template: `
		<v-toolbar :color="color" dense app dark>
			<v-toolbar-items>
				<v-btn flat to="home">
					<v-avatar>
						<img src="./res/imgs/logo.png"/>
					</v-avatar>
				</v-btn>
				<template v-for="link,i in links">
					<v-btn flat :to="link.to">
						{{ $t( "links.title"+(i+1) ) }}
					</v-btn>
				</template>
			</v-toolbar-items>

			<v-spacer></v-spacer>

			<v-toolbar-items>
				
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
			{ to: "media" },
			{ to: "team" },
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
			if (i18n.locale == "en") {
				document.cookie = "ar";
				i18n.locale = "ar";
			}
			else {
				document.cookie = "en";
				i18n.locale = "en";
			}
		}
	},
	computed: {
		isEN: function () {
			return i18n.locale == "en";
		}
	}
});