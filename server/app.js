var express = require('express');
var app = express();

app.post('/aa', function(req, res) {
    res.send({ msg: 123 });
});
app.listen(3000);
