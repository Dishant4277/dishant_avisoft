import data from "./data.js";
import http from "http";

const server = http.createServer(requestHandler);

server.listen(8080, () => {
  console.log("Server running on port: 8080");
});

function requestHandler(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end("Json Typicode Dummy");
      break;

    case "/users":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(data.users));
      break;
    case "/photos":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(data.photos));
      break;
    case "/todos":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(data.todos));
      break;
    case "/comments":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(data.comments));
      break;
    case "/albums":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(data.albums));
      break;
    case "/posts":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(data.posts));
      break;
    default:
      res.writeHead(400);
      res.end("Invalid Request");
      break;
  }
}
