<?php

class Employees_Record_Model extends Vtiger_Record_Model {
	
	public function checkDuplicateEmail() {
		
		$db = PearDatabase::getInstance();
		
		$query = "SELECT * FROM vtiger_employees inner join vtiger_crmentity on 
		crmid  =  employeesid WHERE deleted  = 0 and email = ?";
        
		$params = array($this->get("email")); 

        $record = $this->getId();
        
		if ($record) {
			$query .= " AND employeesid != ?";
			array_push($params, $record);
		}
		
		$result = $db->pquery($query, $params);
		
		if ($db->num_rows($result)) {
			return true;
		}
		
		return false;
	
	}
	
}
