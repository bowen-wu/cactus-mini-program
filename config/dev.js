const config = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    BASE_URL: JSON.stringify('https://api.imcactus.com'),
    BASE_PREFIX: JSON.stringify('/api')
  },
  mini: {},
  h5: {}
};

module.exports = config;
