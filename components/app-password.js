Vue.component("app-password", {
	template: `
		<v-card flat class="py-5">
			<v-card-title class="justify-center pt-5">
				<span class="headline">
					{{ $t( "password.time" ) }}
				</span>
			</v-card-title>
			<v-card-text>
				<v-layout row wrap>
					<v-flex xs2></v-flex>

					<v-flex xs12 sm8>
						<v-text-field v-model="password" :append-icon="invisible ? 'mdi-eye' : 'mdi-eye-off'" :append-icon-cb="() => (invisible = !invisible)" :type="invisible ? 'password' : 'text'" label="Enter your password"></v-text-field>
					</v-flex>

					<v-flex xs2></v-flex>
					<v-flex xs2></v-flex>

					<v-flex xs12 sm8 v-if="password">
						{{ $t( "password.time" ) }} : {{ time | humanReadable }}*.
						<p class="caption">
							{{ $t("password.hack") }}
						</p>
					</v-flex>
				</v-layout>
			</v-card-text>	
			</v-card>
	`,
	data: () => ({
		invisible: true,
		password: '',
		easyPassword: [
			"123456",
			"12345678",
			"111111",
			"222222",
			"333333",
			"444444",
			"555555",
			"666666",
			"777777",
			"888888",
			"999999",
			"000000",
			"123123",
			"1234567890",

			"password",
			"qwerty",
			"password1",
			"abc123",
			"1qaz2wsx",
		]
	}),
	computed: {
		time: function () {
			if (this.easyPassword.includes(this.password)) {
				return 0;
			}

			var score = new Score(this.password);
			var entropy = score.calculateBruteForceEntropy();
			var time = score.calculateAverageTimeToCrack(entropy, 25000);

			return time;
		}
	},
	filters: {
		humanReadable: function (time) {
			if (time.toFixed().includes("e"))
				return this.i18n.t("password.infinity");

			if (time < 60)
				return parseInt(time) + " " + this.i18n.t("password.seconds");

			time = parseInt(time / 60);

			if (time < 60)
				return time + " " + this.i18n.t("password.minutes");

			time = parseInt(time / 60);

			if (time < 24)
				return time + " " + this.i18n.t("password.hours");

			time = parseInt(time / 24);

			if (time < 7)
				return time + " " + this.i18n.t("password.days");

			if (time < 30) {
				return parseInt(time / 7) + " " + this.i18n.t("password.weeks");
			}

			time = parseInt(time / 30);

			if (time < 12)
				return time + " " + this.i18n.t("password.months");

			time = parseInt(time / 12);

			return time + " " + this.i18n.t("password.years");
		}
	}
});