import Activity from '../models/activity.js';
import catchError from '../utils/catchError.js';

export const getAllIt = catchError(async (req, res) => {
    const activity = await Activity.find();
    return res.json(activity);
});
export const createIt = catchError(async (req, res) => {
    
    const {itineraryId, likes, tematicHashtags, Comments, description} = req.body;
    const activity = await Activity.create({itineraryId, likes, tematicHashtags, Comments, description});
    return res.status(201).json(activity);
});
export const getOneIt = catchError(async (req, res) => {
    const { id } = req.params;
    const activity = await activity.findById(id);
    return res.json(activity);
});
export const removeIt = catchError(async (req, res) => {
    const { id } = req.params;
    await Activity.findByIdAndRemove(id);
    return res.sendStatus(204);
});
export const updateIt = catchError(async (req, res) => {
    const { id } = req.params;
    const {itineraryId, likes, tematicHashtags, Comments, description } = req.body;
    const activity = await Activity.findByIdAndUpdate(id, {itineraryId, likes, tematicHashtags, Comments, description} , { new: true })
    return res.json(activity);
});

export default { getAllIt, createIt, getOneIt, removeIt, updateIt }