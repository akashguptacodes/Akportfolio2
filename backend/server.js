const express = require('express');
require('dotenv').config();
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors({
  origin: 'https://akportfolio2.vercel.app',
  // credentials: true,
}));

// app.options('*', cors());

app.use(express.json());
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started");
});
