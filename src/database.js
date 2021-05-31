const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : 'mongodb+srv://Alan:alan.011292@cluster0.pmimh.mongodb.net/myFirstDB?retryWrites=true&w=majority';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB is connected');
});
