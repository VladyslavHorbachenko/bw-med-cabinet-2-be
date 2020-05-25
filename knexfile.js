// Update with your config settings.


module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    connection: {
      filename: './database/medCabinet.sqlite3'
    }
  },
  pool:{
    afterCreate:(conn,done) => {
      conn.run("PRAGMA foreign_key = ON",done)
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "database/migrations",
    },
    seeds:{
      directory: __dirname +  "seeds"
    }
  }

}



