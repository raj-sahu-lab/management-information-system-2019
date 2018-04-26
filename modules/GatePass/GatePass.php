<?php
include_once 'modules/Vtiger/CRMEntity.php';

class GatePass extends Vtiger_CRMEntity {
        var $table_name = 'vtiger_gatepass';
        var $table_index= 'gatepassid';

        var $customFieldTable = Array('vtiger_gatepasscf', 'gatepassid');

        var $tab_name = Array('vtiger_crmentity', 'vtiger_gatepass', 'vtiger_gatepasscf');

        var $tab_name_index = Array(
                'vtiger_crmentity' => 'crmid',
                'vtiger_gatepass' => 'gatepassid',
                'vtiger_gatepasscf'=>'gatepassid');

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

        var $default_order_by = 'summary';
        var $default_sort_order='ASC';
}
