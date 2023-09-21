import express from 'express';
import {
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivityById,
  deleteActivityById,
} from '../controllers/activity.controller.js';

const router = express.Router();

router.post('/createActivity', createActivity);

router.get('/getAllActivities', getAllActivities);

router.get('/getActivityById/:id', getActivityById);

router.put('/updateActivity/:id', updateActivityById);

router.delete('/deleteActivity/:id', deleteActivityById);

export default router;
