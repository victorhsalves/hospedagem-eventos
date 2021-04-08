const { Router } = require('express');
const SessionController = require('./controllers/SessionController');
const OrganizationController = require('./controllers/OrganizationController');

const routes = Router();

routes.post('/Register', SessionController.Register);
routes.post('/Createorg', OrganizationController.Create);
routes.post('/Login', SessionController.Login)

module.exports = routes;