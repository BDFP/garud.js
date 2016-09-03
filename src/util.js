Garud.Util = {
	changeActive: function (newPath, routes) {
		for(var route of Object.keys(routes)) {
			Garud.Util.removeClass('active',
				document.querySelectorAll(routes[route].activeSelector));
		}

		Garud.Util.addClass('active',
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
};
