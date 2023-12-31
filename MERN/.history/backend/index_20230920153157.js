const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());

app.get('/products',(req,res))

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});


app.listen()