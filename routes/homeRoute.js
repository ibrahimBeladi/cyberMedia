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
	</div>
	`,
	data: function () {
		return {
			parallax: "https://www.accenture.com//www.accenture.com/t20161212T205430Z__w__/us-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Global/Dualpub_93/Accenture-Supply-Chain-Cybersecurity-Marquee.jpg"
		}
	},
}