var routes = [
	{ path: '/', name: 'Base', component: homeRoute },
	{ path: '/home', name: 'Home', component: homeRoute },
	{ path: '/p1', name: 'P1', component: p1 },
	{ path: '/p2', name: 'P2', component: p2 },
	{ path: '/p3', name: 'P3', component: p3 },
	{ path: '/p4', name: 'P4', component: p4 },
];

var router = new VueRouter({ routes });