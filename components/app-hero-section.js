Vue.component("app-hero-section", {
	template: `
	<div>
        <v-parallax :src="parallax" height="500">
            <v-carousel delimiter-icon="mdi-stop" interval="7000" hide-controls>
                <v-carousel-item v-for="(item,i) in 2" :key="i">
                    <v-layout fill-height class="ma-0">
                        <v-container class="pa-0" style="min-width: 100%; background-color: rgba(0,0,0,0.8);">
                            <v-container>
                                <v-card dark flat style="background-color: rgba(0,0,0,0);">
                                    <v-card-text class="pa-0 text-xs-center">
                                        <span class="display-3">
                                            "{{ $t("message.quote"+(i+1)) }}"
                                        </span>
                                        <span class="display-1" v-html="$t('message.quoter')"></span>
                                    </v-card-text>
                                </v-card>
                            </v-container>
                        </v-container>
                    </v-layout>
                </v-carousel-item>
            </v-carousel>
        </v-parallax>
    </div>
	`,
	data: function () {
		return {
			parallax: "https://www.accenture.com/t20161212T205430Z__w__/us-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Global/Dualpub_93/Accenture-Supply-Chain-Cybersecurity-Marquee.jpg"
		}
	},
});