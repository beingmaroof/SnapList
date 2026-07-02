# Due Dates UI Design for SnapList

## Overview
This document provides visual design specifications for the due dates feature in SnapList, including UI elements, color schemes, and layout considerations.

## Color Scheme

### Due Date Status Colors
- **Overdue**: Red - #ff4d4d
- **Due Today**: Orange - #ffa500
- **Future Due Date**: Green - #4caf50
- **No Due Date**: Gray - #9e9e9e

### Supporting Colors
- **Due Date Text**: Dark text for light backgrounds, light text for dark backgrounds
- **Due Date Background**: Light version of status colors with opacity
- **Date Picker**: Consistent with existing form elements

## UI Elements

### 1. Date Picker (Add/Edit Form)

#### Desktop View
```
+-----------------------------------------------------+
| [Priority ▼] [Task Description Input]               |
| Due: [Select Date ▼]                        [Add]   |
+-----------------------------------------------------+
```

#### Mobile View
```
+-----------------------------+
| [Priority ▼]                |
| [Task Description Input]    |
| Due: [Select Date ▼]        |
| [Add Button]                |
+-----------------------------+
```

#### Date Picker Details
- Type: HTML5 date input (with fallback for older browsers)
- Default: No date selected (empty)
- Placeholder: "Select due date" (when empty)
- Width: Adaptive (30% of container on desktop, full width on mobile)
- Format: YYYY-MM-DD (ISO format for storage)

### 2. Due Date Display (Item View)

#### Visual Representation
```
+-----------------------------------------------------+
| ■ [Task Description]                         [!!!]  |
|   Oct 26, 2025, 15:30                               |
|   Due: Nov 5, 2025                                  |
|   [Steps: 0/0]                                     |
+-----------------------------------------------------+
```

#### Due Date Text Design
- Position: Below creation date/time
- Font: 0.8rem, regular weight
- Color: Based on due date status
- Format: "Due: MMM DD, YYYY"

### 3. Due Date Status Indicators

#### Overdue Items
```
+-----------------------------------------------------+
| ■ [Task Description]                         [!!!]  |
|   Oct 20, 2025, 10:15                               |
|   Due: Oct 25, 2025 (Overdue by 1 day)              |
|   [Steps: 0/0]                                     |
+-----------------------------------------------------+
```

#### Due Today Items
```
+-----------------------------------------------------+
| ■ [Task Description]                         [!!]   |
|   Oct 25, 2025, 09:30                               |
|   Due: Oct 26, 2025 (Due today)                     |
|   [Steps: 0/0]                                     |
+-----------------------------------------------------+
```

#### Future Due Date Items
```
+-----------------------------------------------------+
| ■ [Task Description]                         [!]    |
|   Oct 26, 2025, 15:30                               |
|   Due: Nov 5, 2025                                  |
|   [Steps: 0/0]                                     |
+-----------------------------------------------------+
```

#### No Due Date Items
```
+-----------------------------------------------------+
| ■ [Task Description]                         [!!]   |
|   Oct 26, 2025, 15:30                               |
|   No due date                                       |
|   [Steps: 0/0]                                     |
+-----------------------------------------------------+
```

## Layout Considerations

### Desktop Layout
```
+---------------------------------------------------------------+
| 🔍  SnapList                                      ☀/🌙       |
|                                                               |
| [📝 To-Do] [🛒 Cart]                                          |
|                                                               |
| +-----------------------------------------------------------+ |
| | [High ▼] [Add new item...]                        [Add]   | |
| | Due: [Select Date ▼]                                    | |
| +-----------------------------------------------------------+ |
|                                                               |
| +-----------------------------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Buy groceries]                                    [!!!] ■| |
| |■  Oct 26, 2025, 15:30                                     ■| |
| |■  Due: Nov 5, 2025                                        ■| |
| |■  [Steps: 0/0]                                            ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                                               |
| +-----------------------------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Finish project]                                   [!!]  ■| |
| |■  Oct 25, 2025, 09:30                                     ■| |
| |■  Due: Oct 26, 2025 (Due today)                           ■| |
| |■  [Steps: 2/3]                                            ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                                               |
| +-----------------------------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Call dentist]                                     [!]   ■| |
| |■  Oct 20, 2025, 10:15                                     ■| |
| |■  Due: Oct 25, 2025 (Overdue by 1 day)                    ■| |
| |■  [Steps: 0/0]                                            ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                                               |
| Total: 3    Completed: 0                                      |
|                                                               |
| [Clear All]                                                   |
+---------------------------------------------------------------+
```

### Mobile Layout
```
+-----------------------------------------+
| 🔍  SnapList               ☀/🌙        |
|                                         |
| [📝 To-Do] [🛒 Cart]                   |
|                                         |
| [High ▼]                                |
| [Add new item...]                       |
| Due: [Select Date ▼]                    |
| [Add]                                   |
|                                         |
| +-------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Buy groceries]              [!!!] ■| |
| |■ Oct 26, 2025, 15:30                ■| |
| |■ Due: Nov 5, 2025                   ■| |
| |■ [Steps: 0/0]                       ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                         |
| +-------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Finish project]             [!!]  ■| |
| |■ Oct 25, 2025, 09:30                ■| |
| |■ Due: Oct 26, 2025 (Due today)      ■| |
| |■ [Steps: 2/3]                       ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                         |
| +-------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Call dentist]               [!]   ■| |
| |■ Oct 20, 2025, 10:15                ■| |
| |■ Due: Oct 25, 2025 (Overdue by 1 day)■|
| |■ [Steps: 0/0]                       ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                         |
| Total: 3    Completed: 0                |
|                                         |
| [Clear All]                             |
+-----------------------------------------+
```

## Dark Mode Adaptations

### Due Date Status Colors (Same as light mode)
- **Overdue**: Red - #ff4d4d
- **Due Today**: Orange - #ffa500
- **Future Due Date**: Green - #4caf50
- **No Due Date**: Gray - #9e9e9e

### Supporting Elements
- **Due Date Text**: Light text for better contrast
- **Due Date Background**: Darker version of status colors with opacity

## Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### Adjustments
1. **Date Picker**:
   - Desktop: Inline with input field
   - Mobile: Stacked below input field

2. **Due Date Display**:
   - Consistent positioning across all devices

## Accessibility Considerations

### Color Contrast
- Due date text to background: ≥ 4.5:1
- Status indicators to item background: ≥ 3:1

### Keyboard Navigation
- Date picker accessible via Tab key
- Enter key to confirm date selection
- Arrow keys to navigate calendar (if using custom picker)

### Screen Reader Support
- Date picker labeled appropriately
- Due date status includes descriptive text for screen readers
- ARIA attributes for interactive elements

## Implementation Notes

### CSS Classes
```css
/* Due Date Display */
.due-date {
  font-size: 0.8rem;
  margin-top: 2px;
}

/* Due Date Status */
.due-date.overdue {
  color: #ff4d4d;
  font-weight: 500;
}

.due-date.due-today {
  color: #ffa500;
  font-weight: 500;
}

.due-date.future {
  color: #4caf50;
}

.due-date.no-date {
  color: #9e9e9e;
  font-style: italic;
}

/* Dark Mode Adaptations */
body.dark .due-date.overdue {
  color: #ff6666;
}

body.dark .due-date.due-today {
  color: #ffc107;
}

body.dark .due-date.future {
  color: #66bb6a;
}

body.dark .due-date.no-date {
  color: #bdbdbd;
}
```

### HTML Structure
```html
<!-- Date Picker -->
<input type="date" id="dueDateInput" />

<!-- Due Date Display -->
<div class="due-date future">Due: Nov 5, 2025</div>
<div class="due-date due-today">Due: Oct 26, 2025 (Due today)</div>
<div class="due-date overdue">Due: Oct 25, 2025 (Overdue by 1 day)</div>
<div class="due-date no-date">No due date</div>
```

### JavaScript Date Handling
```javascript
// Format date for display
function formatDueDate(dueDate) {
  const date = new Date(dueDate);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

// Check if date is overdue
function isOverdue(dueDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  return due < today;
}

// Check if due today
function isDueToday(dueDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);
  return due.getTime() === today.getTime();
}
```

## Future Enhancements

1. **Custom Date Picker**: More visually appealing date picker for better UX
2. **Due Date Notifications**: Browser notifications for due dates
3. **Due Date Filtering**: Filter tasks by due date status
4. **Calendar View**: Monthly calendar view of due dates
5. **Time-based Due Dates**: Include time in addition to date