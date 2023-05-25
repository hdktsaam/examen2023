const express = require("express");
const ratingController = require("../controllers/ratingController");

const router = express.Router();

router
  .route("/")
  .get(ratingController.getRating)
  .post(ratingController.addRating);

router.route("/:id").get(ratingController.getRatingByCourse);

module.exports = router;
