const { Router } = require('express');
const SessionController = require('./controllers/SessionController');
const OrganizationController = require('./controllers/OrganizationController');
const session = require('./config/session');


const routes = Router();

routes.post('/Register', SessionController.Register);
routes.post('/Createorg', OrganizationController.Create);
routes.get('/ListOrgs', session.User, OrganizationController.List);
routes.post('/Login', SessionController.Login)

module.exports = routes;