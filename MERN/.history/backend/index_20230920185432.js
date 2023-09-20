const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary');
const db = require('./config/db.js');
const product = require('./routes/product.js');
const user = require('./routes/user.js');

dotenv.config();
cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());

app.use('/', product);
app.use('/', product);

db();

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});
