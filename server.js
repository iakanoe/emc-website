var sass_middleware = require('node-sass-middleware');
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/src"));

app.use(sass_middleware({
    src: __dirname + "/src",
    dest: __dirname + "/src",
    debug: true
}));

var server = app.listen(process.env.PORT || 8080, function() {
    console.log("Express running → PORT " + server.address().port);
});
