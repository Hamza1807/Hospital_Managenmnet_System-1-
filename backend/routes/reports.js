const express = require('express');
const router = express.Router();

// Mock example: Replace with your actual database query
router.get('/reports', (req, res) => {
  const reports = [
    {
      id: 1,
      patientName: 'John Doe',
      date: '2023-12-07',
      diagnosis: 'Flu',
      doctorName: 'Dr. Smith',
    },
    {
      id: 2,
      patientName: 'Jane Doe',
      date: '2023-12-06',
      diagnosis: 'Cough',
      doctorName: 'Dr. Taylor',
    },
  ];
  res.json(reports);
});

module.exports = router;
