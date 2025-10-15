var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
 
  var ua = (req.headers["user-agent"] || "").toLowerCase();
  var isMobile = /\b(mobile|android|iphone|ipad|ipod|iemobile|wpdesktop)\b/.test(ua);

  console.log(req); //comment

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    var title = isMobile ? "My Page (Mobile)" : "My Page (Desktop)";
    var heading = isMobile ? "Welcome, Mobile User!" : "Welcome, Desktop User!";

    var html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
      </head>
      <body>
        <h1>Blake Murphy</h1>
        <h2>${heading}</h2>
        <p>Hello! I’m a student who enjoys web development, but hates front-end coding. Who cares what things look like?</p>
        <p>Hobbies: coding, reading, parenting.</p>
      </body>
      </html>`;

    res.end(html);
  } else {
    
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404</h1><p>Page not found.</p>");
  }
}).listen(port, function() {
  console.log(`Node server is running on port ${port}...`);
});
