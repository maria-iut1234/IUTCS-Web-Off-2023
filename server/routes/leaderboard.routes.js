import express from 'express';
import {
  createLeaderboardEntry,
  getAllLeaderboardEntries,
  getLeaderboardEntryById,
  updateLeaderboardEntryById,
  deleteLeaderboardEntryById,
} from '../controllers/leaderboard.controller.js';

const router = express.Router();

router.post('/createLeaderboardEntry', createLeaderboardEntry);

router.get('/getAllLeaderboardEntries', getAllLeaderboardEntries);

router.get('/getLeaderboardEntryById/:id', getLeaderboardEntryById);

router.put('/updateLeaderboardEntry/:id', updateLeaderboardEntryById);

router.delete('/deleteLeaderboardEntry/:id', deleteLeaderboardEntryById);

export default router;
