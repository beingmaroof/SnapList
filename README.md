# SnapList

A powerful, feature-rich todo list application built with vanilla JavaScript, HTML, and CSS.

## Overview

SnapList is an enhanced todo list application that goes beyond basic task management. It features dual lists (To-Do and Shopping), priority levels, due dates, categories, tags, task steps, advanced sorting, and export/import functionality - all in a clean, responsive interface with dark/light theme support.

## Features

### Core Functionality
- **Dual Lists**: Separate To-Do and Shopping lists
- **Task Management**: Add, edit, complete, and delete tasks
- **Local Storage**: All data saved in your browser
- **Responsive Design**: Works on mobile, tablet, and desktop

### Enhanced Features
- **Priority System**: High, Medium, and Low priority levels with visual indicators
- **Due Dates**: Set due dates with overdue tracking and visual status indicators
- **Categories & Tags**: Organize tasks with customizable categories and searchable tags
- **Task Steps**: Break down complex tasks into manageable steps
- **Advanced Sorting**: Sort by date, due date, priority, status, or alphabetically
- **Search & Filter**: Quickly find tasks by text, category, or tags
- **Export/Import**: Backup and restore your data in JSON or CSV format

### UI/UX Features
- **Dark/Light Theme**: Toggle between color schemes based on your preference
- **Clean Interface**: Modern, uncluttered design focused on usability
- **Visual Feedback**: Clear indicators for all task states and actions
- **Progress Tracking**: Visual progress indicators for multi-step tasks

## Getting Started

### Running Locally
1. Clone or download this repository
2. Open `index.html` in your browser, or
3. Serve the directory with any local server:
   ```bash
   python -m http.server 8000
   ```
4. Navigate to `http://localhost:8000` in your browser

### No Installation Required
SnapList runs entirely in your browser with no external dependencies. All data is stored locally in your browser's localStorage.

## Usage

### Adding Tasks
1. Select the appropriate tab (To-Do or Shopping)
2. Enter task text in the input field
3. Set priority level (optional)
4. Set due date (optional)
5. Select category (optional)
6. Add tags (optional)
7. Click "Add" or press Enter

### Managing Tasks
- **Complete**: Click the checkbox next to any task
- **Edit**: Click directly on task text to edit
- **Delete**: Hover over task and click the delete button
- **Add Steps**: Use the "Add a step..." input below any task
- **Manage Steps**: Check off steps as you complete them

### Organizing Tasks
- **Categories**: Create categories in the Categories section and assign them to tasks
- **Tags**: Add comma-separated tags when creating tasks
- **Filtering**: Use the filter controls to show only tasks from specific categories or with specific tags

### Sorting Tasks
- Choose a sorting option from the dropdown (Date, Due Date, Priority, Status, Alphabetical)
- Toggle between ascending and descending order
- Sorting preferences are saved automatically

### Backup & Restore
- **Export**: Save your data as JSON (complete backup) or CSV (simple export)
- **Import**: Restore data from previously exported files
- Files are automatically named with the current date

## Technical Details

### Architecture
- **Vanilla JavaScript**: No frameworks or external libraries
- **localStorage**: Client-side data persistence
- **Responsive CSS**: Mobile-first design approach
- **Modular Code**: Well-organized, maintainable structure

### Data Structure
Each task contains:
- Text content
- Creation date and time
- Completion status
- Priority level
- Due date (optional)
- Category (optional)
- Tags (optional)
- Steps (optional)

### Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge) that support localStorage and modern JavaScript features.

## Files

- `index.html`: Main application structure
- `style.css`: All styling and responsive design
- `script.js`: Complete application logic
- Documentation files for features and development

## Development

This project was developed with a phased approach, implementing one feature at a time with thorough testing. See `DEVELOPMENT_TASKS.md` for the complete development history.

## Contributing

As this is a standalone application, contributions are not actively sought. However, you're welcome to fork the project and make your own enhancements.

## License

This project is open source and available under the MIT License.

## Author

Developed as an enhanced todo list application with modern features and a focus on usability.