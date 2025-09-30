import express from 'express';
import dotenv from 'dotenv';
import { sql } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server after ensuring the database is ready
startServer().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
