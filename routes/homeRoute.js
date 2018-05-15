var homeRoute = {
	template: `
	<div>
		<v-parallax :src="parallax" dark height="500">
			<v-layout column align-center justify-center>
				<v-card dark flat style="background-color: rgba(0,0,0,0.8);">
					<v-card-text class="pa-0 text-xs-center">
						<span class="display-3">
							"{{ $t("message.quote") }}"
						</span>
						<span class="display-1" v-html="$t('message.quoter')"></span>
					</v-card-text>
				</v-card>
			</v-layout>
		</v-parallax>
		<app-password></app-password>
	</div>
	`,
	data: function () {
		return {
			parallax: "https://www.accenture.com/t20161212T205430Z__w__/us-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Global/Dualpub_93/Accenture-Supply-Chain-Cybersecurity-Marquee.jpg"
		}
	},
}