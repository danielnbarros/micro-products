const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
];

app.get("/", (req, res) => {
  res.status(200).json(products);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Products listening on port", port);
});
