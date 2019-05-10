
// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/dist'));

// app.all('*', (req, res) => {
//   res.status(200).sendFile(__dirname + '/dist/index.html');
// });

// app.listen(process.env.PORT || 8080);

//install ekspress
const express = require('express');
const path = requre('path');

const app = express();

//serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/weblanjutheroku'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/weblanjutheroku/index.html'));
});

//start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);