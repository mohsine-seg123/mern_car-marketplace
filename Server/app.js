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

// ...existing code...
app.get("/api/cron/ping", async (req, res) => {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

  if (!process.env.CRON_SECRET || token !== process.env.CRON_SECRET) {
    return res.status(401).json({ ok: false, message: "Unauthorized" });
  }

  try {
    return res.status(200).json({ ok: true, ranAt: new Date().toISOString() });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
});
// ...existing code...

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
