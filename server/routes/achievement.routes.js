import express from 'express';
import {
  createAchievement,
  getAllAchievements,
  getAchievementById,
  updateAchievementById,
  deleteAchievementById,
} from '../controllers/achievement.controller.js';

const router = express.Router();

router.post('/createAchievement', createAchievement);

router.get('/getAllAchievements', getAllAchievements);

router.get('/getAchievementById/:id', getAchievementById);

router.put('/updateAchievement/:id', updateAchievementById);

router.delete('/deleteAchievement/:id', deleteAchievementById);

export default router;
