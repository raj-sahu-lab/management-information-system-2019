
Vtiger_Edit_Js("Employees_Edit_Js",{
   
},{
	duplicateCheckCache : {},
	
	editViewForm : false,
   
	getForm : function(){
		if(this.editViewForm == false) {
			this.editViewForm = jQuery('#EditView');
		}
		return this.editViewForm;
	},
        
	getEmail : function(container){
		return jQuery('input[name="email"]',container).val();
	},
        
	getRecordId : function(container){
		return jQuery('input[name="record"]',container).val();
	},
       
	registerRecordPreSaveEvent : function(form) {
		
		var thisInstance = this;
		
		form = this.getForm();
		
		app.event.on(Vtiger_Edit_Js.recordPresaveEvent, function(e, data) {
			
			var email = thisInstance.getEmail(form);
			
			var recordId = thisInstance.getRecordId(form);
			
			var params = {};
			
            if(!(email in thisInstance.duplicateCheckCache)) {
            	
            	thisInstance.checkDuplicateEmail({
                    'email' : email, 
                    'recordId' : recordId,
                    'moduleName' : 'Employees'
                }).then(
            		function(data){
                        thisInstance.duplicateCheckCache[email] = data['success'];
                        form.submit();
                    },
                    function(data, err){
                        thisInstance.duplicateCheckCache[email] = data['success'];
                        thisInstance.duplicateCheckCache['message'] = data['message'];
						Vtiger_Helper_Js.showPnotify("Email already exist");
                    }
				);
            } else {
				if(thisInstance.duplicateCheckCache[email] == true){
					var message = app.vtranslate('JS_DUPLICTAE_CREATION_CONFIRMATION');
					Vtiger_Helper_Js.showPnotify("Email already exist");
				} else {
					delete thisInstance.duplicateCheckCache[email];
					return true;
				}
			}
            e.preventDefault();
		})
	},
	
	checkDuplicateEmail : function(details) {
		var email = details.email;
		var recordId = details.recordId;
		var aDeferred = jQuery.Deferred();
		var moduleName = details.moduleName;
		if(typeof moduleName == "undefined"){
			moduleName = app.getModuleName();
		}
		var params = {
		'module' : moduleName,
		'action' : "CheckDuplicate",
		'email' : email,
		'record' : recordId
		}
		AppConnector.request(params).then(
			function(data) {
				var response = data['result'];
				var result = response['success'];
				if(result == true) {
					aDeferred.reject(response);
				} else {
					aDeferred.resolve(response);
				}
			},
			function(error,err){
				aDeferred.reject();
			}
		);
		return aDeferred.promise();
	},

	registerBasicEvents : function(container) {
		this._super(container);
		this.registerRecordPreSaveEvent(container);
		
	}
});
