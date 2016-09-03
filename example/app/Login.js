(function () {
	var loginValidations = {
		'#email': [ Garud.Util.checkNotNull ],
		'#password': [ Garud.Util.checkNotNull ]
	}

	// array or object' if array then domelement o/w object
	// route post location
	// successCb
	// errorCb
	// var doLogin = Garud.HTTP.Post(
	// 	['#email', '#password'],
	// 	'/login',
	// 	function (response) {
	// 		//key, value
	// 		Garud.Data.saveToMemory('loginData', response);
	//
	// 		//targetLocation
	// 		Garud.transit('/home');
	// 	},
	// 	function (reason) {
	// 		//string reason
	// 		Garud.Util.ShowError(reason);
	// 	}
	// );
	//
	// var Login = new GarudComponent();
	//
	// //querySelector, validationObject, actionFunc
	// Login.onClick('#login-btn', loginValidations, doLogin)
})();
