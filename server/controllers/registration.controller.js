import Registration from '../models/registration.model.js';


// Create a Registration Entry
export const createRegistrationEntry = async (req, res, next) => {
  try {
    const { registration_id, name, university, email, phone } = req.body;

    const newRegistrationEntry = new Registration({
      registration_id,
      name,
      university,
      email,
      phone,
    });

    const savedRegistrationEntry = await newRegistrationEntry.save();

    return res.status(200).json(savedRegistrationEntry);
  } catch (err) {
    next(err);
  }
};


// Get All Registration Entries
export const getAllRegistrationEntries = async (req, res, next) => {
  try {
    const registrationEntries = await Registration.find();

    return res.status(200).json(registrationEntries);
  } catch (err) {
    next(err);
  }
};


// Get a single Registration Entry by ID
export const getRegistrationEntryById = async (req, res, next) => {
  try {
    const registrationEntry = await Registration.findById(req.params.id);

    if (!registrationEntry) {
      return res.status(404).json({ message: 'Registration entry not found' });
    }

    return res.status(200).json(registrationEntry);
  } catch (err) {
    next(err);
  }
};


// Update a Registration Entry by ID
export const updateRegistrationEntryById = async (req, res, next) => {
  try {
    const registrationEntry = await Registration.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!registrationEntry) {
      return res.status(404).json({ message: 'Registration entry not found' });
    }

    return res.status(200).json(registrationEntry);
  } catch (err) {
    next(err);
  }
};


// Delete a Registration Entry by ID
export const deleteRegistrationEntryById = async (req, res, next) => {
  try {
    const registrationEntry = await Registration.findByIdAndRemove(req.params.id);

    if (!registrationEntry) {
      return res.status(404).json({ message: 'Registration entry not found' });
    }

    return res.status(200).json({ message: 'Registration entry deleted' });
  } catch (err) {
    next(err);
  }
};
