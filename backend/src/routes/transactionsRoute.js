import express from 'express';
import { sql } from '../config/db.js';

const router = express.Router();

router.post('/', async (req, res) => {

    // Need to get data from req.body 
    try {
        const { user_id, title, amount, category } = req.body;
        // Check if all required fields are present
        if (!user_id || !title || amount === undefined || !category) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const result = await sql`INSERT INTO transactions (user_id, title, amount, category) VALUES (${user_id}, ${title}, ${amount}, ${category}) RETURNING *`;
        console.log('Inserted transaction:',result);
        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error inserting transaction', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        console.log('Fetching transactions for user:', userId);
        const result = await sql`SELECT * FROM transactions WHERE user_id = ${userId} ORDER BY created_at DESC`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching transactions', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (isNaN(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid transaction ID' });
        }

        console.log('Deleting transaction with id:', id);

        const result = await sql`DELETE FROM transactions WHERE id = ${id} RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        console.error('Error deleting transaction', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/summary/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        console.log('Fetching summary for user:', userId);
        const result = await sql`SELECT 
            COALESCE(SUM(amount), 0) AS balance,
            COALESCE(SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END), 0) AS income,
            COALESCE(SUM(CASE WHEN amount < 0 THEN amount ELSE 0 END), 0) AS expenses
        FROM transactions
        WHERE user_id = ${userId}`;

        res.status(200).json(result[0]);
    }
    catch (error) {
        console.error('Error fetching summary', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;