const mongoose = require('mongoose');

const carImageSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    src: { type: String, required: true }, // publicId Cloudinary
  },
  { _id: false },
);

const carPropertiesSchema = new mongoose.Schema(
  {
    motor: { type: String, required: true },
    range: { type: String, default: 'N/A' },
    acceleration: { type: String, default: 'N/A' },
    autonomy: { type: String, default: 'N/A' },
    batteryCapacity: { type: String, default: 'N/A' },
    fastCharge: { type: String, default: 'N/A' },

    // optionnel (pour Ferrari etc.)
    power: { type: String, default: 'N/A' },
    topSpeed: { type: String, default: 'N/A' },
    capacity: { type: String, default: 'N/A' },
    type: { type: String, default: 'N/A' },
  },
  { _id: false },
);

const carSchema = new mongoose.Schema(
  {
    // si tu veux garder ton id frontend
    id: { type: Number, unique: true, index: true },

    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },

    // tu peux garder "$79,990" en string, mais mieux en Number
    price: { type: String, required: true },

    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewsCount: { type: Number, default: 0 },

    availability: {
      type: String,
      enum: [
        'In stock',
        'Available',
        'Pre-order',
        'Limited availability',
        'Sold out',
        'Used / Discontinued',
      ],
      default: 'Available',
    },

    description: { type: String, required: true, trim: true },

    properties: { type: carPropertiesSchema, required: true },

    // image principale (publicId Cloudinary)
    image: { type: String, required: true },

    // galerie
    images: { type: [carImageSchema], default: [] },
  },
  { collection: 'cars', timestamps: true },
);

module.exports = mongoose.model('Car', carSchema);
