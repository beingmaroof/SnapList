# Due Dates Feature Requirements for SnapList

## Overview
This document outlines the requirements for implementing a due dates system in the SnapList application. This feature will allow users to set due dates for their tasks and visualize overdue items.

## Current State Analysis
The SnapList app currently supports:
- Simple todo items with text, date, time, and completion status
- Priority levels (High, Medium, Low)
- Two lists: To-Do and Shopping
- Basic CRUD operations on items
- Local storage persistence
- Dark/light theme switching
- Search functionality

## Feature Requirements

### 1. Core Functionality
- Users can assign a due date to each todo item
- Due dates are displayed with each item
- Overdue items are visually indicated
- Items can be sorted by due date
- Existing items without due dates show "No due date"

### 2. Data Structure Changes
Current item structure:
```javascript
{
  text: "string",
  date: "YYYY-MM-DD",
  time: "HH:MM",
  done: boolean,
  priority: "high|medium|low",
  steps: []
}
```

New item structure with due dates:
```javascript
{
  text: "string",
  date: "YYYY-MM-DD",
  time: "HH:MM",
  done: boolean,
  priority: "high|medium|low",
  dueDate: "YYYY-MM-DD"|null,
  steps: []
}
```

### 3. UI/UX Requirements

#### 3.1 Due Date Selection
- Add a date picker in the add item form
- Allow users to select a date from a calendar or type it manually
- Default to no due date (optional field)
- Show clear visual indicator when no due date is set

#### 3.2 Due Date Display
- Display due date below the creation date/time
- Format: "Due: MMM DD, YYYY" or "No due date"
- Overdue items are highlighted with a different color
- Due today items have special styling

#### 3.3 Visual Indicators
- Overdue items: Red text/background
- Due today items: Orange text/background
- Future due dates: Green text/background
- No due date: Gray text

#### 3.4 Sorting
- Add due date sorting option to existing sorting controls
- Default sort by creation date (maintaining current behavior)
- Option to sort by due date (earliest first)

### 4. Technical Requirements
- Maintain backward compatibility with existing data
- Efficient rendering of due date indicators
- Proper data persistence in localStorage
- No external dependencies (continue using vanilla JS)
- Responsive design that works on mobile
- Accessible date picker for all users

## Implementation Plan

### Phase 1: Data Structure & Storage (1 day)
- Update data model to include dueDate field
- Implement data migration for existing items
- Update localStorage save/load functions
- Test data persistence

### Phase 2: UI Implementation (2 days)
- Design date picker for add/edit form
- Implement due date display in item view
- Create visual indicators for overdue/due today items
- Add due date styling to CSS

### Phase 3: Functionality & Integration (1 day)
- Implement date selection logic
- Create overdue checking function
- Add due date sorting
- Integrate with existing todo functionality

### Phase 4: Testing & Polish (1 day)
- Test all due date functionality
- Fix bugs and edge cases
- Optimize performance
- Update documentation

## Success Criteria
- Users can assign due dates to todo items
- Due dates are visually distinct
- Overdue items are clearly indicated
- Data persists correctly across sessions
- UI is intuitive and responsive
- No regression in existing functionality
- Items can be sorted by due date

## User Stories

### Primary User Story
As a SnapList user, I want to set due dates for my tasks so that I can track deadlines and identify overdue items.

### Detailed User Stories
1. **Due Date Assignment**
   As a user, I want to select a due date when creating a new task so that I can track deadlines.

2. **Due Date Visualization**
   As a user, I want to see due dates displayed with my tasks so that I can quickly identify deadlines.

3. **Overdue Indication**
   As a user, I want to see visual indicators for overdue tasks so that I can prioritize catching up.

4. **Due Date Sorting**
   As a user, I want to sort my tasks by due date so that I can view the most urgent items first.

5. **Backward Compatibility**
   As an existing user, I want my current tasks to work without due dates so that I don't lose any functionality.

## Acceptance Criteria
- [ ] Date picker appears in add item form
- [ ] Due dates can be selected from calendar or typed manually
- [ ] Due dates are displayed with items
- [ ] Overdue items are visually distinct
- [ ] Due today items have special styling
- [ ] Items can be sorted by due date
- [ ] Existing items work without due dates
- [ ] Due date data persists across sessions
- [ ] No visual regression in existing features
- [ ] Works on both mobile and desktop
- [ ] Accessible for users with disabilities

## Technical Considerations
- Use native HTML5 date input for broad compatibility
- Implement efficient date comparison algorithms
- Ensure localStorage serialization handles dueDate field
- Maintain existing event listener structure
- Follow existing code patterns and naming conventions
- Consider timezone handling for date comparisons

## Design Mockups

### Add Item Form with Due Date
```
+---------------------------------------------+
| [Priority ▼] [Task Description     _______] |
| Due: [Select Date ▼]                 [Add]  |
+---------------------------------------------+
```

### Item Display with Due Date
```
+---------------------------------------------+
| ■ [Task Description]                  [!!!] |
|   Created: Oct 26, 2025, 15:30              |
|   Due: Nov 5, 2025                          |
|   [Steps: 0/0]                              |
+---------------------------------------------+
```

### Overdue Item Display
```
+---------------------------------------------+
| ■ [Task Description]                  [!!!] |
|   Created: Oct 20, 2025, 10:15              |
|   Due: Oct 25, 2025 (Overdue by 1 day)      |
|   [Steps: 0/0]                              |
+---------------------------------------------+
```

### Due Today Item Display
```
+---------------------------------------------+
| ■ [Task Description]                  [!!]  |
|   Created: Oct 25, 2025, 09:30              |
|   Due: Oct 26, 2025 (Due today)             |
|   [Steps: 0/0]                              |
+---------------------------------------------+
```

## Color Scheme

### Due Date Status Colors
- **Overdue**: Red - #ff4d4d
- **Due Today**: Orange - #ffa500
- **Future Due Date**: Green - #4caf50
- **No Due Date**: Gray - #9e9e9e

### Supporting Colors
- **Due Date Text**: Dark text for light backgrounds, light text for dark backgrounds
- **Due Date Background**: Light version of status colors with opacity

## Future Enhancements
1. Due date notifications/reminders
2. Recurring due dates
3. Due date filtering
4. Calendar view of due dates
5. Time-based due dates (not just dates)