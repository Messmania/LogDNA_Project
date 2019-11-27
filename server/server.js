
const http = require('http');

const requestHandler = (request, response) => {
    response.setHeader('Access-Control-Allow-Methods', 'POST');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    console.log(request.method, "request arrived");
    if (request.method == 'POST') {
        let body = '';
        request.on('data', stream => {
            body += stream.toString(); // convert Buffer to string
        });
        request.on('end', () => {
            response.end('OK');
        });
    }
}

const myServer = http.createServer(requestHandler);
myServer.listen(3000, (err) => {
    console.log("Listening");
})