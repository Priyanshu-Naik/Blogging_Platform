import busboy from 'busboy'; 
import { MongoClient, GridFSBucket } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); 

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const mongoURI = `mongodb+srv://${username}:${password}@cluster1.9xqeuub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

export const uploadFile = async (req, res) => {
  try {
    const bb = busboy({ headers: req.headers });

    const client = new MongoClient(mongoURI);
    await client.connect();
    const db = client.db();
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });

    let fileUploaded = false;

    bb.on('file', (fieldname, file, info) => {
      const { filename } = info;
      const uploadStream = bucket.openUploadStream(filename);
      file.pipe(uploadStream);
      fileUploaded = true;

      uploadStream.on('finish', () => {
        if (!res.headersSent) {
          res.status(200).json({
            message: 'File uploaded successfully',
            filename: filename,
            imageUrl: `http://localhost:8000/file/${filename}`
          });
        }
      });

      uploadStream.on('error', (err) => {
        console.error('Error uploading file:', err);
        if (!res.headersSent) {
          res.status(500).json({ error: 'Upload failed' });
        }
      });
    });

    bb.on('finish', () => {
      if (!fileUploaded && !res.headersSent) {
        res.status(400).json({ error: 'No file uploaded' });
      }
    });

    req.pipe(bb);

  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};