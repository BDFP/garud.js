Garud.Router = function (routes, parentNodeSelector, basePath) {
    this.Routes = routes;
    this.ParentNode =  document.querySelector(parentNodeSelector);
    this.basePath = basePath;

    var self = this;
    for(var routePath of Object.keys(routes)) {
		console.log('Setting up route for ', routePath);
		self.setUpRoute(routePath);
	}
	page();
};

Garud.Router.prototype.setUpRoute = function(routePath) {
	var self = this;
	page(self.basePath + routePath, function () {
		self.handleRoute(routePath);
	})

	if (self.Routes[routePath].default &&
		self.Routes[routePath].default === true) {
		page(self.basePath, function () {
			page.redirect(self.basePath + routePath)
		});
	}
};

Garud.Router.prototype.handleRoute = function (routePath) {
	var self = this;

	//change the active indicator
	Garud.Util.changeActive(routePath, self.Routes);

	//get the template from server cache it and render it
	if (!this.Routes[routePath].template) {
		axios.get(this.basePath + this.Routes[routePath].templateUrl)
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

Garud.Router.prototype.renderHTML = function (routePath) {
	this.ParentNode.innerHTML = this.Routes[routePath].template;
}
