const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const latestRouter = require('./Routes/LatestRoutes');
const carRoutes = require('./Routes/carRoutes');
const contactRoutes = require('./Routes/contactRoutes');
const userRoutes = require('./Routes/userRoutes');
const globalErrorHandler = require('./Controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(express.json({ limit: '10kb' }));

app.use(cookieParser());


app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174','https://mern-car-marketplace-5rjd.vercel.app'],
    credentials: true,
  }),
);


const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});

app.use('/api', limiter);


app.use(morgan('dev'));

app.use('/api/latests', latestRouter);
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

app.all(/.*/, (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});


app.use(globalErrorHandler);

module.exports = app;  
