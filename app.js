const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello, This is Microsoft Assignment Server");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "Port Waiting");
});
