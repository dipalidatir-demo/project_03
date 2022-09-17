const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://dipalidatit-project:1epbeEqP4NFreEba@cluster0.tzfsd9f.mongodb.net/dipali1?retryWrites=true&w=majority")
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
app.use('/', route);
app.listen( 3000, function () {
    console.log('Express app running on port ' + (3000))
});
