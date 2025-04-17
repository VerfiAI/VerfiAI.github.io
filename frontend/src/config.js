const config = {
    development: {
        API_BASE_URL: 'http://localhost:3002'
    },
    production: {
        API_BASE_URL: 'https://your-railway-app-name.up.railway.app'
    }
};

// Use the appropriate config based on the environment
const env = process.env.NODE_ENV || 'development';
export default config[env]; 