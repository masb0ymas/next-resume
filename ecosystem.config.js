module.exports = {
  apps: [
    {
      name: 'fe_nexys_dev',
      script: 'npm',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'start',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        URL_ENV: 'staging',
      },
    },
  ],
}
