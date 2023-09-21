import Activity from '../models/activity.model.js';


// Create an Activity
export const createActivity = async (req, res, next) => {
  try {
    const { activity_id, title, description, about, date, tags, location } = req.body;
    
    // Creating a new achievement
    const newActivity = new Activity({
      activity_id,
      title,
      description,
      about,
      date,
      tags,
      location,
    });

    const savedActivity = await newActivity.save();

    return res.status(200).json(savedActivity);
  } catch (err) {
    next(err);
  }
};


// Get All Activities
export const getAllActivities = async (req, res, next) => {
  try {
    const activities = await Activity.find();

    return res.status(200).json(activities);
  } catch (err) {
    next(err);
  }
};

// Get a single Activity by ID
export const getActivityById = async (req, res, next) => {
  try {
    const activity = await Activity.findById(req.params.id);

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    return res.status(200).json(activity);
  } catch (err) {
    next(err);
  }
};

// Updating an Activity by ID
export const updateActivityById = async (req, res, next) => {
  try {
    const activity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // If the activity is not found
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    return res.status(200).json(activity);
  } catch (err) {
    next(err);
  }
};

// Delete an Activity by ID
export const deleteActivityById = async (req, res, next) => {
  try {
    const activity = await Activity.findByIdAndRemove(req.params.id);

    // If the achievement is not found
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    return res.status(200).json({ message: 'Activity deleted' });
  } catch (err) {
    next(err);
  }
};
