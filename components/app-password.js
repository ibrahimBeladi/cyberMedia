Vue.component("app-password", {
	template: `
		<div>
			<v-card>
				<v-card-title class="justify-center pt-5">
					<span class="headline">
						{{ $t( "password.time" ) }}
					</span>
				</v-card-title>
				<v-card-text>
					<v-layout row wrap>
						<v-flex xs8 offset-xs2>
							<v-text-field v-model="password" :append-icon="invisible ? 'mdi-eye' : 'mdi-eye-off'" :append-icon-cb="() => (invisible = !invisible)" :type="invisible ? 'password' : 'text'" label="Enter your password"></v-text-field>
						</v-flex>
						<v-flex xs8 offset-xs2>
							The password will be cracked in {{ time }}.
						</v-flex>
					</v-layout>
				</v-card-text>	
			</v-card>
		</div>
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
			"password",
			"password1",
			"abc123",
			"qwerty",
		]
	}),
	computed: {
		time: function () {
			if (this.easyPassword.includes(this.password))
				return "no time";

			return "0 seconds";
		}
	}
});