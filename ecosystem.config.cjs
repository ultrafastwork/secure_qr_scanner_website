module.exports = {
  apps: [{
    name: 'secure-qr-scanner-web',
    script: 'node_modules/vinxi/bin/cli.mjs',
    args: 'start',
    env_production: {
      NODE_ENV: 'production',
      PORT: 7800
    }
  }]
};
