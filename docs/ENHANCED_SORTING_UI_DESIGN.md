# Enhanced Sorting UI Design for SnapList

## Overview
This document provides visual design specifications for the enhanced sorting system in SnapList, including UI elements, color schemes, and layout considerations.

## Color Scheme

### Sorting Controls
- Background: #f5f5f5 for light mode, #333 for dark mode
- Text: #333 for light mode, #eaeaea for dark mode
- Borders: #ccc for light mode, #555 for dark mode
- Active state: #4285f4 (blue) for current selection

### Visual Indicators
- Sort order icons: #666 for light mode, #aaa for dark mode
- Active sort order: #2196f3 (darker blue)
- Reset button: #ff4d4d (red) for visibility

## UI Elements

### 1. Sorting Controls Section

#### Desktop View
```
+-----------------------------------------------------+
| Sort by: [Creation Date ▼] [↑]             [Reset]   |
+-----------------------------------------------------+
```

#### Mobile View
```
+-----------------------------+
| Sort by:                    |
| [Creation Date ▼] [↑]       |
| [Reset]                     |
+-----------------------------+
```

#### Sorting Controls Details
- Container: Full-width section with padding
- Dropdown: Standard select element with custom styling
- Sort Order Toggle: Button with directional arrows
- Reset Button: Secondary button style

### 2. Sorting Options Dropdown

#### Dropdown Menu
```
+-----------------------------------------------------+
| Creation Date                                       |
| Due Date                                            |
| Priority                                            |
| Status                                              |
| Alphabetical                                        |
+-----------------------------------------------------+
```

#### Dropdown Design
- Width: Match dropdown trigger width
- Padding: 8px 12px for options
- Hover effect: Light background change
- Selected option: Bold text or checkmark

### 3. Sort Order Toggle

#### Ascending State
```
[↑] (active/up direction)
```

#### Descending State
```
[↓] (active/down direction)
```

#### Toggle Design
- Size: 30px x 30px
- Icon: Clear arrow indicating direction
- Active state: Colored background
- Inactive state: Subtle border

### 4. Visual Feedback

#### Current Sort Indicator
```
+-----------------------------------------------------+
| Sort by: Due Date [↓]                      [Reset]   |
| (Sorted by due date, descending order)              |
+-----------------------------------------------------+
```

#### Sort Change Animation
- Smooth reordering of list items
- Fade transition for item movements
- Brief highlight of sorted items

## Layout Considerations

### Desktop Layout with Sorting Controls
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
| Sort by: [Creation Date ▼] [↑]                     [Reset]    |
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

### Mobile Layout with Sorting Controls
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
| Sort by:                                |
| [Creation Date ▼] [↑]                   |
| [Reset]                                 |
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

### Sorting Controls
- Background: #333
- Text: #eaeaea
- Borders: #555
- Active state: #4285f4

### Visual Indicators
- Sort order icons: #aaa
- Active sort order: #42a5f5
- Reset button: #ff6666

### Supporting Elements
- Dropdown background: #3b3b3b
- Dropdown hover: #444
- Selected option: #4285f4 with white text

## Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### Adjustments
1. **Sorting Controls**:
   - Desktop: Single row with all controls
   - Mobile: Stacked layout with labels

2. **Dropdown**:
   - Desktop: Standard width
   - Mobile: Full-width dropdown

3. **Sort Order Toggle**:
   - Consistent size across devices
   - Clear visual indication

## Accessibility Considerations

### Color Contrast
- Text to background: ≥ 4.5:1
- Active states: ≥ 3:1
- Icons: ≥ 3:1

### Keyboard Navigation
- Sorting controls accessible via Tab key
- Enter key to open dropdown
- Arrow keys to navigate options
- Spacebar to toggle sort order

### Screen Reader Support
- Sorting section labeled appropriately
- Dropdown with descriptive labels
- Sort order toggle with clear states
- ARIA attributes for interactive elements

## Implementation Notes

### CSS Classes
```css
/* Sorting Section */
.sorting-section {
  margin-bottom: 15px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
}

body.dark .sorting-section {
  background: #333;
}

.sorting-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.sorting-label {
  font-weight: 500;
  margin-right: 5px;
}

.sort-select {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: white;
  color: #333;
  cursor: pointer;
}

body.dark .sort-select {
  background: #3b3b3b;
  border-color: #555;
  color: #eaeaea;
}

.sort-order-toggle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: white;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

body.dark .sort-order-toggle {
  background: #3b3b3b;
  border-color: #555;
  color: #aaa;
}

.sort-order-toggle.active {
  background: #4285f4;
  color: white;
  border-color: #4285f4;
}

body.dark .sort-order-toggle.active {
  background: #42a5f5;
  border-color: #42a5f5;
}

.reset-sort {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.reset-sort:hover {
  background: #ff0000;
}

/* Visual Feedback */
.sort-indicator {
  font-size: 0.8rem;
  color: #666;
  margin-top: 5px;
  font-style: italic;
}

body.dark .sort-indicator {
  color: #aaa;
}
```

### HTML Structure
```html
<!-- Sorting Controls -->
<div class="sorting-section">
  <div class="sorting-controls">
    <span class="sorting-label">Sort by:</span>
    <select class="sort-select" id="sortBy">
      <option value="date">Creation Date</option>
      <option value="dueDate">Due Date</option>
      <option value="priority">Priority</option>
      <option value="status">Status</option>
      <option value="alphabetical">Alphabetical</option>
    </select>
    <button class="sort-order-toggle active" id="sortAsc" title="Ascending">↑</button>
    <button class="sort-order-toggle" id="sortDesc" title="Descending">↓</button>
    <button class="reset-sort" id="resetSort">Reset</button>
  </div>
  <div class="sort-indicator" id="sortIndicator">
    Sorted by creation date, ascending order
  </div>
</div>
```

### JavaScript Implementation Considerations
```javascript
// Sorting functions
function sortItems(items, sortBy, order) { /* ... */ }

// UI update functions
function updateSortIndicator() { /* ... */ }
function toggleSortOrder() { /* ... */ }
function resetSorting() { /* ... */ }

// Event listeners
document.getElementById('sortBy').addEventListener('change', applySorting);
document.getElementById('sortAsc').addEventListener('click', () => setSortOrder('asc'));
document.getElementById('sortDesc').addEventListener('click', () => setSortOrder('desc'));
document.getElementById('resetSort').addEventListener('click', resetSorting);
```

### Animation and Transitions
```css
/* Smooth sorting transitions */
.item-list {
  transition: all 0.3s ease;
}

.item-list li {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Sorting animation class */
.sorting .item-list li {
  transition: all 0.5s ease;
}
```

## Future Enhancements

1. **Multi-level Sorting**: Sort by multiple criteria
2. **Sorting Presets**: Save custom sorting combinations
3. **Keyboard Shortcuts**: Ctrl+1 for date, Ctrl+2 for priority, etc.
4. **Visual Sort Indicators**: Arrows next to sorted column headers
5. **Sort History**: Recently used sorting options