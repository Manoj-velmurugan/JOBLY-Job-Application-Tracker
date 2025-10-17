const { application } = require("express");
const Application = require("../models/Application");

// new job application
const addApplication = async (req, res) => {
  try {
    const { userId, company, position, status, dateApplied, notes } = req.body;

    if (!userId || !company || !position || !status || !dateApplied) {
      return res
        .status(400)
        .json({ message: "Company, position and UserID are required" });
    }

    const validStatuses = ["Applied", "Interview", "Offer", "Rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const appDate = new Date(dateApplied);
    const today = new Date();

    const appYear = appDate.getFullYear();
    const appMonth = appDate.getMonth();
    const appDay = appDate.getDate();

    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

   
    if (
      appYear > todayYear ||
      (appYear === todayYear && appMonth > todayMonth) ||
      (appYear === todayYear && appMonth === todayMonth && appDay > todayDay)
    ) {
      return res
        .status(400)
        .json({ message: "Application date cannot be in the future" });
    }

    const newAppl = await Application.create({
      user: userId,
      company,
      position,
      status,
      dateApplied,
      notes,
    });

    res.status(201).json(newAppl);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// List all applications
const getApplications = async (req, res) => {
  try {
    const { userId } = req.params;
    const { status } = req.query;

    let query = { user: userId };
    if (status) {
      query.status = status;
    }

    const applications = await Application.find(query).sort({
      createdAt: -1,
    });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch single application by ID
const getApplicationsById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!require("mongoose").Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid application ID" });
    }

    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

// update the application
const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedApp = await Application.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedApp)
      return res.status(404).json({ message: "Application not found" });
    res.status(200).json(updatedApp);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete the application
const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedApp = await Application.findByIdAndDelete(id);
    if (!deletedApp)
      return res.status(404).json({ message: "Application not found" });
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  addApplication,
  getApplications,
  updateApplication,
  deleteApplication,
  getApplicationsById,
};
