sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	
	//deneme
	
	"use strict";
	return Controller.extend("QuickStartApplication.controller.View1", {
		onInit: function () {},
		onPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");
		}
	});
});