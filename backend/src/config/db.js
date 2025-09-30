import {neon} from '@neondatabase/serverless';
import dotenv from 'dotenv/config';

// Initialize the connection to the database
export const sql = neon(process.env.DATABASE_URL);

export async function startServer() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`

        console.log('Database connected and table ensured.');
    } catch (error) {
        console.error('Error initializing the db', error);
        process.exit(1); // Exit the process with an error code
    }

}