Vue.component("app-toolbar", {
	template: `
	<div>
		<v-toolbar :color="color" dense app dark>
		<v-toolbar-items>
			<v-btn flat @click="changeLang" class="hidden-xs-only">
				{{ isEN ? "عربي" : "English" }}
			</v-btn>

			<v-toolbar-side-icon @click="drawer = true" class="hidden-sm-and-up">
				<v-icon>mdi-menu</v-icon>
			</v-toolbar-side-icon>
		</v-toolbar-items>

			<v-spacer></v-spacer>

			<v-toolbar-items>
				<template v-for="item,i in items">
					<v-btn flat :to="item.to" class="hidden-xs-only">
						{{ $t( item.title ) }}
					</v-btn>
				</template>
				<v-btn flat to="home">
					<v-avatar>
						<img src="./res/imgs/logo.png"/>
					</v-avatar>
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>

		<v-navigation-drawer dark temporary app v-model="drawer" :right="!isEN" class="hidden-sm-and-up">
			<v-list dense>
				<v-list-tile to="/home">
					<v-list-tile-action>
						<v-icon>
							mdi-home
						</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title :class="{'text-xs-right':!isEN}">
							{{ $t( "links.home" ) }}
						</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
			
			<v-divider></v-divider>

			<v-list dense>
				<v-list-tile v-for="item in items" :key="item.title" :to="item.to">
					<v-list-tile-action>
						<v-icon>
							{{ item.icon }}
						</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title :class="{'text-xs-right':!isEN}">
							{{ $t( item.title ) }}
						</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>

			<v-divider></v-divider>

			<v-list dense>
				<v-list-tile @click="changeLang">
					<v-list-tile-action>
						<v-icon>
							mdi-translate
						</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title :class="{'text-xs-right':!isEN}">
							{{ isEN ? "عربي" : "English" }}
						</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	</div>
	`,
	data: () => ({
		drawer: false,
		items: [
			{ to: "media", title: "links.title1", icon: "mdi-video" },
			{ to: "team", title: "links.title2", icon:"mdi-account-group"},
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
				document.documentElement.lang = "ar";
			}
			else {
				document.cookie = "en";
				i18n.locale = "en";
				document.documentElement.lang = "en";
			}
		}
	},
	computed: {
		isEN: function () {
			return i18n.locale == "en";
		}
	}
});