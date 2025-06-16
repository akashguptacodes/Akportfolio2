const express = require('express');
require('dotenv').config();
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors({
  origin: true,        // allows all origins
  credentials: true,   // if you want to support cookies or sessions
}));
app.use(express.json());
app.use('/api/contact',contactRoutes);

const PORT = process.env.PORT||5000;
app.listen(PORT, ()=>{
    console.log("Server started");
});