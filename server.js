const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Rushikesh Mahajan\n');
    
    // Log your name to the console
    console.log("Your Name");
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
