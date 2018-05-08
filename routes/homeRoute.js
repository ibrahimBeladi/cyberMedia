var homeRoute = {
	template: `
	<div>
		<v-jumbotron src="../res/parallax.jpg" dark>
			<v-container fill-height>
				<v-layout align-center>
					<v-flex text-xs-center>
						<h3 class="display-3">
							{{ $t("message.toBe") }}
						</h3>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>
		
		<v-container fill-height grid-list-xl>
			<v-layout align-center>
				<v-flex text-xs-center>
					<h3 class="display-3">
						{{ $t("message.team") }}
					</h3>
					<v-layout row wrap justify-center>
						<v-flex xs6 md4>
							<v-card>
								<v-card-media src="../res/imgs/hacker.jpg" height="250px" contain></v-card-media>
								<v-card-text>
									{{ $t("message.ibra") }}
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex xs6 md4 v-for="i in 4" :key="i">
							<v-card>
								<v-card-media src="../res/imgs/hacker.jpg" height="250px" contain></v-card-media>
								<v-card-text>
									{{ $t("message.hacker") }}
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
	`
}