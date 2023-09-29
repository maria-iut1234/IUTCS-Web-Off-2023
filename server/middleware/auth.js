import jwt from "jsonwebtoken";
import admin from "../model/admin.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";


export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.admin = await admin.findById(decoded.id);

    next();
};



export const isAdmin = async (req, res, next) => {
    try {
      // Fetch admin IDs from the MongoDB collection
      const adminDocs = await admin.find({}, '_id');
      const adminIds = adminDocs.map((doc) => doc._id);
  
      // Check if the user's ID is in the adminIds array
      if (!adminIds.includes(req.admin._id)) {
        return next(new ErrorHandler(`User is not an admin`));
      }
  
      // User is an admin, continue to the next middleware or route
      next();
    } catch (error) {
      return next(new ErrorHandler(`Error checking admin status: ${error.message}`));
    }
  };
