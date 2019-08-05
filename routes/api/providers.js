const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");
const slotsController = require("../../controllers/slotsController");
const providersController = require("../../controllers/providersController");
// Matches with "/api/provider"

router.route("/providers").post(providersController.create);

router
  .route("/providers/:id/appointments")
  .get(appointmentsController.findAllByProvider);

router
  .route("/providers/:providerId/slots/month/:month")
  .get(slotsController.findByProviderServiceMonth);
router
  .route("/providers/:id/slots/day")
  .get(slotsController.findByProviderServiceDay);


module.exports = router;
