var router = new VueRouter({
	routes: [
		{ path: '/', name: 'Base', component: homeRoute },
		{ path: '/home', name: 'Home', component: homeRoute },
		{ path: '/media', name: 'Media', component: mediaRoute },
		{ path: '/team', name: 'Team', component: teamRoute },
	],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
});