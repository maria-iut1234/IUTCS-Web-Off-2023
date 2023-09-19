import Achievement from '../models/achievement.model.js';


// Create an Achievement
export const createAchievement = async (req, res, next) => {
  try {
    // Retrieving data from the request body
    const { title, awards, description, date, competition, teamMembers } = req.body;

    // Creating a new achievement
    const newAchievement = new Achievement({
      title,
      awards,
      description,
      date,
      competition,
      teamMembers,
    });

    // Saving the new achievement to the database
    const savedAchievement = await newAchievement.save();

    return res.status(200).json(savedAchievement);
  } catch (err) {
    next(err);
  }
};


// Get All Achievements
export const getAllAchievements = async (req, res, next) => {
  try {
    // Fetch all achievements from the database
    const achievements = await Achievement.find();

    return res.status(200).json(achievements);
  } catch (err) {
    next(err);
  }
};

// Get a single achievement by ID
export const getAchievementById = async (req, res, next) => {
  try {
    const achievement = await Achievement.findById(req.params.id);

    // If the achievement is not found
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    return res.status(200).json(achievement);
  } catch (err) {
    next(err);
  }
};

// Updating an achievement by ID
export const updateAchievementById = async (req, res, next) => {
  try {
    const achievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // If the achievement is not found
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    return res.status(200).json(achievement);
  } catch (err) {
    next(err);
  }
};

// Deleting an achievement by ID
export const deleteAchievementById = async (req, res, next) => {
  try {
    const achievement = await Achievement.findByIdAndRemove(req.params.id);

    // If the achievement is not found
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    return res.status(200).json({ message: 'Achievement deleted' });
  } catch (err) {
    next(err);
  }
};
