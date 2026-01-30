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
    origin: 'http://localhost:5173',
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

app.use('/latests', latestRouter);
app.use('/users', userRoutes);
app.use('/cars',carRoutes);
app.use('/contacts',contactRoutes);

app.all(/.*/, (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});


app.use(globalErrorHandler);

module.exports = app;  