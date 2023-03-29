import express from "express";
import beginController from "../controller/beginController";
import chosethicknesscontroller from "../controller/chosethicknesscontroller";
import chosetopiningcontroller from "../controller/chosetopiningcontroller";
import homecontroller from "../controller/homecontroller";
import paymentcontroller from "../controller/paymentcontroller";
import sizecontroller from "../controller/sizecontroller";
import successcontroller from "../controller/successcontroller";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", beginController.getbeginPage);
  router.get(
    "/chosethickness.ejs",
    chosethicknesscontroller.getchosethicknessPage
  );
  router.get(
    "/chosetopining.ejs",
    chosetopiningcontroller.getchosetopiningPage
  );
  router.get("/home.ejs", homecontroller.gethomePage);
  router.get("/payment.ejs", paymentcontroller.getpaymentPage);
  router.get("/size.ejs", sizecontroller.getsizePage);
  router.get("/success.ejs", successcontroller.getsuccessPage);

  return app.use("/", router);
};

export default initWebRoute;
