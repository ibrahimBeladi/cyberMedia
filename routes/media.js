var mediaRoute = {
	template: `
	<div>
		<v-card>
			<v-card-title class="justify-center pt-5">
				<p class="headline">
					{{ $t( "links.title1" ) }}
				</p>
			</v-card-title>
			<v-card-text class="pa-1">
				<v-container grid-list-md :class="getClass">
					<v-layout row wrap>
						<v-flex xs12 md4 v-for="link in links" :key="link.title">
							<v-card>
								<v-card-text>
									<a :href="link.href" target="_blank">
										{{ $t( "media."+link.code ) }}
									</a>
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
			links: [
				{ code: "a", href: "http://www.citc.gov.sa/en/RulesandSystems/CITCSystem/Documents/LA_004_%20E_%20Anti-Cyber%20Crime%20Law.pdf" },
				{ code: "p", href: "//google.com" },
				{ code: "i", href: "//google.com" },
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
