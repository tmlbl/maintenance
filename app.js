var app = require('express')();

app.get('/logo.png', function (req, res) {
  res.sendFile('/app/logo.png');
});

app.all('*', function (req, res) {
	res.sendFile('/app/index.html');
});

app.listen(3030, function () {
	console.log('listening on 3030');
});
