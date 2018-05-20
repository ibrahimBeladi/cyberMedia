Vue.component("app-hero-section", {
    template: `
        <v-parallax src="./res/imgs/parallax.jpg" :height="parallaxHeight">
            <v-carousel delimiter-icon="mdi-stop" interval="7000" hide-controls>
                <v-carousel-item v-for="(item,i) in 2" :key="i">
                    <v-layout fill-height class="ma-0">
                        <v-container class="pa-0" style="min-width: 100%; background-color: rgba(0,0,0,0.8);">
                            <v-container>
                                <v-card dark flat style="background-color: rgba(0,0,0,0);">
                                    <v-card-text class="pa-0 text-xs-center">
                                        <span :class="quoteSize">
                                            "{{ $t("message.quote"+(i+1)) }}"
                                        </span>
                                        <span :class="quoterSize" v-html="$t('message.quoter')"></span>
                                    </v-card-text>
                                </v-card>
                            </v-container>
                        </v-container>
                    </v-layout>
                </v-carousel-item>
            </v-carousel>
        </v-parallax>
    `,
    computed: {
        parallaxHeight: function () {
            switch (this.$vuetify.breakpoint.name) {
                case "xs": return "300";
                case "sm": return "350";
                case "md": return "400";
                case "lg": return "500";
                case "xl": return "500";
            }
        },
        quoteSize: function(){
            switch (this.$vuetify.breakpoint.name) {
                case "xs": return "heading larger";
                case "sm": return "display-1";
                case "md": return "display-2";
                case "lg": return "display-3";
                case "xl": return "display-3";
            }
        },
        quoterSize: function(){
            switch (this.$vuetify.breakpoint.name) {
                case "xs": return "subheading";
                case "sm": return "heading";
                case "md": return "display-1";
                case "lg": return "display-1";
                case "xl": return "display-1";
            }
        }
    }
});