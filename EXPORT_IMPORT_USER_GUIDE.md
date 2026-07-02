# SnapList Export/Import User Guide

## Overview
The Export/Import functionality allows you to backup your SnapList data and restore it later, or transfer it between devices. You can export your data in either JSON or CSV format.

## Exporting Data

### Export as JSON
1. Click the "Export as JSON" button in the Backup & Restore section
2. Your browser will automatically download a JSON file containing:
   - All your To-Do items
   - All your Shopping items
   - All your categories
   - Your sorting preferences
3. The file will be named with the current date (e.g., `snaplist-backup-2025-10-26.json`)

### Export as CSV
1. Click the "Export as CSV" button in the Backup & Restore section
2. Your browser will automatically download a CSV file containing:
   - All your To-Do and Shopping items
   - Associated metadata (dates, priorities, due dates, etc.)
3. The file will be named with the current date (e.g., `snaplist-export-2025-10-26.csv`)

## Importing Data

### Import JSON File
1. Click the "Import Data" button in the Backup & Restore section
2. Select a previously exported JSON file from your device
3. The application will:
   - Replace your current data with the imported data
   - Automatically migrate any older data formats
   - Apply your saved sorting preferences
4. You'll see a confirmation message when the import is complete

### Import CSV File
1. Click the "Import Data" button in the Backup & Restore section
2. Select a previously exported CSV file from your device
3. The application will:
   - Replace your current To-Do and Shopping lists
   - Preserve all associated metadata
4. You'll see a confirmation message when the import is complete

## Best Practices

### Regular Backups
- Export your data regularly to prevent data loss
- Store backup files in a safe location (cloud storage, external drive, etc.)

### Data Transfer
- Use JSON format for complete backups (includes categories and preferences)
- Use CSV format for simpler data transfer or importing into other applications

### File Management
- Keep your backup files organized by date
- Don't modify the exported files manually unless you understand the data structure

## Troubleshooting

### Import Issues
- If you receive an error message, check that:
  - The file is a valid JSON or CSV file
  - The file was exported from SnapList
  - The file hasn't been corrupted

### Export Issues
- If export fails:
  - Check your browser's download settings
  - Ensure you have sufficient storage space
  - Try refreshing the page and exporting again

## Data Structure

### JSON Format
The JSON export contains:
```json
{
  "todoList": [...],
  "shoppingList": [...],
  "categories": [...],
  "sortPreferences": {...}
}
```

### CSV Format
The CSV export contains columns for:
- Type (Todo/Shopping)
- Text
- Date
- Time
- Done status
- Priority
- Due Date
- Category
- Tags
- Steps

## Security Notes
- All data is stored locally in your browser
- Exported files contain no personal information beyond what you've entered
- Keep backup files secure if they contain sensitive information