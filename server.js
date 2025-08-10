const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors())
const connectToMongo = require('./db');
app.use(express.json());
connectToMongo().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})


app.use('/instagram/',require('./routes/LoginRoute'));