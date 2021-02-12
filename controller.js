// import db from './model.js';
const db = require('./model.js')

const controllerMeth = {};

controllerMeth.getPartners = (req, res, next) => {
    const partners = 'SELECT * FROM partners';
    db.query(partners)
      .then((result) =>{
          console.log(result)
          res.locals.people = result.rows;
          return next();
      }
      )
}

module.exports = controllerMeth;