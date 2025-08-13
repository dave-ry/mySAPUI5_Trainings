/*global QUnit*/

sap.ui.define([
	"my/sapui5/act1/training/act1simpleform/controller/Act1View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Act1View Controller");

	QUnit.test("I should test the Act1View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
