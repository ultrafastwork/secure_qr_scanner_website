module.exports = {
  apps: [{
    name: 'secure-qr-scanner-web',
    script: 'node_modules/.bin/vinxi',
    args: 'start',
    env_production: {
      NODE_ENV: 'production',
      PORT: 7800
    }
  }]
};
