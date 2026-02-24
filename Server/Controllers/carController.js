// const Car = require('../Models/carModel');
// const catchAsync=require('../utils/catchAsync');

// exports.getAllCars =catchAsync(async (req ,res)=>{
//          const cars=await Car.find();
//          res.status(200).json({
//            status: "success",
//            requestedAt: req.requestTime,
//            results: cars.length,
//            data: {
//              cars,
//            },
//          });
// });


const Car = require('../Models/carModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// ── GET ALL ──────────────────────────────────────────────────────────────────
// GET /api/cars
// GET /api/cars?category=Tesla&availability=Available
// GET /api/cars?sort=-price   (desc) | sort=price (asc)
// GET /api/cars?page=1&limit=10
exports.getAllCars = catchAsync(async (req, res) => {
  const queryObj = { ...req.query };

  // 1) Exclure les champs spéciaux
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((el) => delete queryObj[el]);

  // 2) Filtrage avancé (gte, gt, lte, lt)
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Car.find(JSON.parse(queryStr));

  // 3) Tri
  if (req.query.sort) {
    query = query.sort(req.query.sort.split(',').join(' '));
  } else {
    query = query.sort('-createdAt');
  }

  // 4) Sélection de champs
  if (req.query.fields) {
    query = query.select(req.query.fields.split(',').join(' '));
  }

  // 5) Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 100;
  query = query.skip((page - 1) * limit).limit(limit);

  const cars = await query;

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: cars.length,
    data: { cars },
  });
});

// ── GET ONE ──────────────────────────────────────────────────────────────────
// GET /api/cars/:id
exports.getCarById = catchAsync(async (req, res, next) => {
  const car = await Car.findById(req.params.id);

  if (!car) return next(new AppError('No car found with this ID', 404));

  res.status(200).json({
    status: 'success',
    data: { car },
  });
});

// ── CREATE ───────────────────────────────────────────────────────────────────
// POST /api/cars
exports.createCar = catchAsync(async (req, res) => {
  const car = await Car.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { car },
  });
});

// ── UPDATE ───────────────────────────────────────────────────────────────────
// PATCH /api/cars/:id
exports.updateCar = catchAsync(async (req, res, next) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // retourne le document mis à jour
    runValidators: true, // valide les champs modifiés
  });

  if (!car) return next(new AppError('No car found with this ID', 404));

  res.status(200).json({
    status: 'success',
    data: { car },
  });
});


// ── STATS (agrégation) ───────────────────────────────────────────────────────
// GET /api/cars/stats
exports.getCarStats = catchAsync(async (req, res) => {
  const stats = await Car.aggregate([
    {
      $group: {
        _id: '$category',
        totalCars: { $sum: 1 },
        avgRating: { $avg: '$rating' },
        totalReviews: { $sum: '$reviewsCount' },
        minRating: { $min: '$rating' },
        maxRating: { $max: '$rating' },
      },
    },
    { $sort: { avgRating: -1 } },
  ]);

  res.status(200).json({
    status: 'success',
    data: { stats },
  });
});




