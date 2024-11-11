const mongoose = require("mongoose");

// Local MongoDB connection string (default port: 27017)
const db = 'mongodb://localhost:27017/grocery-webapp';

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connection successful');
})
.catch((e) => {
  console.log(`No connection: ${e}`);
});
