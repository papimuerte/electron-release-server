/**
 * Docker environment settings
 */

module.exports = {

  models: {
    datastore: 'postgresql',
    migrate: 'alter',
    dataEncryptionKeys: {
      // DEKs should be 32 bytes long, and cryptographically random.
      // You can generate such a key by running the following:
      //   require('crypto').randomBytes(32).toString('base64')
      default: process.env['DATA_ENCRYPTION_KEY'],
    }
  },

  port: 80,

  log: {
    level: process.env['LOG_LEVEL']
  },

  auth: {
    static: {
      username: process.env['APP_USERNAME'],
      password: process.env['APP_PASSWORD']
    }
  },
  appUrl: process.env['APP_URL'],
  datastores: {
    postgresql: {
      adapter: 'sails-postgresql',
      host: process.env['DB_HOST'], //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('@')[1].split(':')[0],
      port: process.env['DB_PORT'], //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('@')[1].split(':')[1].split('/')[0],
      user: process.env['DB_USERNAME'], //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('@')[0].split(':')[1].split('/')[2],
      password: process.env['DB_PASSWORD'], //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('@')[0].split(':')[2],
      database: process.env['DB_NAME'] //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('/')[3]
    }
  },
  jwt: {
    // Recommended: 63 random alpha-numeric characters
    // Generate using: https://www.grc.com/passwords.htm
    token_secret: process.env['TOKEN_SECRET'],
  },
  files: {
    dirname: process.env['ASSETS_PATH'] || '/tmp/',
  },
  session: {
    // Recommended: 63 random alpha-numeric characters
    // Generate using: https://www.grc.com/passwords.htm
    secret: process.env['TOKEN_SECRET'],
    database: process.env['DB_NAME'], //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('/')[3],
    host: process.env['DB_HOST'], //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('@')[1].split(':')[0],
    user: process.env['DB_USERNAME'], //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('@')[0].split(':')[1].split('/')[2],
    password: process.env['DB_PASSWORD'], //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('@')[0].split(':')[2],
    port: process.env['DB_PORT'] //|| process.env['DATABASE_URL'] && process.env['DATABASE_URL'].split('@')[1].split(':')[1].split('/')[0]
  }

};
