import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { ArrowLeft } from "lucide-react";

const ViewJobDetails = () => {
  const { id } = useParams(); // application ID from URL
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get(`/applications/single/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJob(res.data);
      } catch (err) {
        console.error("Error fetching job details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading...
      </div>
    );

  if (!job)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-500 mb-3">Job details not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-600 hover:text-blue-600 transition"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <h2 className="text-2xl font-bold mb-4 text-blue-700">{job.position}</h2>
      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">Company:</span> {job.company}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {job.status}
        </p>
        <p>
          <span className="font-semibold">Date Applied:</span>{" "}
          {new Date(job.dateApplied).toLocaleDateString()}
        </p>
        {job.notes && (
          <p>
            <span className="font-semibold">Notes:</span> {job.notes}
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewJobDetails;
