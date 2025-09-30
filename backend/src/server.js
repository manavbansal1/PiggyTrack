import express from 'express';
import dotenv from 'dotenv';
import { sql } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoutes from './routes/transactionsRoute.js';
import { startServer } from './config/db.js';

dotenv.config();

const app = express();
app.use(rateLimiter);
app.use(express.json()); 


const PORT = process.env.PORT || 5001;

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
