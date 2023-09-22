import express from 'express';
import {
  createCommitteeMember,
  getAllCommitteeMembers,
  getCommitteeMemberById,
  updateCommitteeMemberById,
  deleteCommitteeMemberById,
} from '../controllers/committee.controller.js';

const router = express.Router();

router.post('/createCommitteeMember', createCommitteeMember);

router.get('/getAllCommitteeMembers', getAllCommitteeMembers);

router.get('/getCommitteeMemberById/:id', getCommitteeMemberById);

router.put('/updateCommitteeMember/:id', updateCommitteeMemberById);

router.delete('/deleteCommitteeMember/:id', deleteCommitteeMemberById);

export default router;
