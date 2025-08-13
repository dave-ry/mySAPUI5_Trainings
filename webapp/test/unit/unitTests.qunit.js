/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"my/sapui5/act1/training/act1simpleform/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
