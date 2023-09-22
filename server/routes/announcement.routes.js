import express from 'express';
import {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncementById,
  deleteAnnouncementById,
} from '../controllers/announcement.controller.js';

const router = express.Router();

router.post('/createAnnouncement', createAnnouncement);

router.get('/getAllAnnouncements', getAllAnnouncements);

router.get('/getAnnouncementById/:id', getAnnouncementById);

router.put('/updateAnnouncement/:id', updateAnnouncementById);

router.delete('/deleteAnnouncement/:id', deleteAnnouncementById);

export default router;
