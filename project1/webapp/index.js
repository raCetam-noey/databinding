sap.ui.require([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel"
], function (XMLView, JSONModel) {
    "use strict";

    sap.ui.getCore().attachInit(function () {

        var oModel = new JSONModel({
            firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			panelHeaderText: "Data Binding Basics"
        });

        sap.ui.getCore().setModel(oModel);

        new XMLView({
			viewName: "project1.view.View1"
		}).placeAt("content");
    });
});


