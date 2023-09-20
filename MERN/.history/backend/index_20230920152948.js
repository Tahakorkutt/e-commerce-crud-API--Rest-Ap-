const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
app.use(cors());
app.use()

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});


app.listen()