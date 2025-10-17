const protect = require("../middleware/authMiddleware");

const express = require("express");
const router = express.Router();

const {addApplication, getApplications, updateApplication, deleteApplication, getApplicationsById} = require("../controllers/applicationController");

router.post("/", protect, addApplication);
router.get("/:userId", protect, getApplications);
router.put("/:id", protect, updateApplication);
router.delete("/:id", protect, deleteApplication);
router.get("/single/:id", protect, getApplicationsById);

module.exports = router;