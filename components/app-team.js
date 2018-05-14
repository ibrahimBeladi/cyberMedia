Vue.component("app-team", {
	template: `
	<div>
		<v-card>
			<v-card-title class="justify-center pt-5">
				<span class="headline">
					{{ $t("team.team") }}
				</span>
			</v-card-title>
			<v-card-text class="pa-1">
				<v-container fill-height grid-list-xl>
					<v-layout row wrap justify-center>
						<v-flex xs6 md4 v-for="p in team" :key="p.name">
							<v-card>
								<v-card-media src="../res/imgs/hacker.jpg" :height="height" contain></v-card-media>
								<v-card-text class="text-xs-center">
									<span class="subheading">
										{{ $t("team."+p.name) }}
									</span>
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
		</v-card>
	</div>
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