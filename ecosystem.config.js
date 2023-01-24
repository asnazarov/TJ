module.exports = {
  apps: [{
    script: 'npm start',
    watch: '.'
  }],

  deploy: {
    production: {
      key: 'key.pem',
      user: 'asnnazfh',
      host: '62.113.100.32',
      ref: 'origin/main',
      repo: 'git@github.com:asnazarov/TJ.git',
      path: 'home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'ForwardAgent=yes'
    }
  }
};
