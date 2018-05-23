Vue.component("app-cyber", {
	template: `
		<v-card class="py-5 grey lighten-4">
			<v-card-title class="justify-center pt-5">
				<span class="headline">
					{{ $t( "cyber.cybersecurity" ) }}
				</span>
			</v-card-title>
			<v-card-text class="pa-1">
				<v-container grid-list-md :class="getClass">
					<v-layout row wrap justify-center>
						<v-flex xs12 v-for="question,i in cyberQuestions" :key="i">
							<v-card>
								<v-card-title class="pb-0">
									<span class="title">
										{{ $t( "cyber.cyber.q"+(i+1) ) }}
									</span>
								</v-card-title>
								<v-card-text>
									<span class="subheading">
										{{ $t( "cyber.cyber.a"+(i+1) ) }}
									</span>
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>	
				</v-container>
			</v-card-text>
			<v-card-title class="justify-center pt-5">
				<span class="headline">
					{{ $t( "cyber.types" ) }}
				</span>
			</v-card-title>
			<v-card-text class="pa-1">
				<v-container grid-list-md :class="getClass">
					<v-layout row wrap justify-center>
						<v-flex xs12 v-for="question,i in typeQuestions" :key="i">
							<v-card>
								<v-card-title class="pb-0">
									<span class="title">
										{{ $t( "cyber.type.t"+(i+1) ) }}
									</span>
								</v-card-title>
								<v-card-text>
									<span class="subheading">
										{{ $t( "cyber.type.d"+(i+1) ) }}
									</span>
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
			cyberQuestions: 4,
			typeQuestions: 4,
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
});