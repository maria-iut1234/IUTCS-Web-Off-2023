import express from 'express';
import {
  createAdmin,
  getAllAdmins,
  getAdminById,
  adminSignin,
  updateAdminById,
  deleteAdminById,
} from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/createAdmin', createAdmin);

router.get('/getAllAdmins', getAllAdmins);

router.get('/getAdminById/:id', getAdminById);

router.post('/adminSignin', adminSignin);

router.put('/updateAdmin/:id', updateAdminById);

router.delete('/deleteAdmin/:id', deleteAdminById);

export default router;
