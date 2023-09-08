import express from 'express';
import {getAll, create, getOne, remove, update, login} from '../controllers/userControllers.js';
import validatorjwt from '../utils/validatorJwt.js'

const userRouter = express.Router();


userRouter.route('/')
    .get(validatorjwt, getAll)
    .post(create);

userRouter.route('/:id')
    .get(getOne)
    .delete(validatorjwt, remove)
    .put(validatorjwt, update);

userRouter.route('/login')
    .post(login)


export default userRouter;