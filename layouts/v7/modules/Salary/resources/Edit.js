/*+***********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 *************************************************************************************/

Vtiger_Edit_Js("Salary_Edit_Js",{},{
    
     hidefields : function() {
        var deducationdate2 =  $('#Salary_editView_fieldName_deduction_date2').val();
       if(deducationdate2 == ""){
        $('#Salary_editView_fieldName_deduction_date2').closest('tr').hide();
        $('#Salary_editView_fieldName_deduction_reason2').closest('tr').hide();
       } else{
        $('#Salary_editView_fieldName_deduction_date2').closest('tr').show();
        $('#Salary_editView_fieldName_deduction_reason2').closest('tr').show();
       }
       var deducationdate3 =  $('#Salary_editView_fieldName_deduction_date3').val();
       if(deducationdate3 == ""){
        $('#Salary_editView_fieldName_deduction_date3').closest('tr').hide();
        $('#Salary_editView_fieldName_deduction_reason3').closest('tr').hide();
       } else {
        $('#Salary_editView_fieldName_deduction_date3').closest('tr').show();
        $('#Salary_editView_fieldName_deduction_reason3').closest('tr').show();  
       }
       var deducationdate4 =  $('#Salary_editView_fieldName_deduction_date4').val();
       if(deducationdate4 == ""){
        $('#Salary_editView_fieldName_deduction_date4').closest('tr').hide();
        $('#Salary_editView_fieldName_deduction_reason4').closest('tr').hide();
       } else {
        $('#Salary_editView_fieldName_deduction_date4').closest('tr').show();
        $('#Salary_editView_fieldName_deduction_reason4').closest('tr').show();   
       }
       var deducationdate5 =  $('#Salary_editView_fieldName_deduction_date5').val();
       if(deducationdate5 == ""){
         $('#Salary_editView_fieldName_deduction_date5').closest('tr').hide();
         $('#Salary_editView_fieldName_deduction_reason5').closest('tr').hide();
       } else {
         $('#Salary_editView_fieldName_deduction_date5').closest('tr').show();
         $('#Salary_editView_fieldName_deduction_reason5').closest('tr').show();
       }
       var deducationdate6 =  $('#Salary_editView_fieldName_deduction_date6').val();
       if(deducationdate6 == ""){
          $('#Salary_editView_fieldName_deduction_date6').closest('tr').hide();
          $('#Salary_editView_fieldName_deduction_reason6').closest('tr').hide();  
       } else {
          $('#Salary_editView_fieldName_deduction_date6').closest('tr').show();
          $('#Salary_editView_fieldName_deduction_reason6').closest('tr').show();  
       }
       var deducationdate7 =  $('#Salary_editView_fieldName_deduction_date7').val();
       if(deducationdate7 == ""){
           $('#Salary_editView_fieldName_deduction_date7').closest('tr').hide();
           $('#Salary_editView_fieldName_deduction_reason7').closest('tr').hide();
       } else {
           $('#Salary_editView_fieldName_deduction_date7').closest('tr').show();
           $('#Salary_editView_fieldName_deduction_reason7').closest('tr').show();
       }
       var deducationdate8 =  $('#Salary_editView_fieldName_deduction_date8').val();
       if(deducationdate8 == ""){
           $('#Salary_editView_fieldName_deduction_date8').closest('tr').hide();
           $('#Salary_editView_fieldName_deduction_reason8').closest('tr').hide();
       } else {
           $('#Salary_editView_fieldName_deduction_date8').closest('tr').show();
           $('#Salary_editView_fieldName_deduction_reason8').closest('tr').show();
       }
       var deducationdate9 =  $('#Salary_editView_fieldName_deduction_date9').val();
        if(deducationdate9 == ""){
           $('#Salary_editView_fieldName_deduction_date9').closest('tr').hide();
           $('#Salary_editView_fieldName_deduction_reason9').closest('tr').hide();
        } else {
           $('#Salary_editView_fieldName_deduction_date9').closest('tr').show();
           $('#Salary_editView_fieldName_deduction_reason9').closest('tr').show(); 
        }
      var deducationdate10 =  $('#Salary_editView_fieldName_deduction_date10').val();    
       if(deducationdate10 == ""){
           $('#Salary_editView_fieldName_deduction_date10').closest('tr').hide();
           $('#Salary_editView_fieldName_deduction_reason10').closest('tr').hide();
       } else {
           $('#Salary_editView_fieldName_deduction_date10').closest('tr').show();
           $('#Salary_editView_fieldName_deduction_reason10').closest('tr').show();
       }
       var deducationdate11 =  $('#Salary_editView_fieldName_deduction_date11').val();    
        if(deducationdate11 == ""){
            $('#Salary_editView_fieldName_deduction_date11').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason11').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date11').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason11').closest('tr').show();
        }
       var deducationdate12 =  $('#Salary_editView_fieldName_deduction_date12').val(); 
          if(deducationdate12 == ""){
               $('#Salary_editView_fieldName_deduction_date12').closest('tr').hide();
               $('#Salary_editView_fieldName_deduction_reason12').closest('tr').hide();
          } else {
               $('#Salary_editView_fieldName_deduction_date12').closest('tr').show();
               $('#Salary_editView_fieldName_deduction_reason12').closest('tr').show();
          }
        var deducationdate13 =  $('#Salary_editView_fieldName_deduction_date13').val(); 
          if(deducationdate13 == ""){
              $('#Salary_editView_fieldName_deduction_date13').closest('tr').hide();
              $('#Salary_editView_fieldName_deduction_reason13').closest('tr').hide();
          } else {
              $('#Salary_editView_fieldName_deduction_date13').closest('tr').show();
              $('#Salary_editView_fieldName_deduction_reason13').closest('tr').show();
          }
          
        var deducationdate14 =  $('#Salary_editView_fieldName_deduction_date14').val(); 
        if(deducationdate14 == ""){
             $('#Salary_editView_fieldName_deduction_date14').closest('tr').hide();
             $('#Salary_editView_fieldName_deduction_reason14').closest('tr').hide();
        } else {
             $('#Salary_editView_fieldName_deduction_date14').closest('tr').show();
             $('#Salary_editView_fieldName_deduction_reason14').closest('tr').show();
        }
        var deducationdate15 =  $('#Salary_editView_fieldName_deduction_date15').val(); 
        if(deducationdate15 == ""){
            $('#Salary_editView_fieldName_deduction_date15').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason15').closest('tr').hide();
        } else {
             $('#Salary_editView_fieldName_deduction_date15').closest('tr').show();
             $('#Salary_editView_fieldName_deduction_reason15').closest('tr').show();
        }
        var deducationdate16 =  $('#Salary_editView_fieldName_deduction_date16').val(); 
        if(deducationdate16 == ""){
            $('#Salary_editView_fieldName_deduction_date16').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason16').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date16').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason16').closest('tr').show();
        }
        var deducationdate17 =  $('#Salary_editView_fieldName_deduction_date17').val(); 
        if(deducationdate17 == ""){
            $('#Salary_editView_fieldName_deduction_date17').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason17').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date17').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason17').closest('tr').show();
        }
         var deducationdate18 =  $('#Salary_editView_fieldName_deduction_date18').val(); 
        if(deducationdate18 == ""){
            $('#Salary_editView_fieldName_deduction_date18').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason18').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date18').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason18').closest('tr').show();
        }
        var deducationdate19 =  $('#Salary_editView_fieldName_deduction_date19').val(); 
        if(deducationdate19 == ""){
            $('#Salary_editView_fieldName_deduction_date19').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason19').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date19').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason19').closest('tr').show();
        }
        var deducationdate20 =  $('#Salary_editView_fieldName_deduction_date20').val(); 
        if(deducationdate20 == ""){
            $('#Salary_editView_fieldName_deduction_date20').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason20').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date20').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason20').closest('tr').show();
        }
         var deducationdate21 =  $('#Salary_editView_fieldName_deduction_date21').val(); 
        if(deducationdate21 == ""){
            $('#Salary_editView_fieldName_deduction_date21').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason21').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date21').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason21').closest('tr').show();
        }
         var deducationdate22 =  $('#Salary_editView_fieldName_deduction_date22').val(); 
        if(deducationdate22 == ""){
            $('#Salary_editView_fieldName_deduction_date22').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason22').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date22').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason22').closest('tr').show();
        }
        var deducationdate23 =  $('#Salary_editView_fieldName_deduction_date23').val(); 
        if(deducationdate23 == ""){
            $('#Salary_editView_fieldName_deduction_date23').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason23').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date23').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason23').closest('tr').show();
        }
        var deducationdate24 =  $('#Salary_editView_fieldName_deduction_date24').val(); 
        if(deducationdate24 == ""){
            $('#Salary_editView_fieldName_deduction_date24').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason24').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date24').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason24').closest('tr').show();
        }
        var deducationdate25 =  $('#Salary_editView_fieldName_deduction_date25').val(); 
        if(deducationdate25 == ""){
            $('#Salary_editView_fieldName_deduction_date25').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason25').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date25').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason25').closest('tr').show();
        }
        var deducationdate26 =  $('#Salary_editView_fieldName_deduction_date26').val(); 
        if(deducationdate26 == ""){
            $('#Salary_editView_fieldName_deduction_date26').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason26').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date26').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason26').closest('tr').show();
        }
        
        var deducationdate27 =  $('#Salary_editView_fieldName_deduction_date27').val(); 
        if(deducationdate27 == ""){
            $('#Salary_editView_fieldName_deduction_date27').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason27').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date27').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason27').closest('tr').show();
        }
        var deducationdate28 =  $('#Salary_editView_fieldName_deduction_date28').val(); 
        if(deducationdate28 == ""){
            $('#Salary_editView_fieldName_deduction_date28').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason28').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date28').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason28').closest('tr').show();
        }
        var deducationdate29 =  $('#Salary_editView_fieldName_deduction_date29').val(); 
        if(deducationdate29 == ""){
            $('#Salary_editView_fieldName_deduction_date29').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason29').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date29').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason29').closest('tr').show();
        }
        var deducationdate30 =  $('#Salary_editView_fieldName_deduction_date30').val(); 
        if(deducationdate30 == ""){
            $('#Salary_editView_fieldName_deduction_date30').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason30').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date30').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason30').closest('tr').show();
        }
        var deducationdate31 =  $('#Salary_editView_fieldName_deduction_date31').val(); 
        if(deducationdate31 == ""){
            $('#Salary_editView_fieldName_deduction_date31').closest('tr').hide();
            $('#Salary_editView_fieldName_deduction_reason31').closest('tr').hide();
        } else {
            $('#Salary_editView_fieldName_deduction_date31').closest('tr').show();
            $('#Salary_editView_fieldName_deduction_reason31').closest('tr').show();
        }
      
      $("button").on('click', function(){
         var buttontype = this.id;
         var selectedid = $(this).closest(".fieldValue").find('input').attr('id');
               
               if(buttontype == "adddates"){
                   if(selectedid == "Salary_editView_fieldName_deduction_date1"){              
                       $('#Salary_editView_fieldName_deduction_date2').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason2').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date2"){
                       $('#Salary_editView_fieldName_deduction_date3').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason3').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date3"){
                       $('#Salary_editView_fieldName_deduction_date4').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason4').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date4"){
                       $('#Salary_editView_fieldName_deduction_date5').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason5').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date5"){
                       $('#Salary_editView_fieldName_deduction_date6').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason6').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date6"){
                       $('#Salary_editView_fieldName_deduction_date7').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason7').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date7"){
                       $('#Salary_editView_fieldName_deduction_date8').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason8').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date8"){
                       $('#Salary_editView_fieldName_deduction_date9').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason9').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date9"){
                       $('#Salary_editView_fieldName_deduction_date10').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason10').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date10"){
                       $('#Salary_editView_fieldName_deduction_date11').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason11').closest('tr').show();
                   }
                     if(selectedid == "Salary_editView_fieldName_deduction_date11"){              
                       $('#Salary_editView_fieldName_deduction_date12').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason12').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date12"){
                       $('#Salary_editView_fieldName_deduction_date13').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason13').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date13"){
                       $('#Salary_editView_fieldName_deduction_date14').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason14').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date14"){
                       $('#Salary_editView_fieldName_deduction_date15').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason15').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date15"){
                       $('#Salary_editView_fieldName_deduction_date16').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason16').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date16"){
                       $('#Salary_editView_fieldName_deduction_date17').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason17').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date17"){
                       $('#Salary_editView_fieldName_deduction_date18').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason18').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date18"){
                       $('#Salary_editView_fieldName_deduction_date19').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason19').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date19"){
                       $('#Salary_editView_fieldName_deduction_date20').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason20').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date20"){
                       $('#Salary_editView_fieldName_deduction_date21').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason21').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date21"){              
                       $('#Salary_editView_fieldName_deduction_date22').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason22').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date22"){
                       $('#Salary_editView_fieldName_deduction_date23').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason23').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date23"){
                       $('#Salary_editView_fieldName_deduction_date24').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason24').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date24"){
                       $('#Salary_editView_fieldName_deduction_date25').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason25').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date25"){
                       $('#Salary_editView_fieldName_deduction_date26').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason26').closest('tr').show();
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date26"){
                       $('#Salary_editView_fieldName_deduction_date27').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason27').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date27"){
                       $('#Salary_editView_fieldName_deduction_date28').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason28').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date28"){
                       $('#Salary_editView_fieldName_deduction_date29').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason29').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date29"){
                       $('#Salary_editView_fieldName_deduction_date30').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason30').closest('tr').show();
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date30"){
                       $('#Salary_editView_fieldName_deduction_date31').closest('tr').show();
                       $('#Salary_editView_fieldName_deduction_reason31').closest('tr').show();
                   }
               }
               
               if(buttontype == "hidedates"){
                   if(selectedid == "Salary_editView_fieldName_deduction_date2"){
                      $('#Salary_editView_fieldName_deduction_date2').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason2').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date3"){
                      $('#Salary_editView_fieldName_deduction_date3').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason3').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date4"){
                      $('#Salary_editView_fieldName_deduction_date4').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason4').closest('tr').hide(); 
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date5"){
                      $('#Salary_editView_fieldName_deduction_date5').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason5').closest('tr').hide(); 
                   }
                   
                    if(selectedid == "Salary_editView_fieldName_deduction_date6"){
                      $('#Salary_editView_fieldName_deduction_date6').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason6').closest('tr').hide(); 
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date7"){
                      $('#Salary_editView_fieldName_deduction_date7').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason7').closest('tr').hide(); 
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date8"){
                      $('#Salary_editView_fieldName_deduction_date8').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason8').closest('tr').hide(); 
                   }
                    if(selectedid == "Salary_editView_fieldName_deduction_date9"){
                      $('#Salary_editView_fieldName_deduction_date9').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason9').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date10"){
                      $('#Salary_editView_fieldName_deduction_date10').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason10').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date10"){
                      $('#Salary_editView_fieldName_deduction_date10').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason10').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date11"){
                      $('#Salary_editView_fieldName_deduction_date11').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason11').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date12"){
                      $('#Salary_editView_fieldName_deduction_date12').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason12').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date13"){
                      $('#Salary_editView_fieldName_deduction_date13').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason13').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date14"){
                      $('#Salary_editView_fieldName_deduction_date14').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason14').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date15"){
                      $('#Salary_editView_fieldName_deduction_date15').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason15').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date16"){
                      $('#Salary_editView_fieldName_deduction_date16').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason16').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date17"){
                      $('#Salary_editView_fieldName_deduction_date17').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason17').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date18"){
                      $('#Salary_editView_fieldName_deduction_date18').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason18').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date19"){
                      $('#Salary_editView_fieldName_deduction_date19').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason19').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date20"){
                      $('#Salary_editView_fieldName_deduction_date20').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason20').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date21"){
                      $('#Salary_editView_fieldName_deduction_date21').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason21').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date22"){
                      $('#Salary_editView_fieldName_deduction_date22').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason22').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date23"){
                      $('#Salary_editView_fieldName_deduction_date23').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason23').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date24"){
                      $('#Salary_editView_fieldName_deduction_date24').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason24').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date25"){
                      $('#Salary_editView_fieldName_deduction_date25').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason25').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date26"){
                      $('#Salary_editView_fieldName_deduction_date26').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason26').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date27"){
                      $('#Salary_editView_fieldName_deduction_date27').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason27').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date28"){
                      $('#Salary_editView_fieldName_deduction_date28').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason28').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date29"){
                      $('#Salary_editView_fieldName_deduction_date29').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason29').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date30"){
                      $('#Salary_editView_fieldName_deduction_date30').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason30').closest('tr').hide(); 
                   }
                   if(selectedid == "Salary_editView_fieldName_deduction_date31"){
                      $('#Salary_editView_fieldName_deduction_date31').closest('tr').hide();
                      $('#Salary_editView_fieldName_deduction_reason31').closest('tr').hide(); 
                   }
                   
                   
                   
               }
     });
     
  },
    registerEvents: function(){
        this._super();
        this.hidefields();
		
    }

});
