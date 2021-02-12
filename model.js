const { Pool } = require('pg');

const PG_URI='postgres://lhuguwlw:NiofqKUwpMfy3F37N7dNhVH5zFm_COr9@ziggy.db.elephantsql.com:5432/lhuguwlw'; 

const pool = new Pool({
    connectionString: PG_URI
  });

  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };