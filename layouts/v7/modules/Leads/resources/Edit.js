/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Vtiger_Edit_Js("Leads_Edit_Js", {}, {

    registerEventsForNameField: function () {
        $(document).on('Vtiger.PostReference.Selection', function (e, data) {

            if (e.target.name == 'productid') {
                var carid = $('input[name="productid"]').val();
                if (carid) {
                    var progressIndicatorElement = jQuery.progressIndicator();
                    var url = 'index.php?module=Leads&source_module=Products&action=GetData&record=' + carid;
                    AppConnector.request(url).then(
                            function (data) {
                                progressIndicatorElement.progressIndicator({'mode': 'hide'});
                                if (data) {
                                    data = data.result.data;
                                    $('input[name=price]').val(data.unit_price);
                                }
                            }
                    );
                }

            }

        });
    },

      registerEvents: function () {
        var container = this.getForm();
        this._super();
        this.registerEventsForNameField();
    }

});
