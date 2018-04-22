var homeRoute = {
	template: `
	<div>
		<v-jumbotron src="https://vuetifyjs.com/static/doc-images/parallax/material2.jpg" :gradient="gradient" dark>
			<v-container fill-height>
				<v-layout align-center>
					<v-flex text-xs-center>
						<h3 class="display-3">
							2B || !2B
						</h3>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>
		
		<v-container fill-height grid-list-xl>
			<v-layout align-center>
				<v-flex text-xs-center>
					<h3 class="display-3">
						Team
					</h3>
					<v-layout row wrap justify-center>
						<v-flex xs6 md4 v-for="i in 5">
							<v-card>
								<v-card-media src="../res/imgs/hacker.jpg" height="250px" contain></v-card-media>
								<v-card-text>
									Hacker name
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
	`,
	data: () => ({
		gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
	})
}