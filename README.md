# Banned Books Around the World

An interactive, story-driven visualization of books banned by governments. The site includes charts, filters, and a searchable archive, built with plain HTML/CSS/JS and Chart.js.

## Features
- Four charts: bans by country, most banned authors, bans by category, bans over time
- Search and filters for the full archive table (title/author/country/category)
- Narrative sections, featured stories, and fact boxes
- Responsive layout for desktop and mobile

## Live Preview (local)
Open `index.html` directly in your browser.

## Project Structure
- `index.html` - Page layout and content
- `style.css` - Styling and theme
- `script.js` - Data loading, charts, filters, table rendering
- `data/banned_books.json` - Banned books dataset

## Data Source
Data is sourced from Wikipedia's "List of books banned by governments" and processed into a simplified JSON format.

## Notes
- No build step or server is required.
- If you edit the dataset, refresh the page to see updates.
