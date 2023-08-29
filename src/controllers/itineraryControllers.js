import Itinerary from '../models/itinerary.js';
import catchError from '../utils/catchError.js';

export const getAllIt = catchError(async (req, res) => {
    const itinerary = await Itinerary.find();
    return res.json(itinerary);
});
export const createIt = catchError(async (req, res) => {
    const itinerary = await Itinerary.create(req.body);
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
    const itinerary = await Itinerary.findByIdAndUpdate(id, req.body , { new: true })
    return res.json(itinerary);
});

//export default { getAllIt, createIt, getOneIt, removeIt, updateIt }