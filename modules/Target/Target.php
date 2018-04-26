<?php
include_once 'modules/Vtiger/CRMEntity.php';

class Target extends Vtiger_CRMEntity {
        var $table_name = 'vtiger_target';
        var $table_index= 'targetid';

        var $customFieldTable = Array('vtiger_targetcf', 'targetid');

        var $tab_name = Array('vtiger_crmentity', 'vtiger_target', 'vtiger_targetcf');

        var $tab_name_index = Array(
                'vtiger_crmentity' => 'crmid',
                'vtiger_target' => 'targetid',
                'vtiger_targetcf'=>'targetid');

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
