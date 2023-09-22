import Competition from '../models/competition.model.js';


// Create a Competition
export const createCompetition = async (req, res, next) => {
  try {
    const { competition_id, name, description, prizes, date } = req.body;

    const newCompetition = new Competition({
      competition_id,
      name,
      description,
      prizes,
      date,
    });

    const savedCompetition = await newCompetition.save();

    return res.status(200).json(savedCompetition);
  } catch (err) {
    next(err);
  }
};


// Get All Competitions
export const getAllCompetitions = async (req, res, next) => {
  try {
    const competitions = await Competition.find();

    return res.status(200).json(competitions);
  } catch (err) {
    next(err);
  }
};


// Get a single Competition by ID
export const getCompetitionById = async (req, res, next) => {
  try {
    const competition = await Competition.findById(req.params.id);

    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }

    return res.status(200).json(competition);
  } catch (err) {
    next(err);
  }
};


// Update a Competition by ID
export const updateCompetitionById = async (req, res, next) => {
  try {
    const competition = await Competition.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }

    return res.status(200).json(competition);
  } catch (err) {
    next(err);
  }
};


// Delete a Competition by ID
export const deleteCompetitionById = async (req, res, next) => {
  try {
    const competition = await Competition.findByIdAndRemove(req.params.id);

    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }

    return res.status(200).json({ message: 'Competition deleted' });
  } catch (err) {
    next(err);
  }
};
