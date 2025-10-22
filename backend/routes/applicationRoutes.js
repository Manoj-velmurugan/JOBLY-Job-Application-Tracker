const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  addApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
} = require("../controllers/applicationController");

router.post("/", protect, addApplication);
router.get("/", protect, getApplications);
router.get("/single/:id", protect, getApplicationById);
router.put("/:id", protect, updateApplication);
router.delete("/:id", protect, deleteApplication);

module.exports = router;
