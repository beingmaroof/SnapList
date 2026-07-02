# Categories and Tags System Requirements for SnapList

## Overview
This document outlines the requirements for implementing a categories and tags system in the SnapList application. This feature will allow users to organize their tasks using categories and tags for better organization and filtering.

## Current State Analysis
The SnapList app currently supports:
- Simple todo items with text, date, time, and completion status
- Priority levels (High, Medium, Low)
- Due dates with visual indicators
- Two lists: To-Do and Shopping
- Basic CRUD operations on items
- Local storage persistence
- Dark/light theme switching
- Search functionality

## Feature Requirements

### 1. Core Functionality

#### 1.1 Categories
- Users can create custom categories
- Categories have a name and optional color
- Items can be assigned to one category
- Users can edit category names and colors
- Users can delete categories (with confirmation)
- Default category for items without explicit category

#### 1.2 Tags
- Items can have multiple tags
- Tags are simple text labels
- Users can add tags when creating/editing items
- Autocomplete suggestions for existing tags
- Users can remove tags from items

#### 1.3 Filtering
- Filter items by category
- Filter items by tags
- Combine category and tag filters
- Clear filters option

### 2. Data Structure Changes

#### 2.1 Category Structure
```javascript
{
  id: "unique identifier",
  name: "string",
  color: "hex color code",
  createdAt: "ISO timestamp"
}
```

#### 2.2 Updated Item Structure
```javascript
{
  text: "string",
  date: "YYYY-MM-DD",
  time: "HH:MM",
  done: boolean,
  priority: "high|medium|low",
  dueDate: "YYYY-MM-DD"|null,
  category: "category_id"|null,
  tags: ["string"],
  steps: [
    {
      id: "unique identifier",
      text: "string",
      done: boolean
    }
  ]
}
```

#### 2.3 Storage Structure
- Categories stored separately from items
- Items reference categories by ID
- Tags stored with items as arrays

### 3. UI/UX Requirements

#### 3.1 Category Management
- Dedicated category management section
- List of existing categories with colors
- Add new category button
- Edit category functionality
- Delete category functionality
- Visual representation of category colors

#### 3.2 Tag Management
- Tag input field in add/edit item form
- Autocomplete suggestions as user types
- Visual display of tags on items
- Ability to remove tags from items

#### 3.3 Filtering System
- Filter controls above item list
- Category filter dropdown
- Tag filter input with autocomplete
- Clear filters button
- Visual indication of active filters

#### 3.4 Item Display
- Category indicator (colored dot or label)
- Tag display below item text
- Consistent styling with existing design

### 4. Technical Requirements
- Maintain backward compatibility with existing data
- Efficient category and tag storage
- Fast filtering performance
- Proper data persistence in localStorage
- No external dependencies (continue using vanilla JS)
- Responsive design that works on mobile
- Accessible for users with disabilities

## Implementation Plan

### Phase 1: Data Structure & Storage (1 day)
- Define category data structure
- Update item structure to include category and tags
- Implement data migration for existing items
- Update localStorage save/load functions
- Test data persistence

### Phase 2: Category Management UI (2 days)
- Design category management interface
- Implement category creation
- Add category editing functionality
- Implement category deletion
- Create visual indicators for categories

### Phase 3: Tag System Implementation (2 days)
- Design tag input and display
- Implement tag addition to items
- Add tag autocomplete functionality
- Create tag display on items
- Implement tag removal

### Phase 4: Filtering System (1 day)
- Design filtering controls
- Implement category filtering
- Add tag filtering
- Create combined filtering logic
- Add clear filters functionality

### Phase 5: Integration & Testing (1 day)
- Integrate all components
- Test functionality
- Fix bugs and edge cases
- Optimize performance
- Update documentation

## Success Criteria
- Users can create and manage categories
- Users can add tags to items
- Items can be filtered by category and tags
- Data persists correctly across sessions
- UI is intuitive and responsive
- No regression in existing functionality

## User Stories

### Primary User Story
As a SnapList user, I want to organize my tasks using categories and tags so that I can find and manage related items more easily.

### Detailed User Stories

#### Categories
1. **Create Category**
   As a user, I want to create custom categories so that I can organize my tasks by type.

2. **Edit Category**
   As a user, I want to edit category names and colors so that I can update my organization system.

3. **Delete Category**
   As a user, I want to delete categories I no longer need so that my category list stays clean.

4. **Assign Category**
   As a user, I want to assign categories to my tasks so that I can group related items.

#### Tags
5. **Add Tags**
   As a user, I want to add tags to my tasks so that I can add detailed organization.

6. **Tag Autocomplete**
   As a user, I want tag suggestions as I type so that I can use consistent tags.

7. **Remove Tags**
   As a user, I want to remove tags from tasks so that I can update my organization.

#### Filtering
8. **Filter by Category**
   As a user, I want to filter tasks by category so that I can focus on specific groups.

9. **Filter by Tags**
   As a user, I want to filter tasks by tags so that I can find items with specific attributes.

10. **Combined Filtering**
    As a user, I want to combine category and tag filters so that I can narrow down my results.

## Acceptance Criteria
- [ ] Users can create custom categories
- [ ] Categories have names and colors
- [ ] Items can be assigned to categories
- [ ] Users can edit category names and colors
- [ ] Users can delete categories
- [ ] Items can have multiple tags
- [ ] Tags have autocomplete suggestions
- [ ] Users can remove tags from items
- [ ] Items can be filtered by category
- [ ] Items can be filtered by tags
- [ ] Category and tag filters can be combined
- [ ] Filters can be cleared
- [ ] Category and tag data persists across sessions
- [ ] No visual regression in existing features
- [ ] Works on both mobile and desktop
- [ ] Accessible for users with disabilities

## Technical Considerations
- Use efficient data structures for categories and tags
- Implement fast filtering algorithms
- Ensure localStorage serialization handles new fields
- Maintain existing event listener structure
- Follow existing code patterns and naming conventions
- Consider performance with large numbers of categories/tags

## Design Mockups

### Category Management Section
```
+---------------------------------------------+
| Categories                                  |
| +------------+  +------------+  +---------+ |
| | Work  ●■■■ |  | Home  ●■■■ |  | + Add   | |
| +------------+  +------------+  +---------+ |
|                                             |
| +-----------------------------------------+ |
| | Edit Category                           | |
| | Name: [Work     ]                       | |
| | Color: [■■■■■■■■]                       | |
| | [Save] [Cancel] [Delete]                | |
| +-----------------------------------------+ |
+---------------------------------------------+
```

### Add Item Form with Category and Tags
```
+---------------------------------------------+
| [High ▼] [Task Description     _______]     |
| Due: [Select Date ▼]                        |
| Category: [Work ▼]                          |
| Tags: [meeting, project ______]             |
|                                     [Add]   |
+---------------------------------------------+
```

### Item Display with Category and Tags
```
+---------------------------------------------+
| ■ [Prepare presentation]              [!!!] |
|   Oct 26, 2025, 15:30                       |
|   Due: Nov 5, 2025                          |
|   Category: Work ●                          |
|   Tags: meeting, project                    |
|   [Steps: 0/0]                              |
+---------------------------------------------+
```

### Filtering Controls
```
+---------------------------------------------+
| Filter by:                                  |
| Category: [All ▼]  Tags: [_________]        |
| [Clear Filters]                             |
+---------------------------------------------+
```

## Color Scheme

### Category Colors
- Default category colors (suggested palette)
- User-customizable colors
- Consistent with existing priority colors

### Tag Display
- Simple text labels
- Consistent styling with existing UI
- Dark/light mode adaptations

## Future Enhancements
1. Category hierarchy (subcategories)
2. Tag cloud visualization
3. Category-based statistics
4. Import/export of categories
5. Default categories for new users