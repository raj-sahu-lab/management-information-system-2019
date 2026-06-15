<?php
include_once 'modules/Vtiger/CRMEntity.php';

class Employees extends Vtiger_CRMEntity {
	
	var $table_name = 'vtiger_employees';
	var $table_index= 'employeesid';

	var $customFieldTable = Array('vtiger_employeescf', 'employeesid');

	var $tab_name = Array('vtiger_crmentity', 'vtiger_employees', 'vtiger_employeescf');

	var $tab_name_index = Array(
			'vtiger_crmentity' => 'crmid',
			'vtiger_employees' => 'employeesid',
			'vtiger_employeescf'=>'employeesid');

	var $list_fields = Array (
			'Assigned To' => Array('crmentity','smownerid')
	);
	var $list_fields_name = Array (
			'Assigned To' => 'assigned_user_id',
	);

	// Make the field link to detail view
	var $list_link_field = '';

	// For Popup listview and UI type support
	var $search_fields = Array(
			'Assigned To' => Array('vtiger_crmentity','assigned_user_id'),
	);
	var $search_fields_name = Array (
			'Assigned To' => 'assigned_user_id',
	);

	// For Popup window record selection
	var $popup_fields = Array ('');

	// For Alphabetical search
	var $def_basicsearch_col = '';

	// Column value to use on detail view record text display
	var $def_detailview_recname = '';

	// Used when enabling/disabling the mandatory fields for the module.
	// Refers to vtiger_field.fieldname values.
	var $mandatory_fields = Array('assigned_user_id');

	var $default_order_by = '';
	var $default_sort_order='ASC';
        
	function save_module($module) {
		
		global $adb;
//		
//		if($this->column_fields['userid'] == '') 
//			$related_user = 0;
//		else
//			$related_user = $this->column_fields['userid'];
//			
//		$query = 'select * from vtiger_users where id = ?';
//		$result = $adb->pquery($query, array($related_user));
//		$focus = CRMEntity::getInstance('Users');
//		
//		if($adb->num_rows($result) > 0) {
//			$focus->retrieve_entity_info($related_user,'Users');
//			$focus->column_fields['email1'] = $this->column_fields['email'];
//			$focus->column_fields['first_name'] = $this->column_fields['first_name'];
//			$focus->column_fields['last_name'] = $this->column_fields['last_name'];
//			$focus->column_fields['phone_work'] = $this->column_fields['phone'];
//			$focus->column_fields['address_street'] = $this->column_fields['street'];
//			$focus->column_fields['address_country'] = $this->column_fields['country'];
//			$focus->column_fields['address_city'] = $this->column_fields['city'];
//			$focus->column_fields['address_postalcode'] = $this->column_fields['postalcode'];
//			$focus->column_fields['address_state'] = $this->column_fields['state'];
//			
//			$focus->mode = 'edit';
//			$focus->id = $related_user;
//			$focus->save('Users');
//		} else {
//			$focus->column_fields['user_name'] = $this->column_fields['email'];
//			$focus->column_fields['email1'] = $this->column_fields['email'];
//			$focus->column_fields['first_name'] = $this->column_fields['first_name'];
//			$focus->column_fields['last_name'] = $this->column_fields['last_name'];
//			$focus->column_fields['roleid'] = $this->column_fields['roleid'];
//			$focus->column_fields['address_street'] = $this->column_fields['street'];
//			$focus->column_fields['address_country'] = $this->column_fields['country'];
//			$focus->column_fields['address_city'] = $this->column_fields['city'];
//			$focus->column_fields['address_postalcode'] = $this->column_fields['postalcode'];
//			$focus->column_fields['address_state'] = $this->column_fields['state'];
//			
//			$focus->mode = 'create';
//			$focus->id = '';
//			$focus->save('Users');
//			
//			$adb->pquery('update vtiger_employees set userid = ? where employeesid = ?',array($focus->id,$this->id));
//		}
	}
	
	
	
	function get_salary($id, $cur_tab_id, $rel_tab_id, $actions = false) {
		global $currentModule, $app_strings, $singlepane_view;

		$parenttab = getParentTab();

		$related_module = vtlib_getModuleNameById($rel_tab_id);
		$other = CRMEntity::getInstance($related_module);

		// Some standard module class doesn't have required variables
		// that are used in the query, they are defined in this generic API
		vtlib_setup_modulevars($currentModule, $this);
		vtlib_setup_modulevars($related_module, $other);

		$singular_modname = 'SINGLE_' . $related_module;

		$button = '';
		if ($actions) {
			if (is_string($actions))
				$actions = explode(',', strtoupper($actions));
			if (in_array('SELECT', $actions) && isPermitted($related_module, 4, '') == 'yes') {
				$button .= "<input title='" . getTranslatedString('LBL_SELECT') . " " . getTranslatedString($related_module) . "' class='crmbutton small edit' " .
						" type='button' onclick=\"return window.open('index.php?module=$related_module&return_module=$currentModule&action=Popup&popuptype=detailview&select=enable&form=EditView&form_submit=false&recordid=$id&parenttab=$parenttab','test','width=640,height=602,resizable=0,scrollbars=0');\"" .
						" value='" . getTranslatedString('LBL_SELECT') . " " . getTranslatedString($related_module, $related_module) . "'>&nbsp;";
			}
			if (in_array('ADD', $actions) && isPermitted($related_module, 1, '') == 'yes') {
				$button .= "<input type='hidden' name='createmode' id='createmode' value='link' />" .
						"<input title='" . getTranslatedString('LBL_ADD_NEW') . " " . getTranslatedString($singular_modname) . "' class='crmbutton small create'" .
						" onclick='this.form.action.value=\"EditView\";this.form.module.value=\"$related_module\"' type='submit' name='button'" .
						" value='" . getTranslatedString('LBL_ADD_NEW') . " " . getTranslatedString($singular_modname, $related_module) . "'>&nbsp;";
			}
		}

		// To make the edit or del link actions to return back to same view.
		if ($singlepane_view == 'true')
			$returnset = "&return_module=$currentModule&return_action=DetailView&return_id=$id";
		else
			$returnset = "&return_module=$currentModule&return_action=CallRelatedList&return_id=$id";
		
		$userNameSql = getSqlForNameInDisplayFormat(array('first_name'=>'vtiger_users.first_name', 'last_name' => 'vtiger_users.last_name'), 'Users');
		
		//query for target related list
	
		$query = "select vtiger_salary.*, vtiger_crmentity.crmid, vtiger_crmentity.smownerid,
		case when (vtiger_users.user_name not like '') then $userNameSql else vtiger_groups.groupname end as user_name
		FROM vtiger_salary 
		INNER JOIN vtiger_crmentity on vtiger_crmentity.crmid = vtiger_salary.salaryid 
		LEFT JOIN vtiger_groups	ON vtiger_groups.groupid = vtiger_crmentity.smownerid
		LEFT JOIN vtiger_users ON vtiger_crmentity.smownerid = vtiger_users.id
		WHERE vtiger_crmentity.deleted = 0 AND vtiger_salary.employeeid = " . intval($id);
	
		$return_value = GetRelatedList($currentModule, $related_module, $other, $query, $button, $returnset);
		if ($return_value == null)
			$return_value = Array();
		$return_value['CUSTOM_BUTTON'] = $button;

		return $return_value;
	}
}
