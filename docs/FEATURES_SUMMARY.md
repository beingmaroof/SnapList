# SnapList Features Summary

## Core Features
- **Dual Lists**: Separate To-Do and Shopping lists
- **Local Storage**: All data saved in browser storage
- **Responsive Design**: Works on mobile and desktop
- **Dark/Light Theme**: Toggle between color schemes

## Enhanced Features

### 1. Priority System
- Three priority levels: High, Medium, Low
- Visual indicators with colored borders and badges
- Priority-based sorting option

### 2. Due Dates
- Date picker for setting due dates
- Visual indicators for overdue items
- Due date display with status colors
- Due date sorting option

### 3. Categories & Tags
- Create and manage categories with custom colors
- Assign categories to items
- Add multiple tags to items
- Filter by categories and tags
- Visual category display on items

### 4. Task Steps/Phases
- Break down tasks into smaller steps
- Track progress of multi-step tasks
- Mark individual steps as complete
- Add/delete steps as needed

### 5. Enhanced Sorting
- Multiple sorting options:
  - Creation Date
  - Due Date
  - Priority
  - Status
  - Alphabetical
- Ascending/Descending order
- Sort preference saving
- Visual indicators for current sort

### 6. Search & Filter
- Quick search functionality
- Category filtering
- Tag filtering
- Clear filters option

### 7. Export/Import
- **JSON Export**: Complete backup including all data and preferences
- **CSV Export**: Simplified data export for external use
- **JSON Import**: Restore complete backups
- **CSV Import**: Import data from external sources
- Automatic filename generation with dates

## UI/UX Features
- Clean, modern interface
- Intuitive tab-based navigation
- Visual feedback for all actions
- Progress indicators for multi-step tasks
- Color-coded priority system
- Status indicators for due dates
- Responsive design for all screen sizes
- Smooth animations and transitions

## Technical Features
- Vanilla JavaScript implementation (no frameworks)
- localStorage for data persistence
- Data migration for backward compatibility
- Modular code structure
- Comprehensive error handling
- Performance optimized rendering

## Data Structure
Each item contains:
- `text`: The item text
- `date`: Creation date
- `time`: Creation time
- `done`: Completion status
- `priority`: Priority level (high/medium/low)
- `dueDate`: Due date (optional)
- `category`: Category ID (optional)
- `tags`: Array of tag strings
- `steps`: Array of step objects

Categories contain:
- `id`: Unique identifier
- `name`: Category name
- `color`: Display color
- `createdAt`: Creation timestamp

## File Structure
- `index.html`: Main HTML structure
- `style.css`: All styling
- `script.js`: All JavaScript functionality
- Documentation files for each feature

## Browser Support
- Works in all modern browsers
- No external dependencies
- Progressive enhancement approach