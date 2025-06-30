import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster1.9xqeuub.mongodb.net/?retryWrites=true&w=majority`;

export const getImage = async (req, res) => {
  try {
    // Option A: Reuse connection
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongoURI);
    }

    const bucket = new GridFSBucket(mongoose.connection.db, {
      bucketName: 'photos',
    });

    const downloadStream = bucket.openDownloadStreamByName(req.params.filename);

    // Optional: Set headers
    res.setHeader('Content-Type', 'image/jpeg');

    downloadStream.on('error', () => {
      return res.status(404).json({ error: 'File not found' });
    });

    downloadStream.pipe(res);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};