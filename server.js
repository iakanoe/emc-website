const sass_middleware = require('node-sass-middleware');
const express = require('express');
const app = express();

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.use(sass_middleware({
    src: __dirname + "/src",
    dest: __dirname + "/src",
    debug: true
}));

app.use(express.static(__dirname + "/src"));
