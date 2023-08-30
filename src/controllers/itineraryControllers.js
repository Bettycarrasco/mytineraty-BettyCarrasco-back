import Itinerary from '../models/itinerary.js';
import catchError from '../utils/catchError.js';

export const getAllIt = catchError(async (req, res) => {
    const itinerary = await Itinerary.find();
    return res.json(itinerary);
});
export const createIt = catchError(async (req, res) => {
    const {name, userName, price, duration, cityId, photoUser} = req.body;
    const itinerary = await Itinerary.create({name, userName, price, duration, cityId, photoUser});
    return res.status(201).json(itinerary);
});
export const getOneIt = catchError(async (req, res) => {
    const { id } = req.params;
    const itinerary = await Itinerary.findById(id);
    return res.json(itinerary);
});
export const removeIt = catchError(async (req, res) => {
    const { id } = req.params;
    await Itinerary.findByIdAndRemove(id);
    return res.sendStatus(204);
});
export const updateIt = catchError(async (req, res) => {
    const { id } = req.params;
    const {name, userName, price, duration, cityId, photoUser} = req.body;
    const itinerary = await Itinerary.findByIdAndUpdate(id, {name, userName, price, duration, cityId, photoUser} , { new: true })
    return res.json(itinerary);
});

export default { getAllIt, createIt, getOneIt, removeIt, updateIt }