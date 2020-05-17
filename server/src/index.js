const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares');
const mongoose  = require('mongoose');
require('dotenv').config();
const logRouter = require('./Routes/logRoutes');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.use('/api/logs',logRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
