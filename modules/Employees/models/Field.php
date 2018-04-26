<?php

class Employees_Field_Model extends Vtiger_Field_Model {


	public function getFieldDataType() {
		if($this->get('uitype') == 98){
			return 'picklist';
		}
        return parent::getFieldDataType();
    }
	
	public function getPicklistValues() {
		if($this->get('uitype') == 98) {
			return $this->getAllRoles();
		}
		return parent::getPicklistValues();
	}
	
	
	
     public function getAllRoles(){
        $roleModels = Settings_Roles_Record_Model::getAll();
		$roles = array();
		foreach ($roleModels as $roleId=>$roleModel) {
			$roleName = $roleModel->getName();
			$roles[$roleId] = $roleName;
		}
		return $roles;
    }

	
}
