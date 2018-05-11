Vue.component("app-team", {
	template: `
	<v-container fill-height grid-list-xl>
		<v-layout align-center>
			<v-flex text-xs-center>
				<h3 class="display-3">
					{{ $t("team.team") }}
				</h3>
				<v-layout row wrap justify-center>
					<v-flex xs6 md4 v-for="p in team" :key="p.name">
						<v-card>
							<v-card-media src="../res/imgs/hacker.jpg" :height="height" contain></v-card-media>
							<v-card-text>
								{{ $t("team."+p.name) }}
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
	`,
	data: function () {
		return {
			team: [
				{ name: "ibra" },
				{ name: "osama" },
				{ name: "azoz" },
				{ name: "abood" },
				{ name: "musab" },
			]
		}
	},
	computed: {
		height: function () {
			switch (this.$vuetify.breakpoint.name) {
				case "xs": return "50px";
				case "sm": return "100px";
				case "md": return "150px";
				case "lg": return "200px";
				case "xl": return "250px";
			}
		}
	}
});