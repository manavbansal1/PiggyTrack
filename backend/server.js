import express from 'express';
import dotenv from 'dotenv';
import { sql } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoutes from './routes/transactionsRoute.js';

dotenv.config();

const app = express();
app.use(rateLimiter);
app.use(express.json()); 


const PORT = process.env.PORT || 5001;

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
    res.send('Welcome to the PiggyTrack API');
});

app.use('/api/transactions', transactionsRoutes);

// Start the server after ensuring the database is ready
startServer().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
