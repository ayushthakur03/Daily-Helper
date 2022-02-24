const mongoose = require('mongoose');

//connecting it
mongoose.connect('mongodb://localhost:27017/to_do_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connection to mongoose for to do succesful!!');
});