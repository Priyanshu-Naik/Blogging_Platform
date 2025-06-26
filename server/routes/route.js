import express from 'express';

import { user_controller, login_User } from '../controller/user-controller.js';
import { uploadFile } from '../controller/uploadController.js';
import { getImage } from '../controller/image-controller.js';

const router = express.Router();

router.post('/signup', user_controller);
router.post('/login', login_User);

router.post('/file/upload', uploadFile);
router.get('/file/:filename', getImage);

export default router;