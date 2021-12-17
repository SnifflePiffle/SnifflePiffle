const express = require("express");
const port = 9103;
const bodyparser = require('body-parser')
const app = express()
const baseURL = '/interoperability/api';
app.use(bodyparser.json()) //for app.post & fetch body as json
app.listen(port,() => {
  console.log("hi");
});

app.get(baseURL,(req,res) =>{
  res.send("hello")
});

//load all endpoints
const PassesPerStation = require("./endpoints/PassesPerStation.js");
const PassesAnalysis = require("./endpoints/PassesAnalysis.js");
const PassesCost = require("./endpoints/PassesCost.js");
const ChargesBy = require("./endpoints/ChargesBy.js");
//const Healthcheck = require("./endpoints/healthcheck.js");
const ResetPasses = require("./endpoints/resetpasses.js");
const ResetStations = require("./endpoints/resetstations.js");
const ResetVehicles = require("./endpoints/resetvehicles.js");

//bind all endpoints to app router
app.use(baseURL, PassesPerStation);
app.use(baseURL, PassesAnalysis);
app.use(baseURL, PassesCost);
app.use(baseURL, ChargesBy);
//app.use(baseURL, Healthchceck);
app.use(baseURL, ResetPasses);
app.use(baseURL, ResetStations);
app.use(baseURL, ResetVehicles);
