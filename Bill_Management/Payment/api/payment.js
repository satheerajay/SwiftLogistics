import { Router } from 'express';
import { query } from '../config/db.js'; // Ensure this imports the query function

const paymentRouter = Router();

// Handle payment request
paymentRouter.post('/payment', async (req, res) => {
  const { amount, userId } = req.body;

  try {
    // Assume you have a payments table in your PostgreSQL database
    const result = await query(
      'INSERT INTO payments (user_id, amount) VALUES ($1, $2) RETURNING *',
      [userId, amount]
    );

    res.status(201).json({
      message: 'Payment recorded successfully',
      payment: result.rows[0], // Return the newly created payment record
    });
  } catch (error) {
    console.error('Error recording payment:', error);
    res.status(500).json({ message: 'Error recording payment' });
  }
});

export { paymentRouter };
