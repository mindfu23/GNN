import axios from 'axios';

/**
 * News Service for fetching positive news articles
 * This is a mock implementation that can be replaced with a real news API
 * such as NewsAPI, GNews API, or a custom backend service
 */

// Mock data for demonstration
const mockPositiveNews = [
  {
    id: '1',
    title: 'Scientists Discover New Renewable Energy Source',
    summary: 'Researchers have developed a groundbreaking method to harness energy from ocean waves, potentially providing clean power to millions.',
    url: 'https://example.com/news/1',
    source: 'Science Daily',
    publishedAt: new Date().toISOString(),
    imageUrl: 'https://via.placeholder.com/400x200/4CAF50/ffffff?text=Renewable+Energy',
  },
  {
    id: '2',
    title: 'Community Raises $1 Million for Local Hospital',
    summary: 'Local residents came together to raise funds for a new children\'s wing, exceeding their goal within just two weeks.',
    url: 'https://example.com/news/2',
    source: 'Community News',
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    imageUrl: 'https://via.placeholder.com/400x200/2196F3/ffffff?text=Community',
  },
  {
    id: '3',
    title: 'New Technology Helps Clean Ocean Plastic',
    summary: 'An innovative device successfully removes tons of plastic waste from the ocean, marking a significant victory for environmental conservation.',
    url: 'https://example.com/news/3',
    source: 'Environmental Times',
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    imageUrl: 'https://via.placeholder.com/400x200/00BCD4/ffffff?text=Ocean+Cleanup',
  },
  {
    id: '4',
    title: 'Global Literacy Rates Reach All-Time High',
    summary: 'UNESCO reports that worldwide literacy rates have reached historic levels thanks to education initiatives across developing nations.',
    url: 'https://example.com/news/4',
    source: 'Education Weekly',
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    imageUrl: 'https://via.placeholder.com/400x200/FF9800/ffffff?text=Education',
  },
  {
    id: '5',
    title: 'Endangered Species Population Doubles',
    summary: 'Conservation efforts pay off as the population of a once-endangered species has doubled in the last five years.',
    url: 'https://example.com/news/5',
    source: 'Wildlife Conservation',
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    imageUrl: 'https://via.placeholder.com/400x200/8BC34A/ffffff?text=Wildlife',
  },
];

/**
 * Fetch positive news articles
 * In production, this would call a real news API with sentiment analysis
 * @returns {Promise<Array>} Array of news articles
 */
export const fetchPositiveNews = async () => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPositiveNews);
    }, 1000);
  });
};

/**
 * Fetch news from a real API (example using NewsAPI structure)
 * Uncomment and configure when ready to use a real API
 * 
 * const NEWS_API_KEY = 'your-api-key-here';
 * const NEWS_API_URL = 'https://newsapi.org/v2/everything';
 * 
 * export const fetchPositiveNewsFromAPI = async () => {
 *   try {
 *     const response = await axios.get(NEWS_API_URL, {
 *       params: {
 *         q: 'positive OR success OR breakthrough OR achievement',
 *         sortBy: 'publishedAt',
 *         language: 'en',
 *         apiKey: NEWS_API_KEY,
 *       },
 *     });
 *     
 *     return response.data.articles.map((article, index) => ({
 *       id: String(index),
 *       title: article.title,
 *       summary: article.description,
 *       url: article.url,
 *       source: article.source.name,
 *       publishedAt: article.publishedAt,
 *       imageUrl: article.urlToImage,
 *     }));
 *   } catch (error) {
 *     console.error('Error fetching news:', error);
 *     throw error;
 *   }
 * };
 */

/**
 * Search news by keyword
 * @param {string} keyword - Search term
 * @returns {Promise<Array>} Filtered news articles
 */
export const searchNews = async (keyword) => {
  const allNews = await fetchPositiveNews();
  const lowerKeyword = keyword.toLowerCase();
  
  return allNews.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerKeyword) ||
      article.summary.toLowerCase().includes(lowerKeyword)
  );
};
