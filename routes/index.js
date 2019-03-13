const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');

routes.use('/models', models);
routes.use('/cars', cars);

routes.get('/', (req, res) => {
  res.status(200).json( {message: 'To Work website: input /cars to view all avalible cars, put /models to view all models. After putting in either cars or models, input id for a specific type cars(1-6), models(1-3)'} );
});

module.exports = routes;
