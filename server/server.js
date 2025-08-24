const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // <-- import cors here
const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Serve React build (optional if using Netlify for frontend)
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/view-logs', (req, res) => {
  res.sendFile(path.join(__dirname, 'v.txt'));
});


// Log visitor info
app.get('/log-visitor', (req, res) => {
  const visitorIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const browserInfo = req.headers['user-agent'];
  const referrer = req.headers['referer'] || 'Direct visit';
  const time = new Date().toISOString();
  const logLine = `IP: ${visitorIP}, Browser: ${browserInfo}, Referrer: ${referrer}, Time: ${time}\n`;
  fs.appendFile(path.join(__dirname, 'v.txt'), logLine, (err) => {
    if (err) console.error(err);
  });
  res.send('Visitor logged!');
});

// Optional: fallback to React index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
