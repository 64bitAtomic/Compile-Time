const express = require("express");
const { engine } = require("express-handlebars");
const errorController = require("./controllers/error.controller");
const port = process.env.PORT || 3000;
const app = express();

// Set Handlebars as the template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Use blog routes
app.use(require("./routes/blog.routes"));
// use error Controller
app.use(errorController.getErrorPage);

// Start server
app.listen(port, () => {
  console.log(`Blog app running at http://localhost:${port}`);
});
