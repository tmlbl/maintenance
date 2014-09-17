var app = require('express')();

app.get('/logo.png', function (req, res) {
  res.sendFile(__dirname + '/logo.png');
});

app.all('*', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3030, function () {
	console.log('listening on 3030');
});
