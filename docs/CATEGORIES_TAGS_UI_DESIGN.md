# Categories and Tags UI Design for SnapList

## Overview
This document provides visual design specifications for the categories and tags system in SnapList, including UI elements, color schemes, and layout considerations.

## Color Scheme

### Category Colors
Default category color palette:
- **Work**: Blue - #2196f3
- **Personal**: Green - #4caf50
- **Health**: Red - #f44336
- **Home**: Orange - #ff9800
- **Shopping**: Purple - #9c27b0
- **Finance**: Teal - #009688
- **Learning**: Indigo - #3f51b5

### Tag Colors
- Tags use a consistent light background with dark text
- Background: rgba(66, 133, 244, 0.1) for light mode
- Background: rgba(33, 150, 243, 0.2) for dark mode
- Text: #2196f3 for light mode, #42a5f5 for dark mode

### Supporting Colors
- Category management section background
- Filter controls background
- Consistent with existing UI theme

## UI Elements

### 1. Category Management Section

#### Desktop View
```
+-----------------------------------------------------+
| Categories                                          |
|                                                     |
| [Work ●] [Home ●] [Personal ●]            [+ Add]   |
|                                                     |
| +-------------------------------------------------+ |
| | Edit Category                                   | |
| | Name: [Work     ]                               | |
| | Color: [■■■■■■■■] [Color Picker]                | |
| | [Save] [Cancel] [Delete]                        | |
| +-------------------------------------------------+ |
+-----------------------------------------------------+
```

#### Mobile View
```
+-----------------------------+
| Categories                  |
|                             |
| [Work ●] [Home ●]          |
| [Personal ●]        [+ Add] |
|                             |
| +-------------------------+ |
| | Edit Category           | |
| | Name: [Work     ]       | |
| | Color: [■■■■■■■■]       | |
| | [Color Picker]          | |
| | [Save] [Cancel] [Delete]| |
| +-------------------------+ |
+-----------------------------+
```

#### Category Display Details
- Shape: Rounded rectangle
- Padding: 6px 12px
- Margin: 4px
- Font: 0.9rem, medium weight
- Color dot: 12px circle, left of category name
- Hover effect: Slight background change

### 2. Tag Management

#### Tag Input (Add/Edit Item Form)
```
+-----------------------------------------------------+
| Tags: [meeting, project ________________] [Add Tag] |
+-----------------------------------------------------+
```

#### Tag Display (Item View)
```
+-----------------------------------------------------+
| Tags: [meeting] [project] [urgent]                  |
+-----------------------------------------------------+
```

#### Tag Design
- Shape: Rounded rectangle
- Padding: 4px 8px
- Margin: 2px
- Font: 0.8rem, regular weight
- Background: rgba(66, 133, 244, 0.1)
- Text: #2196f4
- Hover effect: Slight darkening of background

### 3. Category and Tag Assignment (Add/Edit Form)

#### Desktop Layout
```
+-----------------------------------------------------+
| [High ▼] [Task Description Input]                   |
| Due: [Select Date ▼]                                |
| Category: [Select Category ▼]                       |
| Tags: [tag1, tag2 _______] [Add Tag]                |
|                                             [Add]   |
+-----------------------------------------------------+
```

#### Mobile Layout
```
+-----------------------------+
| [High ▼]                    |
| [Task Description Input]    |
| Due: [Select Date ▼]        |
| Category: [Select Category ▼]|
| Tags: [tag1, tag2 _______]  |
| [Add Tag]                   |
| [Add]                       |
+-----------------------------+
```

### 4. Filtering System

#### Filter Controls
```
+-----------------------------------------------------+
| Filter by:                                          |
| Category: [All Categories ▼]  Tags: [_________]     |
| [Clear Filters]                                    |
+-----------------------------------------------------+
```

#### Active Filters Display
```
+-----------------------------------------------------+
| Active Filters:                                     |
| Category: Work [×]  Tags: meeting [×] project [×]   |
| [Clear All Filters]                                |
+-----------------------------------------------------+
```

## Layout Considerations

### Desktop Layout with Categories and Tags
```
+---------------------------------------------------------------+
| 🔍  SnapList                                      ☀/🌙       |
|                                                               |
| [📝 To-Do] [🛒 Cart]                                          |
|                                                               |
| Categories                                                    |
| [Work ●] [Home ●] [Personal ●]                      [+ Add]   |
|                                                               |
| Filter by:                                                    |
| Category: [All Categories ▼]  Tags: [_________]               |
| [Clear Filters]                                              |
|                                                               |
| +-----------------------------------------------------------+ |
| | [High ▼] [Add new item...]                        [Add]   | |
| | Due: [Select Date ▼]                                    | |
| | Category: [Work ▼]                                      | |
| | Tags: [_________] [Add Tag]                             | |
| +-----------------------------------------------------------+ |
|                                                               |
| +-----------------------------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Prepare presentation]                           [!!!] ■| |
| |■  Oct 26, 2025, 15:30                                     ■| |
| |■  Due: Nov 5, 2025                                        ■| |
| |■  Category: Work ●  Tags: meeting, project                ■| |
| |■  [Steps: 0/0]                                            ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                                               |
| Total: 3    Completed: 0                                      |
|                                                               |
| [Clear All]                                                   |
+---------------------------------------------------------------+
```

### Mobile Layout with Categories and Tags
```
+-----------------------------------------+
| 🔍  SnapList               ☀/🌙        |
|                                         |
| [📝 To-Do] [🛒 Cart]                   |
|                                         |
| Categories                              |
| [Work ●] [Home ●] [Personal ●] [+ Add] |
|                                         |
| Filter by:                              |
| Category: [All Categories ▼]            |
| Tags: [_________]                       |
| [Clear Filters]                        |
|                                         |
| [High ▼]                                |
| [Add new item...]                       |
| Due: [Select Date ▼]                    |
| Category: [Work ▼]                      |
| Tags: [_________]                       |
| [Add Tag]                               |
| [Add]                                   |
|                                         |
| +-------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Prepare presentation]      [!!!] ■| |
| |■ Oct 26, 2025, 15:30                ■| |
| |■ Due: Nov 5, 2025                   ■| |
| |■ Category: Work ●                   ■| |
| |■ Tags: meeting, project            ■| |
| |■ [Steps: 0/0]                       ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                         |
| Total: 3    Completed: 0                |
|                                         |
| [Clear All]                             |
+-----------------------------------------+
```

## Dark Mode Adaptations

### Category Colors
Same colors as light mode but with adjusted contrast for dark backgrounds

### Tag Colors
- Background: rgba(33, 150, 243, 0.2)
- Text: #42a5f5

### Supporting Elements
- Category management section background: #333
- Filter controls background: #333

## Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### Adjustments
1. **Category Management**:
   - Desktop: Horizontal layout with scrollable categories
   - Mobile: Wrapped layout with multiple rows

2. **Tag Input**:
   - Desktop: Inline with other form elements
   - Mobile: Stacked below other form elements

3. **Filtering Controls**:
   - Desktop: Single row with both controls
   - Mobile: Stacked controls

## Accessibility Considerations

### Color Contrast
- Category text to background: ≥ 4.5:1
- Tag text to background: ≥ 4.5:1
- Color dots to background: ≥ 3:1

### Keyboard Navigation
- Category management accessible via Tab key
- Tag input accessible via Tab key
- Enter key to add tags
- Arrow keys to navigate category list

### Screen Reader Support
- Category management section labeled appropriately
- Tag input and display with descriptive text
- ARIA attributes for interactive elements
- Proper heading structure

## Implementation Notes

### CSS Classes
```css
/* Category Management */
.categories-section {
  margin-bottom: 15px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.category-item {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.category-item:hover {
  opacity: 0.8;
}

.category-color-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
}

/* Category Edit Form */
.category-edit-form {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

body.dark .category-edit-form {
  background: #333;
}

/* Tags */
.tag-input-container {
  display: flex;
  gap: 5px;
  margin-top: 5px;
}

.tag-input {
  flex: 1;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  outline: none;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}

.tag-item {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  background-color: rgba(66, 133, 244, 0.1);
  color: #2196f4;
}

.tag-item:hover {
  background-color: rgba(66, 133, 244, 0.2);
}

.tag-remove {
  margin-left: 4px;
  cursor: pointer;
  font-weight: bold;
}

/* Filtering */
.filter-section {
  margin-bottom: 15px;
}

.filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.filter-label {
  font-weight: 500;
  margin-right: 5px;
}

.filter-select, .filter-input {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: white;
  color: #333;
}

body.dark .filter-select, 
body.dark .filter-input {
  background: #3b3b3b;
  border-color: #555;
  color: #eaeaea;
}

.clear-filters {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.clear-filters:hover {
  background: #ff0000;
}
```

### HTML Structure
```html
<!-- Category Management -->
<div class="categories-section">
  <h3>Categories</h3>
  <div class="category-list">
    <div class="category-item" data-category-id="work">
      <span class="category-color-dot" style="background-color: #2196f3;"></span>
      Work
    </div>
    <!-- More categories -->
    <button class="add-category-btn">+ Add</button>
  </div>
  
  <!-- Category Edit Form (when editing) -->
  <div class="category-edit-form">
    <input type="text" id="categoryName" placeholder="Category name" />
    <input type="color" id="categoryColor" value="#2196f3" />
    <button id="saveCategory">Save</button>
    <button id="cancelCategory">Cancel</button>
    <button id="deleteCategory">Delete</button>
  </div>
</div>

<!-- Filtering Controls -->
<div class="filter-section">
  <div class="filter-controls">
    <span class="filter-label">Filter by:</span>
    <select class="filter-select" id="categoryFilter">
      <option value="">All Categories</option>
      <option value="work">Work</option>
      <!-- More options -->
    </select>
    <input type="text" class="filter-input" id="tagFilter" placeholder="Filter by tags..." />
    <button class="clear-filters" id="clearFilters">Clear Filters</button>
  </div>
</div>

<!-- Tag Input in Add/Edit Form -->
<div class="tag-input-container">
  <input type="text" class="tag-input" id="tagInput" placeholder="Add tags..." />
  <button id="addTagBtn">Add Tag</button>
</div>

<!-- Tag Display in Item -->
<div class="tag-list">
  <span class="tag-item">
    meeting
    <span class="tag-remove">×</span>
  </span>
  <!-- More tags -->
</div>
```

### JavaScript Implementation Considerations
```javascript
// Category management functions
function createCategory(name, color) { /* ... */ }
function editCategory(id, name, color) { /* ... */ }
function deleteCategory(id) { /* ... */ }

// Tag management functions
function addTagToItem(itemId, tag) { /* ... */ }
function removeTagFromItem(itemId, tag) { /* ... */ }
function getTagSuggestions(input) { /* ... */ }

// Filtering functions
function filterByCategory(categoryId) { /* ... */ }
function filterByTag(tag) { /* ... */ }
function applyCombinedFilters() { /* ... */ }
function clearFilters() { /* ... */ }
```

## Future Enhancements

1. **Drag and Drop Categories**: Reorder categories with drag and drop
2. **Tag Cloud**: Visual representation of tag frequency
3. **Category Statistics**: Charts showing category usage
4. **Bulk Tagging**: Apply tags to multiple items at once
5. **Tag Color Customization**: Custom colors for specific tags