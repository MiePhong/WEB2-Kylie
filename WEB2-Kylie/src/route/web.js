import express from "express";
import homeController from "../controller/homeController";
import newController from "../controller/newController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/new.ejs", newController.getNewPage);
  return app.use("/", router);
};
export default initWebRoute;
