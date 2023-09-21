import Admin from '../models/admin.model.js';

// Create an Admin
export const createAdmin = async (req, res, next) => {
  try {
    const { admin_id, username, email, password, role } = req.body;

    const newAdmin = new Admin({
      admin_id,
      username,
      email,
      password,
      role,
    });

    const savedAdmin = await newAdmin.save();

    return res.status(200).json(savedAdmin);
  } catch (err) {
    next(err);
  }
};

// Get All Admins
export const getAllAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();

    return res.status(200).json(admins);
  } catch (err) {
    next(err);
  }
};

// Get a single Admin by ID
export const getAdminById = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.params.id);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    return res.status(200).json(admin);
  } catch (err) {
    next(err);
  }
};

// Update an Admin by ID
export const updateAdminById = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    return res.status(200).json(admin);
  } catch (err) {
    next(err);
  }
};

// Delete an Admin by ID
export const deleteAdminById = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndRemove(req.params.id);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    return res.status(200).json({ message: 'Admin deleted' });
  } catch (err) {
    next(err);
  }
};
