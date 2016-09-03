window.Garud = function () {
	//Default values
	this.Routes = {};
	this.ParentNodeSelector	= "#roo";
};

Garud.prototype.Start = function() {
	this.ParentNode = document.querySelector(this.ParentNodeSelector);
};
