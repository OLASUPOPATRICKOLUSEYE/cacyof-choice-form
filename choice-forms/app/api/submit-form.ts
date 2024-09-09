// submit-form.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { FormData } from '../types/types';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('your_database_name');
      const collection = db.collection('formSubmissions');

      // Validate and cast the request body
      const formData: FormData = req.body;

      // Insert the form data into MongoDB
      const result = await collection.insertOne(formData);

      res.status(201).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
