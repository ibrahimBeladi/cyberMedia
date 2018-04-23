Vue.component("app-toolbar", {
	template: `
		<v-toolbar :color="color" dense app dark>
			<v-toolbar-items>
				<v-btn to="home" flat>CyberMedia</v-btn>
			</v-toolbar-items>

			<v-spacer></v-spacer>

			<v-toolbar-items>
				<template v-for="link in links">
					<v-btn flat :to="link.to">{{ link.title }}</v-btn>
				</template>
			</v-toolbar-items>
		</v-toolbar>
	`,
	data: () => ({
		links: [
			{ to: "p1", title: "Link One" },
			{ to: "p2", title: "Link Two" },
			{ to: "p3", title: "Link Three" },
			{ to: "p4", title: "Link Four" }
		]
	}),
	props: {
		color: {
			type: String,
			default: "blue"
		}
	}
});