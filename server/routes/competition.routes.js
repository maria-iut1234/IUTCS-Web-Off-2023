import express from 'express';
import {
  createCompetition,
  getAllCompetitions,
  getCompetitionById,
  updateCompetitionById,
  deleteCompetitionById,
} from '../controllers/competition.controller.js';

const router = express.Router();

router.post('/createCompetition', createCompetition);

router.get('/getAllCompetitions', getAllCompetitions);

router.get('/getCompetitionById/:id', getCompetitionById);

router.put('/updateCompetition/:id', updateCompetitionById);

router.delete('/deleteCompetition/:id', deleteCompetitionById);

export default router;
