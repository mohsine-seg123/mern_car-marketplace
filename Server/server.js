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
