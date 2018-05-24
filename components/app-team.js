Vue.component("app-team", {
	template: `
		<v-card class="pt-2">
			<v-card-title class="justify-center pt-5">
				<span class="headline">
					{{ $t("team.team") }}
				</span>
			</v-card-title>
			<v-card-text class="pa-1">
				<v-container grid-list-md fill-height :class="getClass">
					<v-layout row wrap justify-center>
						<v-flex xs12 sm6 md4 v-for="p in team" :key="p.name">
							<v-card>
								<v-card-text class="text-xs-center py-2">
									<span class="title">
										{{ $t("team."+p.name) }}
									</span>
									<p class="subheading ma-0">
										- {{ $t("team."+p.name+"2") }}
									</p>
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
		</v-card>
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
		},
		getClass: function () {
			switch (this.$vuetify.breakpoint.name) {
				case "xs": return "pa-0";
				case "sm": return "pa-1";
				case "md": return "pa-2";
				case "lg": return "pa-3";
				case "xl": return "pa-4";
			}
		}
	}
});