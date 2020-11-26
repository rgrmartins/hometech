import { Request, Response, Router } from 'express';

import HomeController from './controllers/HomeController';

const routes = Router();

// TODO: Criar um Readme explicando sobre a aplicação e publicar na
routes.get('/', (_: Request, res: Response) => {
  res.send({ title: "Routes deu certo!"});
});

// Residências
routes.get('/houses', HomeController.getAll);
routes.post('/house', HomeController.createHouse);

export default routes;