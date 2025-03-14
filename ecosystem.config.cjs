module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: '.output/server/index.mjs',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
