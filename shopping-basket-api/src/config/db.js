const mongoose = require('mongoose');
mongoose.connect(process.env.DB_STRING)
    .then(() => {
        console.log('MongoDB: Connected');
    }).catch((err) => {
        console.log('MongoDB: Failed to connect ->',err);
    });