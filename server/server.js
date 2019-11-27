
const http = require('http');

const requestHandler = (request, response)=>{
    response.setHeader('Access-Control-Allow-Methods', 'POST');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    console.log("Hello", request.url);
    let body = '';
    request.on('data', stream => {
        body += stream.toString(); // convert Buffer to string
    });
    request.on('end', () => {
        console.log('Testing:', body);
        response.end('ok');
    });
    // response.end("Nodejs server");
}

const myServer = http.createServer(requestHandler);
myServer.listen(3000, (err)=>{
    console.log("Listening");
})