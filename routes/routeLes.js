const express = require("express");
const lessenController = require("../controllers/lessenController");

const router = express.Router();

router
  .route("/:id")
  .get(lessenController.getLessen)
  .post(lessenController.addLes);

module.exports = router;
