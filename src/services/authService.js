/**
 * Mock authentication service
 * In production, this would connect to a real backend authentication system
 */

// Mock user storage (in production, use AsyncStorage or SecureStore)
let currentUser = null;
let users = [];

/**
 * Sign up a new user
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} name - User name
 * @returns {Promise<Object>} User object
 */
export const signUp = async (email, password, name) => {
  // Simulate API delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if user already exists
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        reject(new Error('User already exists'));
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        email,
        name,
        createdAt: new Date().toISOString(),
        preferences: {
          categories: ['all'],
          emailNotifications: true,
        },
      };

      users.push(newUser);
      currentUser = newUser;
      resolve(newUser);
    }, 1000);
  });
};

/**
 * Sign in an existing user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User object
 */
export const signIn = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.email === email);
      if (!user) {
        reject(new Error('Invalid credentials'));
        return;
      }

      currentUser = user;
      resolve(user);
    }, 1000);
  });
};

/**
 * Sign out the current user
 * @returns {Promise<void>}
 */
export const signOut = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      currentUser = null;
      resolve();
    }, 500);
  });
};

/**
 * Get the current user
 * @returns {Object|null} Current user or null
 */
export const getCurrentUser = () => {
  return currentUser;
};

/**
 * Check if user is authenticated
 * @returns {boolean} Authentication status
 */
export const isAuthenticated = () => {
  return currentUser !== null;
};

/**
 * Update user preferences
 * @param {Object} preferences - User preferences
 * @returns {Promise<Object>} Updated user object
 */
export const updatePreferences = async (preferences) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!currentUser) {
        reject(new Error('No user logged in'));
        return;
      }

      currentUser.preferences = {
        ...currentUser.preferences,
        ...preferences,
      };

      resolve(currentUser);
    }, 500);
  });
};
