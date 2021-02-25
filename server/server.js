const { json } = require("body-parser");

init = () => {
  //Initialising server

  const express = require("express");
  const bodyParser = require("body-parser");
  var app = express();

  app.use(express.json());
	app.use(express.urlencoded({
		extended: true
	}))

  app.get("/", (rq, rs) => {
    rs.send("Test");
  });
};

module.exports = {
  init: init,
};
