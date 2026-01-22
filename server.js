const express = require('express');
const path = require('path');
const { calculateServiceCharge } = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// API endpoint to calculate service charge
app.post('/api/calculate', (req, res) => {
  try {
    const { amount } = req.body;

    if (amount === undefined || amount === null || amount === '') {
      return res.status(400).json({ error: 'Amount is required' });
    }

    const numAmount = parseFloat(amount);

    if (isNaN(numAmount)) {
      return res.status(400).json({ error: 'Amount must be a valid number' });
    }

    const result = calculateServiceCharge(numAmount);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// For Vercel serverless deployment
module.exports = app;

// For local development
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Service Charge Calculator running on port ${PORT}`);
  });
}
