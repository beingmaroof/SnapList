# Priority UI Design for SnapList

## Overview
This document provides visual design specifications for the priority feature in SnapList, including UI elements, color schemes, and layout considerations.

## Color Scheme

### Priority Colors
- **High Priority**: Red - #ff4d4d
- **Medium Priority**: Orange - #ffa500
- **Low Priority**: Green - #4caf50

### Supporting Colors
- **Priority Badge Background**: Light version of priority colors with opacity
- **Priority Badge Text**: Dark text for light backgrounds, light text for dark backgrounds
- **Priority Selector**: Consistent with existing form elements

## UI Elements

### 1. Priority Selector (Add/Edit Form)

#### Desktop View
```
+-----------------------------------------------------+
| [Priority ▼] [Task Description Input] [Add Button]  |
+-----------------------------------------------------+
```

#### Mobile View
```
+-----------------------------+
| [Priority ▼]                |
| [Task Description Input]    |
| [Add Button]                |
+-----------------------------+
```

#### Priority Selector Details
- Type: Dropdown/Select element
- Default selection: Medium
- Options:
  - High (with red indicator)
  - Medium (with orange indicator)
  - Low (with green indicator)
- Width: Adaptive (25% of container on desktop, full width on mobile)

### 2. Priority Badge (Item Display)

#### Visual Representation
```
+-----------------------------------------------------+
| ■ [Task Description]                         [!!!]  |
|   Oct 26, 2025, 15:30                               |
|   [Steps: 0/0]                                     |
+-----------------------------------------------------+
```

#### Badge Design
- Shape: Rounded rectangle
- Size: 24px height, adaptive width
- Text: Exclamation marks based on priority
  - High: !!!
  - Medium: !!
  - Low: !
- Background: Light version of priority color with 0.2 opacity
- Text Color: 
  - High: #ff4d4d
  - Medium: #ffa500
  - Low: #4caf50
- Font: Bold, 12px
- Position: Right-aligned, vertically centered with main text

### 3. Priority Border (Item Container)

#### Visual Representation
```
+-----------------------------------------------------+
| [High Priority - Red Left Border]                  |
| ■ [Task Description]                         [!!!]  |
|   Oct 26, 2025, 15:30                               |
|   [Steps: 0/0]                                     |
+-----------------------------------------------------+
```

#### Border Design
- Position: Left border of list item container
- Width: 4px
- Color: Solid priority color
- Radius: Matches container border radius

## Layout Considerations

### Desktop Layout
```
+---------------------------------------------------------------+
| 🔍  SnapList                                      ☀/🌙       |
|                                                               |
| [📝 To-Do] [🛒 Cart]                                          |
|                                                               |
| +-----------------------------------------------------------+ |
| | [High ▼] [Add new item...]                          [Add] | |
| +-----------------------------------------------------------+ |
|                                                               |
| +-----------------------------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Buy groceries]                                    [!!!] ■| |
| |■  Oct 26, 2025, 15:30                                     ■| |
| |■  [Steps: 0/0]                                            ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                                               |
| +-----------------------------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Finish project]                                   [!!]  ■| |
| |■  Oct 26, 2025, 14:45                                     ■| |
| |■  [Steps: 2/3]                                            ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                                               |
| +-----------------------------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Call dentist]                                     [!]   ■| |
| |■  Oct 26, 2025, 10:30                                     ■| |
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
| [Add]                                   |
|                                         |
| +-------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Buy groceries]              [!!!] ■| |
| |■ Oct 26, 2025, 15:30                ■| |
| |■ [Steps: 0/0]                       ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                         |
| +-------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Finish project]             [!!]  ■| |
| |■ Oct 26, 2025, 14:45                ■| |
| |■ [Steps: 2/3]                       ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                         |
| +-------------------------------------+ |
| |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| |
| |■ [Call dentist]               [!]   ■| |
| |■ Oct 26, 2025, 10:30                ■| |
| |■ [Steps: 0/0]                       ■| |
| +■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■+ |
|                                         |
| Total: 3    Completed: 0                |
|                                         |
| [Clear All]                             |
+-----------------------------------------+
```

## Dark Mode Adaptations

### Priority Colors (Same as light mode)
- **High Priority**: Red - #ff4d4d
- **Medium Priority**: Orange - #ffa500
- **Low Priority**: Green - #4caf50

### Supporting Elements
- **Priority Badge Background**: Darker version of priority colors with opacity
- **Priority Badge Text**: Light text for better contrast
- **Priority Border**: Same colors as light mode for visibility

## Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### Adjustments
1. **Priority Selector**:
   - Desktop: Inline with input field
   - Mobile: Stacked above input field

2. **Priority Badge**:
   - Desktop: Right-aligned
   - Mobile: Right-aligned (same position)

3. **Priority Border**:
   - Consistent across all devices

## Accessibility Considerations

### Color Contrast
- Priority badge text to background: ≥ 4.5:1
- Priority border to item background: ≥ 3:1

### Keyboard Navigation
- Priority selector accessible via Tab key
- Enter key to confirm selection
- Arrow keys to navigate options

### Screen Reader Support
- Priority selector labeled appropriately
- Priority badges include descriptive text for screen readers
- ARIA attributes for interactive elements

## Implementation Notes

### CSS Classes
```css
.priority-high { border-left: 4px solid #ff4d4d; }
.priority-medium { border-left: 4px solid #ffa500; }
.priority-low { border-left: 4px solid #4caf50; }

.priority-badge {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
}

.priority-badge.high {
  background-color: rgba(255, 77, 77, 0.2);
  color: #ff4d4d;
}

.priority-badge.medium {
  background-color: rgba(255, 165, 0, 0.2);
  color: #ffa500;
}

.priority-badge.low {
  background-color: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}
```

### HTML Structure
```html
<!-- Priority Selector -->
<select id="prioritySelector">
  <option value="high">High</option>
  <option value="medium" selected>Medium</option>
  <option value="low">Low</option>
</select>

<!-- Priority Badge -->
<span class="priority-badge high">!!!</span>
```

## Future Enhancements

1. **Custom Priority Levels**: Allow users to define their own priority levels
2. **Priority-based Notifications**: Send reminders based on priority
3. **Priority Filtering**: Filter tasks by priority level
4. **Keyboard Shortcuts**: Assign priority with keyboard shortcuts