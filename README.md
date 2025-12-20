# Good News Network (GNN)

A cross-platform mobile and web application that searches for and delivers positive news to users. Built with React Native and Expo, GNN provides a unified codebase for iOS, Android, and web platforms.

## Features

- 📰 **Positive News Feed**: Curated positive news articles from around the world
- 🔍 **Search Functionality**: Search through news articles by keywords
- 👤 **User Authentication**: Sign up and sign in to personalize your experience
- ⚙️ **User Preferences**: Customize notification settings
- 🔄 **Pull to Refresh**: Get the latest positive news with a simple pull gesture
- 🌐 **Cross-Platform**: Works on iOS, Android, and web with a single codebase

## Technology Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development and build tooling
- **React Navigation**: Navigation between screens
- **Axios**: HTTP client for API requests
- **React Context API**: State management for authentication

## Project Structure

```
GNN/
├── App.js                      # Main application entry point
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── NewsCard.js        # News article card component
│   │   └── LoadingSpinner.js  # Loading indicator component
│   ├── screens/               # Screen components
│   │   ├── HomeScreen.js      # Main news feed screen
│   │   ├── AuthScreen.js      # Login/signup screen
│   │   └── ProfileScreen.js   # User profile and settings screen
│   ├── services/              # API and business logic
│   │   ├── newsService.js     # News fetching service
│   │   └── authService.js     # Authentication service
│   ├── contexts/              # React context providers
│   │   └── AuthContext.js     # Authentication context
│   └── navigation.js          # Navigation configuration
├── assets/                     # Images and static assets
├── package.json               # Project dependencies
└── app.json                   # Expo configuration

```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mindfu23/GNN.git
cd GNN
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Web
```bash
npm run web
```
The app will open in your default browser at `http://localhost:8081`.

#### iOS (requires macOS)
```bash
npm run ios
```

#### Android
```bash
npm run android
```

#### Development Server
```bash
npm start
```
This will start the Expo development server. You can then:
- Press `w` to open in web browser
- Press `a` to open in Android emulator
- Press `i` to open in iOS simulator
- Scan the QR code with the Expo Go app on your mobile device

## Features in Detail

### Authentication System
- Mock authentication service (ready to be replaced with a real backend)
- Sign up and sign in functionality
- Persistent user sessions
- User preferences management

### News Service
- Mock news data for demonstration
- Ready to integrate with real news APIs (NewsAPI, GNews, etc.)
- Positive sentiment filtering
- Search functionality
- Article summaries and links to full articles

### User Interface
- Clean, modern design with green theme representing positivity
- Responsive layout for all screen sizes
- Pull-to-refresh for updating news
- Search bar for filtering articles
- Profile management screen

## Integrating Real News APIs

The application currently uses mock data. To integrate a real news API:

1. Sign up for a news API service (e.g., [NewsAPI](https://newsapi.org/), [GNews](https://gnews.io/))
2. Get your API key
3. Update `src/services/newsService.js`:
   - Uncomment the `fetchPositiveNewsFromAPI` function
   - Add your API key
   - Replace the mock data fetch with the real API call

Example integration with NewsAPI:
```javascript
const NEWS_API_KEY = 'your-api-key-here';
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

export const fetchPositiveNews = async () => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        q: 'positive OR success OR breakthrough OR achievement',
        sortBy: 'publishedAt',
        language: 'en',
        apiKey: NEWS_API_KEY,
      },
    });
    // Transform and return the articles
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
```

## Building for Production

### Web
```bash
npm run web
npx expo export:web
```
The production build will be in the `web-build` directory.

### iOS
1. Install EAS CLI: `npm install -g eas-cli`
2. Configure: `eas build:configure`
3. Build: `eas build --platform ios`

### Android
1. Install EAS CLI: `npm install -g eas-cli`
2. Configure: `eas build:configure`
3. Build: `eas build --platform android`

## Customization

### Theme Colors
Update the color scheme in the component styles:
- Primary color: `#4CAF50` (green) - represents positivity and growth
- Background: `#f5f5f5` (light gray)
- Text: `#333` (dark gray)

### News Sources
Modify `src/services/newsService.js` to add or change news sources and filtering criteria.

### User Preferences
Extend the preferences in `src/services/authService.js` to add more customization options.

## Future Enhancements

- [ ] Backend API for authentication and data persistence
- [ ] Push notifications for breaking positive news
- [ ] Bookmarking favorite articles
- [ ] Sharing articles on social media
- [ ] Multiple language support
- [ ] Dark mode theme
- [ ] News categories and filtering
- [ ] Offline support with data caching
- [ ] User comments and community features

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For issues, questions, or contributions, please open an issue on GitHub.

---

Made with ❤️ for spreading positivity
 
