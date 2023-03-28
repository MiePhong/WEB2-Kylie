import express from "express";
import homeController from "../controller/homeController";
import newController from "../controller/newController";
import VelvetLipKitsController from "../controller/VelvetLipKitsController";
import bestSellersController from "../controller/bestSellersController";
import lipKitsController from "../controller/lipKitsController";
import liquidLipSticksController from "../controller/liquidLipSticksController";
import lipGlossesController from "../controller/lipGlossesController";
import lipBlushesController from "../controller/lipBlushesController";
import lipShineLacquersController from "../controller/lipShineLacquersController";
import lipLinersController from "../controller/lipLinersController";
import lipCrayonsController from "../controller/lipCrayonsController";
import lipCareController from "../controller/lipCareController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/KylieCosmetics/new.ejs", newController.getNewPage);
  router.get(
    "/KylieCosmetics/VelvetLipKits.ejs",
    VelvetLipKitsController.getVelvetLipKitsPage
  );
  router.get(
    "/KylieCosmetics/bestSellers.ejs",
    bestSellersController.getBestSellersPage
  );
  router.get("/KylieCosmetics/lipKits.ejs", lipKitsController.getLipKitsPage);
  router.get(
    "/KylieCosmetics/liquidLipSticks.ejs",
    liquidLipSticksController.getLiquidLipSticksPage
  );
  router.get(
    "/KylieCosmetics/lipGlosses.ejs",
    lipGlossesController.getLipGlossesPage
  );
  router.get(
    "/KylieCosmetics/lipBlushes.ejs",
    lipBlushesController.getLipBlushesPage
  );
  router.get(
    "/KylieCosmetics/lipShineLacquers.ejs",
    lipShineLacquersController.getLipShineLacquersPage
  );
  router.get(
    "/KylieCosmetics/lipLiners.ejs",
    lipLinersController.getLipLinersPage
  );
  router.get(
    "/KylieCosmetics/lipCrayons.ejs",
    lipCrayonsController.getLipCrayonsPage
  );
  router.get("/KylieCosmetics/lipCare.ejs", lipCareController.getLipCarePage);

  return app.use("/", router);
};
export default initWebRoute;
