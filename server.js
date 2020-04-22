const sass_middleware = require('node-sass-middleware');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(sass_middleware({
    src: __dirname + "/src",
    dest: __dirname + "/src",
    debug: true
}));

app.use(express.static(__dirname + "/src"));

const server = app.listen(PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
