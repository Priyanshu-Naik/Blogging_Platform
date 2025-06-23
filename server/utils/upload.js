import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb+srv://${username}:${password}@cluster1.9xqeuub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`, 
  file: (req, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"]; 

    if (match.indexOf(file.mimetype) === -1) { 
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`
    };
  }
});

const upload = multer({ storage });
export default upload;