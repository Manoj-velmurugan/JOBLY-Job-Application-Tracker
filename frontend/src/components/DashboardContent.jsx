import React, { useEffect, useState } from "react";
import robot from "../assets/robot.png";
import api from "../api";
import { FaFilter, FaEllipsisV } from "react-icons/fa";
import AddJobPopup from "./AddJobPopup";
import { jwtDecode } from "jwt-decode";
import ApplicationDetails from "./ApplicationDetails";

const DashboardContent = () => {
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showAddJobPopup, setShowAddJobPopup] = useState(false);
  const [editJobData, setEditJobData] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [userName, setUserName] = useState(""); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserName(decoded.name);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []); 

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const fetchJobs = async (status = "") => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get(
        `/applications${status ? `?status=${status}` : ""}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs(statusFilter);
  }, [statusFilter]);

  const handleAddOrEditJob = async (jobData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("User not logged in");

      const decoded = jwtDecode(token);
      const userId = decoded.id;

      if (editJobData) {
        const res = await api.put(
          `/applications/${editJobData._id}`,
          { ...jobData, userId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setJobs((prev) =>
          prev.map((job) => (job._id === editJobData._id ? res.data : job))
        );
      } else {
        const res = await api.post(
          "/applications",
          { ...jobData, userId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setJobs((prev) => [res.data, ...prev]);
      }

      setEditJobData(null);
      setShowAddJobPopup(false);
    } catch (err) {
      console.error("Error adding/editing job:", err);
      if (err.response) {
        console.error("Server validation error:", err.response.data);
      }
    }
  };

  const handleEdit = (job) => {
    setEditJobData(job);
    setShowAddJobPopup(true);
    setActiveDropdown(null);
  };

  const handleView = (job) => {
    setSelectedApplication(job);
    setActiveDropdown(null);
  };

  const handleDelete = async (jobToDelete) => {
    if (window.confirm(`Are you sure you want to delete the application for ${jobToDelete.company}?`)) {
      try {
        const token = localStorage.getItem("token");
        await api.delete(`/applications/${jobToDelete._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs((prevJobs) =>
          prevJobs.filter((job) => job._id !== jobToDelete._id)
        );
        setActiveDropdown(null);
      } catch (err) {
        console.error("Error deleting job:", err);
      }
    } else {
      setActiveDropdown(null);
    }
  };

  const handleBack = () => {
    setSelectedApplication(null);
  };

  if (selectedApplication) {
    return (
      <div className="flex-1 px-8 py-8">
        <div className="bg-white rounded-xl shadow-md">
          <ApplicationDetails application={selectedApplication} onBack={handleBack} />
        </div>
      </div>
    );
  }

  const statuses = ["Applied", "Interview", "Offer", "Rejected"];

  return (
    <div className="flex-1 px-8 py-8 flex flex-col space-y-8 overflow-y-auto">
      <div className="bg-indigo-600 rounded-xl p-8 flex justify-between items-center text-white shadow-lg">
        <div>
          <h2 className="text-3xl font-bold mb-2">{`Good Morning, ${userName}!`}</h2>
          <p className="text-indigo-100 mb-4">
            Let's organize your job hunt and land that dream role!
          </p>
          <button
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-50 transition"
            onClick={() => {
              setEditJobData(null);
              setShowAddJobPopup(true);
            }}
          >
            Add Job
          </button>
          <AddJobPopup
            isOpen={showAddJobPopup}
            onClose={() => setShowAddJobPopup(false)}
            onSave={handleAddOrEditJob}
            jobData={editJobData}
          />
        </div>
        <img
          src={robot}
          alt="Dashboard Robot"
          className="h-32"
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 relative flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Application Status
          </h3>
          <div className="relative">
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaFilter size={16} />
            </button>
            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                {statuses.map((status) => (
                  <div
                    key={status}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700 text-sm"
                    onClick={() => {
                      setStatusFilter(status);
                      setShowFilterDropdown(false);
                    }}
                  >
                    {status}
                  </div>
                ))}
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 text-sm"
                  onClick={() => {
                    setStatusFilter("");
                    setShowFilterDropdown(false);
                  }}
                >
                  Clear Filter
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between text-gray-500 text-sm border-b pb-2 mb-2 pr-2">
          <div className="w-1/4 font-semibold">Company Name</div>
          <div className="w-1/4 font-semibold">Designation</div>
          <div className="w-1/4 font-semibold">Date Applied</div>
          <div className="w-1/4 font-semibold">Status</div>
          <div className="w-12"></div>
        </div>

        <div className="flex-1 pr-2">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div
                key={job._id}
                className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none relative"
              >
                <div className="w-1/4 text-gray-700">{job.company}</div>
                <div className="w-1/4 text-gray-700">{job.position}</div>
                <div className="w-1/4 text-gray-700">
                  {new Date(job.dateApplied).toLocaleDateString()}
                </div>
                <div className="w-1/4 text-gray-700">{job.status}</div>

                <div className="w-12 text-right relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-500 cursor-pointer"
                  >
                    <FaEllipsisV />
                  </button>

                  {activeDropdown === index && (
                    <div
                      className={`absolute right-0 w-40 bg-white border rounded-md shadow-lg z-20 ${
                        jobs.length - index <= 3 ? "bottom-full mb-1" : "top-full mt-1"
                      }`}
                    >
                      <div
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700 text-sm"
                        onClick={() => handleView(job)}
                      >
                        View Full Details
                      </div>
                      <div
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700 text-sm"
                        onClick={() => handleEdit(job)}
                      >
                        Edit
                      </div>
                      <div
                        className="px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600 text-sm"
                        onClick={() => handleDelete(job)}
                      >
                        Delete
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">
              No job applications found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;