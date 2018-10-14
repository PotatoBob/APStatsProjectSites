var http = require('http');
var fs = require('fs');

fs.readFile('./StatsCarnivalProjectSite.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(req, res) {  
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    }).listen(8080, '192.168.1.17');
});
console.log('Server started');