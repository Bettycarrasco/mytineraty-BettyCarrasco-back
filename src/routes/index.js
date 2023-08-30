import express from "express";
import cityRouter from "./city.router.js";
import itineraryRouter from "./itineraryRouter.js"
import activityRouter from "./activityRouter.js";


const router = express.Router();


router.use('/cities', cityRouter);
router.use('/itinerary', itineraryRouter);
router.use('/activity',activityRouter);


export default router;