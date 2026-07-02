# SnapList Test Plan

## Overview
This document outlines the testing procedures for verifying all SnapList functionality.

## Test Environment
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Local server or direct file access
- Internet connection (for initial load only)

## Test Cases

### 1. Core Functionality
- [ ] Add items to both To-Do and Shopping lists
- [ ] Mark items as complete
- [ ] Edit item text
- [ ] Delete items
- [ ] Switch between tabs
- [ ] Clear all items
- [ ] Verify data persistence after page refresh

### 2. Priority System
- [ ] Add items with different priority levels
- [ ] Verify visual indicators (borders and badges)
- [ ] Test priority sorting
- [ ] Verify priority saved after refresh

### 3. Due Dates
- [ ] Add items with due dates
- [ ] Verify due date display
- [ ] Check overdue indicators
- [ ] Test due date sorting
- [ ] Verify due dates saved after refresh

### 4. Categories and Tags
- [ ] Create categories
- [ ] Assign categories to items
- [ ] Add tags to items
- [ ] Test category filtering
- [ ] Test tag filtering
- [ ] Verify categories and tags saved after refresh

### 5. Task Steps
- [ ] Add steps to items
- [ ] Mark steps as complete
- [ ] Edit step text
- [ ] Delete steps
- [ ] Verify progress indicators
- [ ] Verify steps saved after refresh

### 6. Sorting
- [ ] Test all sorting options
- [ ] Test ascending/descending order
- [ ] Verify sort preferences saved
- [ ] Test sort reset functionality

### 7. Search and Filter
- [ ] Test text search
- [ ] Test category filtering
- [ ] Test tag filtering
- [ ] Test clear filters
- [ ] Verify search works with all features

### 8. Export/Import
- [ ] Export data as JSON
- [ ] Export data as CSV
- [ ] Import JSON data
- [ ] Import CSV data
- [ ] Verify imported data matches original
- [ ] Test importing test_data.json file

### 9. Theme Switching
- [ ] Switch to dark theme
- [ ] Switch to light theme
- [ ] Verify theme preference saved

### 10. Responsive Design
- [ ] Test on mobile viewport
- [ ] Test on tablet viewport
- [ ] Test on desktop viewport
- [ ] Verify all functionality works on all sizes

## Testing Instructions

### Manual Testing
1. Open the application in your browser
2. Perform each test case above
3. Mark completed tests with [x]
4. Note any issues or bugs

### Data Persistence Test
1. Add several items with various features
2. Refresh the page
3. Verify all data is still present
4. Verify all features are intact

### Export/Import Test
1. Add test data to both lists
2. Export as JSON
3. Clear all data
4. Import the JSON file
5. Verify data is restored correctly

### Cross-Feature Test
1. Create an item with all features:
   - Priority
   - Due date
   - Category
   - Tags
   - Steps
2. Test sorting with this complex item
3. Test filtering with this complex item
4. Test search with this complex item
5. Export and import this complex item
6. Verify all features persist through all operations

## Expected Results
All test cases should pass with no errors or unexpected behavior.

## Troubleshooting
If any test fails:
1. Note the specific failure
2. Check browser console for errors
3. Verify all files are properly linked
4. Ensure browser supports required features