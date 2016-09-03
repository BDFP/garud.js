var Garud = function () {
	//Default values
	this.Routes = {};
	this.ParentNodeSelector	= "#roo";
};

Garud.prototype.Start = function() {
	this.ParentNode = document.querySelector(this.ParentNodeSelector);
	this.setUpRouter();
};

Garud.prototype.setUpRouter = function () {
	var self = this;
	for(var routePath of Object.keys(self.Routes)) {
		console.log('Setting up route for ', routePath);
		self.setUpRoute(routePath);
	}
	page();
}

Garud.prototype.setUpRoute = function(routePath) {
	var self = this;
	page(routePath, function () {
		self.handleRoute(routePath);
	})

	if (self.Routes[routePath].default && 
		self.Routes[routePath].default === true) {
		page('/', function () {
			page.redirect(routePath)
		});
	}
};

Garud.prototype.handleRoute = function (routePath) {
	var self = this;

	//change the active indicator
	Util.changeActive(routePath, self.Routes);

	//get the template from server cache it and render it
	if (!this.Routes[routePath].template) {
		axios.get(this.Routes[routePath].templateUrl)
			.then(function (response) {
				self.Routes[routePath].template = response.data;
				self.renderHTML(routePath);
			})
			.catch(function (reason) {
				console.log('Could not get sth', reason);
			})
	} else {
		self.renderHTML(routePath);
	}

}

Garud.prototype.renderHTML = function (routePath) {
	this.ParentNode.innerHTML = this.Routes[routePath].template;	
}


var Util = {
	changeActive: function (newPath, routes) {
		for(var route of Object.keys(routes)) {
			Util.removeClass('active',
				document.querySelectorAll(routes[route].activeSelector));
		}

		Util.addClass('active',
			document.querySelectorAll(routes[newPath].activeSelector));
	},
	addClass: function (className, nodeList) {
		for(var node of nodeList) {
			node.classList.add(className);
		}
	},
	removeClass: function (className, nodeList) {
		for(var node of nodeList) {
			node.classList.remove(className);
		}
	}
}

var GarudComponent = function () {};

GarudComponent.prototype.onClick = function(querySelector) {
	document.querySelector(querySelector)
		.addEventListener('click', )
};
