(function () {
	console.log('App will start');

	var routes = {
		'/home': {
			default: true,
			templateUrl: '/templates/home.html',
			activeSelector: '.home-nav-link'
		},
		'/about': {
			templateUrl: '/templates/about.html',
			activeSelector: '.about-nav-link'
		},
		'/contact': {
			templateUrl: '/templates/contact.html',
			activeSelector: '.contact-nav-link'
		},
		'/login': {
			//component: Login,
			templateUrl: '/templates/login.html',
			activeSelector: '.login-nav-link'
		}
	}

	var myApp = new Garud();
	var Router = new Garud.Router(routes, '#root', '/example');
	myApp.Start();
})();
