var routes = [
	{ path: '/', name: 'Base', component: homeRoute },
	{ path: '/home', name: 'Home', component: homeRoute },
	{ path: '/media', name: 'Media', component: mediaRoute },
];

var router = new VueRouter({ routes });