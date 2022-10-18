const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidate.controller");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");

router.get(
  "/jobs",
  verifyToken,
  authorization("candidate"),
  candidateController.getAllJobs
);
router.get(
  "/jobs/:id",
  verifyToken,
  authorization("candidate"),
  candidateController.getJobDetailsById
);
router.post(
  "/jobs/:id/apply",
  verifyToken,
  authorization("candidate"),
  candidateController.applyJob
);

module.exports = router;
