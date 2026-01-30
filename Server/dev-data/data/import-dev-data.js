const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Latest= require("./../../Models/LatestModel");
const Car = require("./../../Models/carModel");
dotenv.config({ path: "./config.env", quiet: true });


const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then((con) => {
    console.log("DB coonection successful!");
  });


// const Latests = JSON.parse(
//   fs.readFileSync(`${__dirname}/latest.json`, "utf-8"),
// );

const Cars = JSON.parse(
  fs.readFileSync(`${__dirname}/cars.json`, 'utf-8'),
);


const importData = async () => {
  try {
    await Car.create(Cars);
    console.log('Data successfully loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};


// const importData = async () => {
//   try {
//     await Latest.create(Latests);
//     console.log("Data successfully loaded!");
//     process.exit();
//   } catch (err) {
//     console.log(err);
//   }
// };


if(process.argv[2]==='--import')
    importData();


