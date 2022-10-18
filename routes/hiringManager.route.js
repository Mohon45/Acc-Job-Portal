const express = require("express");
const router = express.Router();
const hiringController = require("../controllers/hiringManager.controller");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");

router.post(
  "/jobs",
  verifyToken,
  authorization("hiring-manager", "admin"),
  hiringController.createJob
);
router.get(
  "/manager/jobs",
  verifyToken,
  hiringController.getAllJobsSpecificManager
);

module.exports = router;
