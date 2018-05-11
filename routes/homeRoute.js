var homeRoute = {
	template: `
	<div>
		<v-parallax :src="parallax" dark>
			<v-container fill-height>
				<v-layout align-center>
					<v-flex text-xs-center>
						<h3 class="display-3">
							{{ $t("message.toBe") }}
						</h3>
					</v-flex>
				</v-layout>
			</v-container>
		</v-parallax>
		
		<v-container fill-height grid-list-xl>
			<v-layout align-center>
				<v-flex text-xs-center>
					<h3 class="display-3">
						{{ $t("team.team") }}
					</h3>
					<v-layout row wrap justify-center>
						<v-flex xs6 md4 v-for="p in team" :key="p.name">
							<v-card>
								<v-card-media src="../res/imgs/hacker.jpg" height="250px" contain></v-card-media>
								<v-card-text>
									{{ $t("team."+p.name) }}
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
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
			],
			parallax: "https://www.accenture.com//www.accenture.com/t20161212T205430Z__w__/us-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Global/Dualpub_93/Accenture-Supply-Chain-Cybersecurity-Marquee.jpg"
		}
	}
}