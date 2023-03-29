// const express = require('express')
import express from "express";

import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";

const app = express();
const port = 8080;

//set up view engine
configViewEngine(app);

// init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
