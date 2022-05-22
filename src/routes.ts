/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import AnswerController from '../src/controllers/answer.controller';
import ProfileController from '../src/controllers/profile.controller';

const routes = Router();
routes.post('/answer', AnswerController.create);
routes.get('/answer', AnswerController.read);
routes.delete('/answer', AnswerController.delete);

routes.post('/profile', ProfileController.create);
routes.get('/profile', ProfileController.read);
routes.delete('/profile', ProfileController.delete);
export default routes;
