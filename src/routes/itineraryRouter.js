import { getAllIt, createIt, getOneIt, removeIt, updateIt } from '../controllers/itineraryControllers.js';
import express from 'express';

const itineraryRouter = express.Router();

itineraryRouter.route('/')
    .get(getAllIt)
    .post(createIt);

itineraryRouter.route('/:id')
    .get(getOneIt)
    .delete(removeIt)
    .put(updateIt);

export default itineraryRouter;