import Admin from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ErrorHandler } from '../utils/ErrorHandler.js';
import { sendMail } from '../utils/sendMail.js';
import bcrypt from 'bcrypt';

// Create an Admin
export const createAdmin = async (req, res, next) => {
  try {
    const { name, email, image, password } = req.body;
    const userEmail = await Admin.findOne({ email });
    if (userEmail) {
      // Send a custom error response with status 501
      return res.status(501).json({
        success: false,
        message: "Admin already exists!",
      });
    }

    const domain = email.split('@')[1];

    if (domain !== 'iut-dhaka.edu') {
      // Send a custom error response with status 502
      return res.status(509).json({
        success: false,
        message: "Not an IUT email!",
      });
    }
    // Hash the password
    const saltRounds = 10; // You can adjust the number of salt rounds as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Set the hashed password

    const admin = new Admin({
      username: name,
      email: email,
      password: hashedPassword,
      image: image,
      role: "Admin",
    });
    // console.log(admin);
    const savedAdmin = await admin.save();
    try {
      await sendMail({
        email: admin.email,
        subject: "Your New Account is Created",
        message: `Hello ${admin.username}. Your new account has been created.`,
      });

      res.status(201).json({
        success: true,
        message: `Mail sent to:- ${admin.email}!`,
      });

    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
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

export const adminSignin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    // const isPasswordValid = password === admin.password;

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create a JWT token
    const token = jwt.sign(
      {
        adminId: admin._id,
        isAdmin: true, // Include isAdmin field
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1h', // Adjust the token expiration time as needed
      }
    );

    // Return the JWT token as a response
    return res.status(200).json({ token });
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
