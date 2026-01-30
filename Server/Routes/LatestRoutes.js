const express = require("express");
const router = express.Router(); 
const LatestController = require("../Controllers/latestController");

router.route("/").get(LatestController.getAllLatests);

module.exports = router;
