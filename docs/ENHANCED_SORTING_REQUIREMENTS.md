# Enhanced Sorting System Requirements for SnapList

## Overview
This document outlines the requirements for implementing an enhanced sorting system in the SnapList application. This feature will allow users to sort their tasks using multiple criteria with ascending/descending options.

## Current State Analysis
The SnapList app currently supports:
- Simple todo items with text, date, time, and completion status
- Priority levels (High, Medium, Low)
- Due dates with visual indicators
- Categories and tags for organization
- Two lists: To-Do and Shopping
- Basic CRUD operations on items
- Local storage persistence
- Dark/light theme switching
- Search functionality

## Feature Requirements

### 1. Core Functionality

#### 1.1 Sorting Options
- Sort by creation date (default)
- Sort by due date
- Sort by priority
- Sort by completion status
- Sort alphabetically (by task text)

#### 1.2 Sort Order
- Ascending order (A-Z, 0-9, oldest-newest)
- Descending order (Z-A, 9-0, newest-oldest)
- Toggle between ascending/descending

#### 1.3 Default Sorting
- Save user's preferred sorting option
- Apply default sorting on app load
- Reset to default option

#### 1.4 Visual Indicators
- Clear indication of current sorting method
- Visual indicator for sort order (ascending/descending)
- Intuitive sorting controls

### 2. Data Structure Changes

#### 2.1 User Preferences
```javascript
{
  sortBy: "date|dueDate|priority|status|alphabetical",
  sortOrder: "asc|desc"
}
```

#### 2.2 Storage
- User preferences stored in localStorage
- Separate from item data
- Persist between sessions

### 3. UI/UX Requirements

#### 3.1 Sorting Controls
- Dedicated sorting section in UI
- Dropdown for sorting criteria selection
- Button/toggle for sort order
- Visual indicator for current sort

#### 3.2 Sorting Display
- Clear labeling of sorting criteria
- Icon or text indicator for sort order
- Consistent styling with existing UI

#### 3.3 User Feedback
- Immediate visual feedback when sorting changes
- Smooth transitions when items reorder
- Clear indication when default sorting is active

### 4. Technical Requirements
- Efficient sorting algorithms for all criteria
- Proper data persistence in localStorage
- No external dependencies (continue using vanilla JS)
- Responsive design that works on mobile
- Accessible for users with disabilities

## Implementation Plan

### Phase 1: UI Design and Implementation (1 day)
- Design sorting controls
- Implement sorting dropdown
- Add sort order toggle
- Create visual indicators

### Phase 2: Sorting Logic Implementation (2 days)
- Implement sorting algorithms for each criteria
- Add sort order functionality
- Integrate with existing render function
- Test sorting performance

### Phase 3: User Preferences (1 day)
- Implement default sorting preference saving
- Load user preferences on app start
- Add reset to default functionality
- Test preference persistence

### Phase 4: Integration & Testing (1 day)
- Integrate all components
- Test functionality
- Fix bugs and edge cases
- Optimize performance
- Update documentation

## Success Criteria
- Users can sort items by multiple criteria
- Users can toggle sort order
- Default sorting preference is saved
- Sorting is applied immediately
- UI is intuitive and responsive
- No regression in existing functionality

## User Stories

### Primary User Story
As a SnapList user, I want to sort my tasks by different criteria so that I can view them in the order that makes most sense for my current needs.

### Detailed User Stories

#### Sorting Options
1. **Sort by Creation Date**
   As a user, I want to sort tasks by creation date so that I can see the oldest or newest tasks first.

2. **Sort by Due Date**
   As a user, I want to sort tasks by due date so that I can focus on the most urgent tasks.

3. **Sort by Priority**
   As a user, I want to sort tasks by priority so that I can focus on the most important tasks.

4. **Sort by Completion Status**
   As a user, I want to sort tasks by completion status so that I can see completed or pending tasks together.

5. **Sort Alphabetically**
   As a user, I want to sort tasks alphabetically so that I can find specific tasks more easily.

#### Sort Order
6. **Toggle Sort Order**
   As a user, I want to toggle between ascending and descending order so that I can view tasks in my preferred order.

#### Preferences
7. **Save Default Sorting**
   As a user, I want my preferred sorting option to be saved so that I don't have to set it every time.

8. **Reset to Default**
   As a user, I want to reset to the default sorting option so that I can return to the original view.

## Acceptance Criteria
- [ ] Users can sort by creation date
- [ ] Users can sort by due date
- [ ] Users can sort by priority
- [ ] Users can sort by completion status
- [ ] Users can sort alphabetically
- [ ] Users can toggle sort order (ascending/descending)
- [ ] Default sorting preference is saved
- [ ] Sorting is applied immediately when changed
- [ ] Visual indicators show current sorting method
- [ ] Visual indicators show sort order
- [ ] Sorting preferences persist across sessions
- [ ] No visual regression in existing features
- [ ] Works on both mobile and desktop
- [ ] Accessible for users with disabilities

## Technical Considerations
- Use efficient sorting algorithms
- Implement proper comparison functions for each criteria
- Ensure localStorage serialization handles preferences
- Maintain existing event listener structure
- Follow existing code patterns and naming conventions
- Consider performance with large numbers of items

## Design Mockups

### Sorting Controls
```
+-----------------------------------------------------+
| Sort by: [Creation Date ▼] [↑↓]            [Reset]   |
+-----------------------------------------------------+
```

### Sorting Options Dropdown
```
+-----------------------------------------------------+
| Creation Date                                       |
| Due Date                                            |
| Priority                                            |
| Status                                              |
| Alphabetical                                        |
+-----------------------------------------------------+
```

### Sort Order Toggle
```
Ascending:  [↑] (active)
Descending: [↓]
```

### Visual Indicators
```
+-----------------------------------------------------+
| Sort by: Due Date [↑]                      [Reset]   |
| (Sorted by due date, ascending order)               |
+-----------------------------------------------------+
```

## Implementation Details

### Sorting Algorithms

#### 1. Sort by Creation Date
```javascript
function sortByDate(a, b, order) {
  const dateA = new Date(a.date + ' ' + a.time);
  const dateB = new Date(b.date + ' ' + b.time);
  return order === 'asc' ? dateA - dateB : dateB - dateA;
}
```

#### 2. Sort by Due Date
```javascript
function sortByDueDate(a, b, order) {
  // Items with no due date go to the end
  if (!a.dueDate && !b.dueDate) return 0;
  if (!a.dueDate) return 1;
  if (!b.dueDate) return -1;
  
  const dateA = new Date(a.dueDate);
  const dateB = new Date(b.dueDate);
  return order === 'asc' ? dateA - dateB : dateB - dateA;
}
```

#### 3. Sort by Priority
```javascript
function sortByPriority(a, b, order) {
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  const comparison = priorityOrder[a.priority] - priorityOrder[b.priority];
  return order === 'asc' ? comparison : -comparison;
}
```

#### 4. Sort by Status
```javascript
function sortByStatus(a, b, order) {
  // Completed items last when ascending, first when descending
  const comparison = a.done - b.done;
  return order === 'asc' ? comparison : -comparison;
}
```

#### 5. Sort Alphabetically
```javascript
function sortAlphabetically(a, b, order) {
  const comparison = a.text.localeCompare(b.text);
  return order === 'asc' ? comparison : -comparison;
}
```

### Main Sorting Function
```javascript
function sortItems(items, sortBy, order) {
  switch(sortBy) {
    case 'date':
      return items.sort((a, b) => sortByDate(a, b, order));
    case 'dueDate':
      return items.sort((a, b) => sortByDueDate(a, b, order));
    case 'priority':
      return items.sort((a, b) => sortByPriority(a, b, order));
    case 'status':
      return items.sort((a, b) => sortByStatus(a, b, order));
    case 'alphabetical':
      return items.sort((a, b) => sortAlphabetically(a, b, order));
    default:
      return items.sort((a, b) => sortByDate(a, b, order));
  }
}
```

## Color Scheme and Styling

### Sorting Controls
- Consistent with existing UI design
- Clear visual hierarchy
- Accessible color contrast

### Visual Indicators
- Sort order icons (↑ for ascending, ↓ for descending)
- Highlighted current sorting option
- Subtle animations for sorting changes

## Future Enhancements
1. Multi-level sorting (sort by priority, then by due date)
2. Custom sorting rules
3. Sorting presets
4. Keyboard shortcuts for sorting