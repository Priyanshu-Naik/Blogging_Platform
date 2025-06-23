import express from 'express';

import { user_controller, login_User } from '../controller/user-controller.js';
import { uploadImage } from '../controller/image-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/signup', user_controller);
router.post('/login', login_User);


router.post('/file/upload',upload.single('file'), uploadImage);

export default router;