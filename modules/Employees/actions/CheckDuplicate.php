<?php

class Employees_CheckDuplicate_Action extends Vtiger_Action_Controller {
	
	function checkPermission(Vtiger_Request $request) {
		return;
	}

	public function process(Vtiger_Request $request) {
		
		$moduleName = $request->getModule();
		
		$email = $request->get('email');
		
		$record = $request->get('record');

		if ($record) {
			$recordModel = Vtiger_Record_Model::getInstanceById($record, $moduleName);
		} else {
			$recordModel = Vtiger_Record_Model::getCleanInstance($moduleName);
		}

		$recordModel->set('email', $email);

		if (!$recordModel->checkDuplicateEmail()) {
			$result = array('success'=>false);
		} else {
			$result = array('success'=>true, 'message'=>vtranslate('LBL_DUPLICATES_EXIST', $moduleName));
		}
		
		$response = new Vtiger_Response();
		$response->setResult($result);
		$response->emit();
	}
}
