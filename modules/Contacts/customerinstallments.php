<?php
/**
Author: M S Krishna
Company: Automate SMB Enterprises
Email:MSK@Automatesmb.com
**/  

function customerinstallments($entity){
    global $adb;
    $contactid = vtws_getIdComponents($entity->id);
    $contactid = $contactid[1];
    $carid = $entity->get('car_id');
    $carid = explode('x', $carid);
    $carid = $carid[1];
    $remaining_amount = $entity->get('remaining_amount');
    $carcost = $entity->get('car_cost');
    $installment1 = $entity->get('installment1');
    $installment2 = $entity->get('installment2');
    $installment3 = $entity->get('installment3');
    $installment4 = $entity->get('installment4');
    $installment5 = $entity->get('installment5');
    $installment6 = $entity->get('installment6');
    $installment7 = $entity->get('installment7');
    $installment8 = $entity->get('installment8');
    $installment9 = $entity->get('installment9');
    $installment10 = $entity->get('installment10');
    
    $remainingamount = ($carcost - ($installment1 + $installment2 + $installment3 + $installment4 + $installment5 + $installment6 + $installment7 + $installment8 + $installment9 + $installment10));
    $adb->pquery("UPDATE vtiger_contactdetails set remaining_amount = ? WHERE contactid = ?",array($remainingamount,$contactid));       
    
}
