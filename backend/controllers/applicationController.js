const Application = require("../models/Application");
const mongoose = require("mongoose");

// Create a new job application
const addApplication = async (req, res) => {
  try {
    const { userId, company, position, status, dateApplied, notes } = req.body;

    if (!userId || !company || !position || !status || !dateApplied) {
      return res
        .status(400)
        .json({ message: "User ID, company, position, status, and dateApplied are required" });
    }

    const validStatuses = ["Applied", "Interview", "Offer", "Rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const appDate = new Date(dateApplied);
    const today = new Date();
    if (appDate > today) {
      return res.status(400).json({ message: "Application date cannot be in the future" });
    }

    const newApplication = await Application.create({
      user: userId,
      company,
      position,
      status,
      dateApplied,
      notes,
    });

    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getApplications = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { status } = req.query;

    let query = { user: userId };
    if (status) query.status = status;

    const applications = await Application.find(query).sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch single application by ID
const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid application ID" });
    }

    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update an application
const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid application ID" });
    }

    const updatedApp = await Application.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedApp) return res.status(404).json({ message: "Application not found" });

    res.status(200).json(updatedApp);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete an application
const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid application ID" });
    }

    const deletedApp = await Application.findByIdAndDelete(id);
    if (!deletedApp) return res.status(404).json({ message: "Application not found" });

    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  addApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
};
