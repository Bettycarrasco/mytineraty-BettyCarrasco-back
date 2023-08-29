import express from "express";
import cityRouter from "./city.router.js";
import itineraryRouter from "./itineraryRouter.js"

const router = express.Router();


router.use('/cities', cityRouter);
router.use('/itinerary', itineraryRouter);


export default router;