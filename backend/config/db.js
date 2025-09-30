import {neon} from '@neondatabase/serverless';
import dotenv from 'dotenv/config';

// Initialize the connection to the database
export const sql = neon(process.env.DATABASE_URL);