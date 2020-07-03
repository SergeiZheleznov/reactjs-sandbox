
// Import express framework
const express = require('express');
const http = require("http");
const socketIo = require("socket.io");
// Import middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
// Import routes
const productsRouter = require('./routes/products-route');
const index = require("./routes/index");
// Setup default port
const PORT = process.env.PORT || 4000;
// Create express app
const app = express();

const cart = {
  items: []
};

// Implement middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
const io = socketIo.listen(server);

io.on("connection", (socket) => {
  socket.emit("ProductsInCart", JSON.stringify(cart));
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root: __dirname });
  });
}
app.get('/cart/add/:product', (req, res) => {
  const productId = req.params.product;
  cart.items.push(productId);
  io.sockets.emit('ProductsInCart', JSON.stringify(cart));
  res.send('OK');
});

app.get('/cart/clear', (req, res) => {
  cart.items = [];
  io.sockets.emit('ProductsInCart', JSON.stringify(cart));
  res.send('OK');
});

app.use('/products', productsRouter);
app.use(index);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
