import Committee from '../models/committee.model.js';


// Create a Committee Member
export const createCommitteeMember = async (req, res, next) => {
  try {
    const { committee_id, name, position, photoUrl } = req.body;

    const newCommitteeMember = new Committee({
      committee_id,
      name,
      position,
      photoUrl,
    });

    const savedCommitteeMember = await newCommitteeMember.save();

    return res.status(200).json(savedCommitteeMember);
  } catch (err) {
    next(err);
  }
};


// Get All Committee Members
export const getAllCommitteeMembers = async (req, res, next) => {
  try {
    const committeeMembers = await Committee.find();

    return res.status(200).json(committeeMembers);
  } catch (err) {
    next(err);
  }
};


// Get a single Committee Member by ID
export const getCommitteeMemberById = async (req, res, next) => {
  try {
    const committeeMember = await Committee.findById(req.params.id);

    if (!committeeMember) {
      return res.status(404).json({ message: 'Committee member not found' });
    }

    return res.status(200).json(committeeMember);
  } catch (err) {
    next(err);
  }
};


// Update a Committee Member by ID
export const updateCommitteeMemberById = async (req, res, next) => {
  try {
    const committeeMember = await Committee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!committeeMember) {
      return res.status(404).json({ message: 'Committee member not found' });
    }

    return res.status(200).json(committeeMember);
  } catch (err) {
    next(err);
  }
};


// Delete a Committee Member by ID
export const deleteCommitteeMemberById = async (req, res, next) => {
  try {
    const committeeMember = await Committee.findByIdAndRemove(req.params.id);

    if (!committeeMember) {
      return res.status(404).json({ message: 'Committee member not found' });
    }

    return res.status(200).json({ message: 'Committee member deleted' });
  } catch (err) {
    next(err);
  }
};
