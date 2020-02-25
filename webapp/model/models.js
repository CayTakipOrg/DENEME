sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";
	return {
		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		 init : function () {
  // call the init function of the parent
  Device.prototype.init.apply(this, arguments);
  // create the views based on the url/hash
  this.getRouter().initialize();
  }
  };
	
});
