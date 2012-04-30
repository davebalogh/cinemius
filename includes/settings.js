var settings = {
  IMDB_KEY: 'b6cdaf68778e1b0b53e6900ee748cad3',
  IMDB_URL: 'api.themoviedb.org',
  SERVER_PORT: process.env.C9_PORT || process.env.PORT,
  SERVER_HOST: '0.0.0.0',
  DATABASE_USER: 'cine',
  DATABASE_PASSWORD: '123456A*',
  DATABASE_PORT: '8441',
  DATABASE_HOST: 'instance12442.db.xeround.com',
  MONGODB_MONGOLAB: 'mongodb://cine:123456A*@ds033067.mongolab.com:33067/cinemius'
};

exports.settings = settings;