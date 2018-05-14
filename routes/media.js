var mediaRoute = {
	template: `
	<div>
		<v-card>
			<v-card-title class="justify-center pt-5">
				<span class="headline">
					{{ $t( "links.title1" ) }}
				</span>
			</v-card-title>
			<v-card-text class="pa-1">
				<v-container grid-list-md :class="getClass">
					<v-layout row wrap justify-center>
						<v-flex xs12 sm6 md4 v-for="link in links" :key="link.title" class="media-item">
							<a :href="link.href" target="_blank" style="text-decoration: none;">
								<v-card class="text-xs-center">
									<v-card-media class="center-icon pt-3 pb-2">
										<v-icon color="grey" size="100">
											{{ link.icon }}
										</v-icon>
									</v-card-media>
									<v-card-text class="pa-3">
										<span class="subheading">
											{{ $t( "media."+link.code ) }}
										</span>
									</v-card-text>
								</v-card>
							</a>
						</v-flex>
					</v-layout>	
				</v-container>
			</v-card-text>
		</v-card>
	</div>
	`,
	data: function () {
		return {
			links: [
				{ code: "a", icon: "mdi-security", href: "http://www.citc.gov.sa/en/RulesandSystems/CITCSystem/Documents/LA_004_%20E_%20Anti-Cyber%20Crime%20Law.pdf" },
				{ code: "p", icon: "mdi-presentation-play", href: "//google.com" },
				{ code: "i", icon: "mdi-camcorder-box", href: "//google.com" },
			]
		}
	},
	computed: {
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
}
