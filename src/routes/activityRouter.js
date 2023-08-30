import { getAllIt, createIt, getOneIt, removeIt, updateIt } from '../controllers/activityControllers.js';
import express from 'express';

const activityRouter = express.Router();

activityRouter.route('/')
    .get(getAllIt)
    .post(createIt);

    activityRouter.route('/:id')
    .get(getOneIt)
    .delete(removeIt)
    .put(updateIt);

export default activityRouter;