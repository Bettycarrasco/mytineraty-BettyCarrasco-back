import { getAllIt, createIt, getOneIt, removeIt, updateIt, readAllItineratyByCity } from '../controllers/itineraryControllers.js';
import express from 'express';

const itineraryRouter = express.Router();

itineraryRouter.route('/')
    .get(getAllIt)
    .post(createIt);

itineraryRouter.route('/:id')
    .get(getOneIt)
    .delete(removeIt)
    .put(updateIt);

itineraryRouter.route('/city/:city')
    .get(readAllItineratyByCity)


export default itineraryRouter;