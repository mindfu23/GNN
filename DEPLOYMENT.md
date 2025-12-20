# Deployment Guide - Good News Network

This guide provides instructions for deploying the Good News Network application to various platforms.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (for mobile builds)
- EAS CLI (for production builds)

## Web Deployment

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

1. **Build the web application:**
   ```bash
   npx expo export:web
   ```

2. **Deploy the `web-build` directory:**
   - **Netlify**: Drag and drop the `web-build` folder to Netlify
   - **Vercel**: Use the Vercel CLI to deploy the `web-build` directory
   - **GitHub Pages**: 
     ```bash
     npm install -g gh-pages
     gh-pages -d web-build
     ```

### Option 2: Custom Server

1. Build the application as shown above
2. Serve the `web-build` directory with any static file server:
   ```bash
   npx serve web-build
   ```

## iOS Deployment

### Development Build

1. **Install prerequisites:**
   ```bash
   npm install -g eas-cli
   eas login
   ```

2. **Configure EAS:**
   ```bash
   eas build:configure
   ```

3. **Build for iOS:**
   ```bash
   eas build --platform ios --profile development
   ```

### Production Build (App Store)

1. **Create production build:**
   ```bash
   eas build --platform ios --profile production
   ```

2. **Submit to App Store:**
   ```bash
   eas submit --platform ios
   ```

## Android Deployment

### Development Build

1. **Build for Android:**
   ```bash
   eas build --platform android --profile development
   ```

2. **Install on device:**
   - Download the APK from the build URL
   - Install on your Android device

### Production Build (Google Play)

1. **Create production build:**
   ```bash
   eas build --platform android --profile production
   ```

2. **Submit to Google Play:**
   ```bash
   eas submit --platform android
   ```

## Environment Configuration

### Setting up Environment Variables

Create a `.env` file in the root directory for sensitive data:

```env
NEWS_API_KEY=your-api-key-here
API_BASE_URL=https://api.example.com
```

### Production Configuration

Update `app.json` with production settings:

```json
{
  "expo": {
    "name": "Good News Network",
    "slug": "good-news-network",
    "version": "1.0.0",
    "extra": {
      "eas": {
        "projectId": "your-project-id"
      }
    }
  }
}
```

## Backend Integration

To connect to a real backend:

1. **Update API endpoints** in `src/services/newsService.js` and `src/services/authService.js`
2. **Add API authentication** (API keys, OAuth tokens, etc.)
3. **Implement error handling** for network failures
4. **Add data persistence** using AsyncStorage or SecureStore

Example backend integration:

```javascript
// src/services/newsService.js
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'https://api.yourbackend.com';
const API_KEY = process.env.NEWS_API_KEY;

export const fetchPositiveNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
```

## Continuous Integration/Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-web:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npx expo export:web
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./web-build
```

## Performance Optimization

### Web Optimization

1. **Enable compression** on your web server
2. **Use CDN** for static assets
3. **Implement lazy loading** for images
4. **Enable caching** headers

### Mobile Optimization

1. **Optimize images** using WebP format
2. **Minimize bundle size** by analyzing with:
   ```bash
   npx react-native-bundle-visualizer
   ```
3. **Use ProGuard** for Android builds (in `app.json`):
   ```json
   {
     "android": {
       "enableProguardInReleaseBuilds": true
     }
   }
   ```

## Monitoring & Analytics

Consider integrating:

- **Sentry** for error tracking
- **Google Analytics** or **Mixpanel** for user analytics
- **Firebase** for crash reporting

Example Sentry integration:

```bash
npm install @sentry/react-native
```

```javascript
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'your-sentry-dsn',
});
```

## Security Checklist

- [ ] Remove all console.log statements in production
- [ ] Store API keys securely (use environment variables)
- [ ] Enable HTTPS for all API calls
- [ ] Implement rate limiting on backend
- [ ] Add input validation and sanitization
- [ ] Use secure storage for sensitive data
- [ ] Implement proper authentication and authorization

## Troubleshooting

### Build Failures

- Clear cache: `expo start -c`
- Remove node_modules: `rm -rf node_modules && npm install`
- Update dependencies: `npx expo install --fix`

### Runtime Errors

- Check console logs in development
- Use React DevTools for debugging
- Review network requests in browser/device developer tools

## Support

For deployment issues:
- Check the [Expo documentation](https://docs.expo.dev/)
- Visit the [React Native documentation](https://reactnative.dev/)
- Review issues on the project GitHub repository

---

Good luck with your deployment! 🚀
