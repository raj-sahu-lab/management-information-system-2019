<?php
/* +***********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 * *********************************************************************************** */
include_once 'include/Webservices/Revise.php';
include_once 'include/Webservices/Retrieve.php';

class PaymentHandler extends VTEventHandler {

    function handleEvent($eventName, $entityData) {

        $moduleName = $entityData->getModuleName();
//
//        // Validate the event target
//        if ($moduleName != 'Invoice') {
//            return;
//        }

        //Get Current User Information
        global $current_user, $currentModule;

        /**
         * Adjust the balance amount against total & received amount
         * NOTE: beforesave the total amount will not be populated in event data.
         */
        if ($eventName == 'vtiger.entity.aftersave') {
            
             if($currentModule == "Contacts"){
                 global $adb;
                 $sql ="select * from vtiger_role where rolename=?";
                 $res = $adb->pquery($sql,array("Finance Manager"));
                 $roleid = $adb->query_result($res,0,'roleid');
                 $usersql = "select * from vtiger_user2role where roleid = ?";
                 $userres = $adb->pquery($usersql,array($roleid));
                 $userid = $adb->query_result($userres,0,'userid');
 
                  if($userid > 0){
                  $assigned = $userid;
                   } else {
                  $assigned = 1;
                   }
                 
                 $Index = 0;
                 $dates = array("due_date1","due_date2","due_date3","due_date4","due_date5","due_date6","due_date7","due_date8","due_date9","due_date10");
                  foreach($dates as $date){
                        $Index++;
                      $entityDelta = new VTEntityDelta();
                      $oldduedate = $entityDelta->getOldValue($entityData->getModuleName(), $entityData->getId(), $date);
                      $newduedate = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$date);
                      $assignedTo = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),'assigned_user_id');
                      
                      $paymentmode = "payment_mode".''.$Index;
                      $installment = "installment".''.$Index;
                      $payment_status = "payment_status".''.$Index;
                      $bankname = "bankname".''.$Index;
                      $bankaccountno = "bankaccountno".''.$Index;
                      $ifcscode = "ifcs_code".''.$Index;
                      $payment_type = "payment_type".''.$Index;
                      $check_ddno = "check_ddno".''.$Index;
                      $duedate = "due_date".''.$Index;
                      $installment = "installment".''.$Index;
                      $pending = "Pending";
                      if($oldduedate == "" && $newduedate !=""){
                          
                          $focus = CRMEntity::getInstance('Payment');
				$focus->mode = '';
				$focus->column_fields['amount'] = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$installment);
				$focus->column_fields['assigned_user_id'] = $assigned;
				$focus->column_fields['due_date'] = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$duedate);
                                $focus->column_fields['parentid'] =$entityData->getId();
                                $focus->column_fields['bank_name'] = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$bankname);
                                $focus->column_fields['bank_account_no'] = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$bankaccountno);
                                $focus->column_fields['ifsc_code'] = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$ifcscode);
                                $focus->column_fields['dd_no'] = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$check_ddno);
                                $focus->column_fields['payment_mode'] = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$paymentmode);
                                 $focus->column_fields['payment_type'] = $entityDelta->getCurrentValue($entityData->getModuleName(), $entityData->getId(),$payment_type);
                                $focus->column_fields['payment_status'] = "Pending";
                   		$focus->save('Payment');
                         
                          
                      }
                      
                      
                  }
            

             }

        }
    }

}

?>

