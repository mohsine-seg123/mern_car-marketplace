// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// dotenv.config({ path: './config.env', quiet: true });
// const app = require('./app');

// mongoose.set('bufferCommands', false);

// async function startServer() {
//   const rawDb = process.env.DATABASE;
//   const rawPwd = process.env.DATABASE_PASSWORD || '';

//   if (!rawDb) throw new Error('DATABASE is missing');

//   const DB = rawDb.includes('<password>')
//     ? rawDb.replace('<password>', encodeURIComponent(rawPwd))
//     : rawDb;

//   await mongoose.connect(DB, { serverSelectionTimeoutMS: 8000 });
//   console.log('DB connection successful!');

//   const port = process.env.PORT || 3000;
//   app.listen(port, () => console.log(`App running on Port ${port}...`));
// }

// startServer().catch((err) => {
//   console.error('Startup error:', err.message);
//   process.exit(1);
// });

const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env", quiet: true });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(con=>{
    console.log('DB coonection successful!');
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
   console.log(`App runing on Port ${port}...`);
});

// process.on('unhandledRejection',(err)=>{
//   console.log(err.name,err.message);
//   console.log('UNHANDLED REJECTION! Shutting down');
//   server.close(()=>{
//      process.exit(1);
//   });
// });
