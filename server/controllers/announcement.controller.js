import Announcement from '../models/announcement.model.js';


// Create an Announcement
export const createAnnouncement = async (req, res, next) => {
  try {
    const { announcement_id, title, description, about, date, tags } = req.body;

    const newAnnouncement = new Announcement({
      announcement_id,
      title,
      description,
      about,
      date,
      tags,
    });

    const savedAnnouncement = await newAnnouncement.save();

    return res.status(200).json(savedAnnouncement);
  } catch (err) {
    next(err);
  }
};


// Get All Announcements
export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();

    return res.status(200).json(announcements);
  } catch (err) {
    next(err);
  }
};


// Get a single Announcement by ID
export const getAnnouncementById = async (req, res, next) => {
  try {
    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    return res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};


// Update an Announcement by ID
export const updateAnnouncementById = async (req, res, next) => {
  try {
    const announcement = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    return res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};


// Delete an Announcement by ID
export const deleteAnnouncementById = async (req, res, next) => {
  try {
    const announcement = await Announcement.findByIdAndRemove(req.params.id);

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    return res.status(200).json({ message: 'Announcement deleted' });
  } catch (err) {
    next(err);
  }
};
