import Leaderboard from '../models/leaderboard.model.js';


// Create a Leaderboard Entry
export const createLeaderboardEntry = async (req, res, next) => {
  try {
    const { leaderboard_id, participantName, university, contest, rank } = req.body;

    const newLeaderboardEntry = new Leaderboard({
      leaderboard_id,
      participantName,
      university,
      contest,
      rank,
    });

    const savedLeaderboardEntry = await newLeaderboardEntry.save();

    return res.status(200).json(savedLeaderboardEntry);
  } catch (err) {
    next(err);
  }
};


// Get All Leaderboard Entries
export const getAllLeaderboardEntries = async (req, res, next) => {
  try {
    const leaderboardEntries = await Leaderboard.find();

    return res.status(200).json(leaderboardEntries);
  } catch (err) {
    next(err);
  }
};


// Get a single Leaderboard Entry by ID
export const getLeaderboardEntryById = async (req, res, next) => {
  try {
    const leaderboardEntry = await Leaderboard.findById(req.params.id);

    if (!leaderboardEntry) {
      return res.status(404).json({ message: 'Leaderboard entry not found' });
    }

    return res.status(200).json(leaderboardEntry);
  } catch (err) {
    next(err);
  }
};


// Update a Leaderboard Entry by ID
export const updateLeaderboardEntryById = async (req, res, next) => {
  try {
    const leaderboardEntry = await Leaderboard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!leaderboardEntry) {
      return res.status(404).json({ message: 'Leaderboard entry not found' });
    }

    return res.status(200).json(leaderboardEntry);
  } catch (err) {
    next(err);
  }
};


// Delete a Leaderboard Entry by ID
export const deleteLeaderboardEntryById = async (req, res, next) => {
  try {
    const leaderboardEntry = await Leaderboard.findByIdAndRemove(req.params.id);

    if (!leaderboardEntry) {
      return res.status(404).json({ message: 'Leaderboard entry not found' });
    }

    return res.status(200).json({ message: 'Leaderboard entry deleted' });
  } catch (err) {
    next(err);
  }
};
