# Newsify - React News Application

A modern, responsive news application built with React that fetches and displays news articles from NewsAPI.

## Features

- 📰 Browse news by categories (General, Business, Technology, Sports, Entertainment, Health, Science)
- 🔍 Search for specific news topics
- 📱 Fully responsive design
- ⚡ Fast and smooth user experience
- 🎨 Clean, modern UI

## Setup Instructions

### 1. Get Your API Key

1. Go to [NewsAPI.org](https://newsapi.org/)
2. Click "Get API Key" and sign up for a free account
3. Copy your API key

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Open `src/App.js` and replace `YOUR_API_KEY_HERE` with your actual API key:

```javascript
const API_KEY = 'your_actual_api_key_here';
```

**Alternative (Recommended):** Create a `.env` file in the root directory:

```
REACT_APP_NEWS_API_KEY=your_actual_api_key_here
```

Then update `src/App.js`:

```javascript
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
```

### 4. Run the Application

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (⚠️ irreversible)

## Deployment

### Deploy to Vercel/Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service

3. **Important:** Set your API key as an environment variable in your hosting platform:
   - Variable name: `REACT_APP_NEWS_API_KEY`
   - Value: Your NewsAPI key

## Technologies Used

- React 18
- NewsAPI.org
- CSS3
- Modern ES6+ JavaScript

## Project Structure

```
newsify/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── SearchBar.js
│   │   └── NewsCard.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Notes

- The free tier of NewsAPI has some limitations (100 requests per day)
- Some news sources may not provide images
- The API returns news from the last 30 days

## License

MIT

## Author

Ebitimi Ebelike Prosper
