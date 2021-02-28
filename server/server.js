init = () => {
  //Initialising server

  const express = require("express");
  var app = express();
  const cors = require("cors");
  const path = __dirname + "/views/";
  var corsOptions = {
    origin: "http://localhost:8081",
  };

  app.use(express.static(path));
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.get("/", function (req, res) {
    res.sendFile(path + "index.html");
  });

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
};

module.exports = {
  init: init,
};
