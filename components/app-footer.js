Vue.component("app-footer", {
    template: `
        <v-footer :color="color" dark>
                <v-spacer></v-spacer>

                Copyrights CyberMedia
                
                <v-spacer></v-spacer>
        </v-footer>
    `,
    props: {
        color: {
            default: "blue"
        }
    }
})