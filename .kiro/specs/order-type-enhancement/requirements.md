# Requirements Document: Order Type Enhancement

## Introduction

This feature enhances the existing order system to distinguish between two types of orders: **Custom Orders** (bespoke, made-to-order items) and **Ready-Made Orders** (standard products from inventory). The system will provide clear differentiation, tracking, and management capabilities for both order types, enabling better customer experience and business analytics.

## Requirements

### Requirement 1: Order Type Classification

**User Story:** As a system administrator, I want all orders to be automatically classified as either "Custom" or "Ready-Made", so that I can manage and track different order workflows efficiently.

#### Acceptance Criteria

1. WHEN a customer purchases a standard product from the catalog THEN the system SHALL create an order with Order Type = "Ready-Made"
2. WHEN a customer submits a custom order request THEN the system SHALL create an order with Order Type = "Custom"
3. WHEN viewing any order in the admin dashboard THEN the system SHALL display the Order Type prominently with a visual badge
4. IF an order contains both custom and ready-made items THEN the system SHALL classify it as "Mixed" Order Type
5. WHEN an order is created THEN the Order Type field SHALL be immutable (cannot be changed after creation)

---

### Requirement 2: Custom Order Request Form

**User Story:** As a customer, I want to submit a custom crochet order with my specific requirements, so that I can get a personalized product made just for me.

#### Acceptance Criteria

1. WHEN a customer navigates to the custom order page THEN the system SHALL display a comprehensive custom order form
2. WHEN filling the form THEN the system SHALL require the following fields:
   - Name (text input, required)
   - Email (email input, required)
   - Phone (text input, required)
   - Location (text input or dropdown, required)
   - Colour selection (dropdown or color picker, required)
   - Size specification (text input or predefined sizes, required)
   - Pattern Type (dropdown with available patterns, required)
   - Quantity (number input, required, min: 1)
   - Style or Theme (text input, optional)
3. WHEN submitting the form THEN the system SHALL allow customers to upload reference images (max 5 images, 5MB each)
4. WHEN submitting the form THEN the system SHALL allow customers to provide URL links to reference patterns available on the website
5. WHEN all required fields are completed THEN the system SHALL enable the submit button
6. WHEN the form is submitted successfully THEN the system SHALL display a confirmation message with order number
7. WHEN the form is submitted THEN the system SHALL automatically tag the order with Order Type = "Custom"
8. WHEN the form is submitted THEN the system SHALL send email notification to both admin and customer

---

### Requirement 3: Admin Notification System

**User Story:** As an administrator, I want to receive instant notifications when a new custom order is submitted, so that I can respond quickly to customer requests.

#### Acceptance Criteria

1. WHEN a custom order is submitted THEN the system SHALL send an email notification to the admin email address
2. WHEN a custom order is submitted THEN the system SHALL send a confirmation email to the customer with order details
3. WHEN a custom order is submitted THEN the system SHALL display an in-app notification in the admin dashboard
4. WHEN viewing the notification THEN it SHALL include: order number, customer name, email, phone, location, and brief summary of specifications
5. WHEN clicking the notification THEN the system SHALL navigate to the order details page
6. IF multiple custom orders are submitted THEN the system SHALL queue notifications and display them in chronological order

---

### Requirement 4: Order Dashboard Enhancements

**User Story:** As an administrator, I want to filter and view orders by type, so that I can manage custom and ready-made orders separately.

#### Acceptance Criteria

1. WHEN viewing the Orders Dashboard THEN the system SHALL display an "Order Type" column showing badges (🧷 Custom, 🧵 Ready-Made, or 🔀 Mixed)
2. WHEN viewing the Orders Dashboard THEN the system SHALL provide a filter dropdown with options: "All", "Custom Orders", "Ready-Made Orders", "Mixed Orders"
3. WHEN selecting a filter THEN the system SHALL display only orders matching the selected type
4. WHEN viewing order rows THEN custom orders SHALL have a distinct visual indicator (badge or icon)
5. WHEN sorting orders THEN the system SHALL allow sorting by Order Type
6. WHEN exporting orders THEN the system SHALL include the Order Type field in the export

---

### Requirement 5: Custom Order Status Workflow

**User Story:** As an administrator, I want to track custom orders through specific production stages, so that customers know the progress of their bespoke items.

#### Acceptance Criteria

1. WHEN a custom order is created THEN the system SHALL set initial status to "Pending Review"
2. WHEN viewing a custom order THEN the system SHALL display available status options:
   - Pending Review
   - Quote Sent
   - Approved
   - In Production
   - Completed
   - Delivered
   - Cancelled
3. WHEN updating order status THEN the system SHALL record timestamp and admin user who made the change
4. WHEN status changes to "Quote Sent" THEN the system SHALL send email notification to customer
5. WHEN status changes to "In Production" THEN the system SHALL allow admin to upload progress photos
6. WHEN status changes to "Completed" or "Delivered" THEN the system SHALL update inventory if applicable

---

### Requirement 6: Order Details View Enhancement

**User Story:** As an administrator, I want to see all custom order specifications in the order details view, so that I can fulfill the order accurately.

#### Acceptance Criteria

1. WHEN viewing a custom order details page THEN the system SHALL display a "Custom Order" badge at the top
2. WHEN viewing custom order details THEN the system SHALL show all customer information and specifications:
   - Customer Name
   - Email
   - Phone
   - Location
   - Colour
   - Size
   - Pattern Type
   - Quantity
   - Style/Theme
3. WHEN reference images were uploaded THEN the system SHALL display them in a gallery view
4. WHEN reference URLs were provided THEN the system SHALL display them as clickable links to website patterns
5. WHEN viewing order timeline THEN the system SHALL show all status changes with timestamps
6. WHEN viewing a ready-made order THEN the system SHALL display standard product information

---

### Requirement 7: Analytics and Reporting

**User Story:** As a business owner, I want to see analytics comparing custom orders vs ready-made orders, so that I can make informed business decisions.

#### Acceptance Criteria

1. WHEN viewing the admin dashboard THEN the system SHALL display a widget showing percentage of custom vs ready-made orders
2. WHEN viewing analytics THEN the system SHALL show:
   - Total custom orders (count and revenue)
   - Total ready-made orders (count and revenue)
   - Average order value for each type
   - Conversion rate for custom order requests
3. WHEN generating reports THEN the system SHALL allow filtering by Order Type
4. WHEN viewing sales charts THEN the system SHALL provide option to separate custom and ready-made data
5. WHEN exporting analytics THEN the system SHALL include Order Type breakdown

---

### Requirement 8: Customer Order History

**User Story:** As a customer, I want to view my past orders and see which were custom vs ready-made, so that I can easily reorder or reference previous purchases.

#### Acceptance Criteria

1. WHEN viewing order history THEN the system SHALL display Order Type badge for each order
2. WHEN viewing a custom order in history THEN the system SHALL show all original specifications
3. WHEN viewing order details THEN the system SHALL display current status
4. WHEN a custom order is in production THEN the system SHALL show progress photos if available
5. WHEN clicking "Reorder" on a custom order THEN the system SHALL pre-fill the custom order form with previous specifications

---

### Requirement 9: Product Linking for Custom Orders

**User Story:** As an administrator, I want to link custom orders to existing products or product types, so that I can track which products are most requested for customization.

#### Acceptance Criteria

1. WHEN creating/viewing a custom order THEN the system SHALL allow linking to a base product or product type
2. WHEN a custom order is linked to a product THEN the system SHALL display the product reference in order details
3. WHEN viewing product analytics THEN the system SHALL show how many custom orders were based on that product
4. WHEN a customer selects "Customize This" on a product page THEN the system SHALL pre-fill relevant fields in the custom order form
5. IF a custom order is not linked to any product THEN the system SHALL categorize it as "Fully Custom"

---

### Requirement 10: Pricing and Quotes for Custom Orders

**User Story:** As an administrator, I want to provide price quotes for custom orders before production begins, so that customers can approve the cost.

#### Acceptance Criteria

1. WHEN a custom order is in "Pending Review" status THEN the system SHALL allow admin to enter a quoted price
2. WHEN a quote is entered THEN the system SHALL send email to customer with quote details
3. WHEN customer receives quote THEN they SHALL have option to approve or decline
4. WHEN customer approves quote THEN the system SHALL update status to "Approved" and process payment
5. WHEN customer declines quote THEN the system SHALL update status to "Cancelled" and send confirmation
6. WHEN viewing custom order THEN the system SHALL display: estimated price, quoted price, and final price (if different)

---

## Priority

**High Priority** - This feature is essential for differentiating the business's custom crochet services from standard product sales and improving operational efficiency.

## Success Criteria

- 100% of orders are correctly classified as Custom, Ready-Made, or Mixed
- Custom order form has <5% abandonment rate
- Admin receives notifications within 1 minute of custom order submission
- Custom order processing time is tracked and visible to customers
- Analytics dashboard provides clear insights into order type distribution
- Customer satisfaction with custom order process is >90%
