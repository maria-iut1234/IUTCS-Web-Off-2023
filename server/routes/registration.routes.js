import express from 'express';
import {
  createRegistrationEntry,
  getAllRegistrationEntries,
  getRegistrationEntryById,
  updateRegistrationEntryById,
  deleteRegistrationEntryById,
} from '../controllers/registration.controller.js';

const router = express.Router();

router.post('/createRegistrationEntry', createRegistrationEntry);

router.get('/getAllRegistrationEntries', getAllRegistrationEntries);

router.get('/getRegistrationEntryById/:id', getRegistrationEntryById);

router.put('/updateRegistrationEntry/:id', updateRegistrationEntryById);

router.delete('/deleteRegistrationEntry/:id', deleteRegistrationEntryById);

export default router;
