# Management Information System (MIS)

> **Built:** 2017–2018 · VTiger CRM 7.x · PHP · MySQL
>
> This project was built in 2017–2018 as a customised CRM/MIS for an automotive business. The base platform is VTiger CRM 7.x (vtiger CRM Public License); the original work by Raj Sahu consists of 6 custom vtlib modules built on VTiger's CRMEntity framework. See the Architecture section below for the full breakdown of what is custom vs. stock VTiger.

A fully configured VTiger CRM 7.x deployment customized for comprehensive business management — CRM, sales, inventory, projects, HR, and helpdesk operations.

## Deployed: 2018

## Tech Stack

- **Backend:** PHP 5.x+
- **Database:** MySQL/PostgreSQL (via ADODB abstraction)
- **Template Engine:** Smarty
- **Frontend:** Bootstrap, jQuery, custom layouts
- **PDF Generation:** TCPDF
- **Excel/Spreadsheet:** PHPExcel
- **API:** REST/SOAP Web Services layer

## Modules (61 total)

### CRM Core
- Accounts, Contacts, Leads, Potentials, Campaigns

### Sales & Inventory
- Sales Orders, Quotes, Purchase Orders, Invoices, Products

### Projects
- Project Management, Milestones, Tasks

### HR & Operations
- Employees, Salary Management, Target Tracking

### Support
- Help Desk, Service Contracts, Services

### Communication
- Email Management, Calendar, Email Templates, Mail Manager

### Advanced Features
- **Workflow Engine** — Business process automation
- **Custom Fields** — Per-module extensibility
- **Reports** — Advanced SQL-based query builder with dependency matrices
- **Import/Export** — Multi-format data handling
- **Mobile Module** — Dedicated mobile interface
- **PBX Integration** — VoIP/telephony
- **Multi-language** — 17 language packs
- **Audit Logging** — ModTracker for all changes

## Architecture

This project is built on **VTiger CRM 7.x** (vtiger CRM Public License). The custom development by Raj Sahu consists of **6 original vtlib modules** added to extend the VTiger base:

- **Employees** — HR employee management with salary and deductions tracking
- **GatePass** — Vehicle gate-pass management (chassis no., invoice no., vehicle reg.)
- **Salary** — Salary/deduction records linked to the Employees module
- **Payment** — Payment recording linked to CRM contacts
- **ServiceTarget** — Service target tracking
- **Target** — Packaged vtlib module export

All other modules (55+) are standard VTiger CRM 7.x modules. VTiger copyright notices are retained throughout per the vtiger CRM Public License.

## Directory Structure

```
├── modules/        — 61 business logic modules
├── layouts/        — UI templates (v7 modern + vlayout classic)
├── libraries/      — Third-party (ADODB, Bootstrap, TCPDF, PHPExcel, Google API)
├── include/        — Shared utilities, DB layer, Web Services
├── languages/      — 17 language packs
├── resources/      — Client-side assets
├── vtlib/          — Module framework tools
├── migrate/        — Schema migrations (5.4 → 7.0.1)
├── cron/           — Scheduled tasks
└── kcfinder/       — File manager
```

## Setup

1. Create MySQL database
2. Deploy to PHP server (Apache/Nginx)
3. Run the web installer at `/index.php` to configure:
   - Database connection
   - Admin credentials
   - Company details
4. Access CRM at the configured URL

## Key Technical Features

- **Database Abstraction** — ADODB layer supports MySQL and PostgreSQL
- **Module Architecture** — CRMEntity inheritance pattern for all business objects
- **Role-Based Security** — User privileges, sharing rules, row-level security
- **API Layer** — Full REST/SOAP web services for integrations
- **Extension Store** — Marketplace-ready module packaging (vtlib)

## Note

Deployed as a complete CRM/MIS solution for business operations. The system evolved through multiple versions (5.4 → 6.0 → 7.0 → 7.0.1) and includes extensive customization for inventory, HR, and project management workflows.

---

© 2018 Raj Sahu
