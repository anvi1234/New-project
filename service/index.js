const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var multer  = require('multer');
var upload = multer({ dest: '/tmp/'});
//create express app
const app = express();
//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse requests of content-type - application/json
app.use(bodyParser.json());


// to enable cors
app.use(cors())
//alternate way to enable cors in api.
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// Configuring the database
const dbConfig = require('./dbconfig/userdb');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });




    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
      });
      app.post('/upload', upload.single('file'), function(req, res) {
        var file = 'uploads' + '/' + req.file.originalname;
        fs.rename(req.file.path, file, function(err) {
          if (err) {
            res.send(500);
          } else {
            res.json({
              message: 'File uploaded successfully',
              filename: req.originalname
            });
          }
        });
      });
      

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to user application" });
});
require('./route/user.route')(app);
// listen for requests
app.listen(8800, () => {
    console.log("Server is listening on port 8800");
});

