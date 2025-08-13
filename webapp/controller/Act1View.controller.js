sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("my.sapui5.act1.training.act1simpleform.controller.Act1View", {
        onInit() {
        },

        onSave: function(){
            alert("Data is saved successfully.");
        },

        onClear: function(){
            // Get Form View
            var oForm = this.getView().byId("simpleForm");
            // Point for form content
            var oContent = oForm.getContent();
            {
                // Loop at each field in the form, then set the value to null/space
                oContent.forEach( function(oControl){
                    if(oControl instanceof sap.m.Input || oControl instanceof sap.m.Select)
                {
                    oControl.setValue("");
                }
                })    
            }
        }
    });
});