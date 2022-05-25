const express = require("express");
const app = express();
const port = 3300;

app.get("/", (req, res) => {
  res.json({
      name:'Djabrail',
      firstName:'Magamadov',
      age:20
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
