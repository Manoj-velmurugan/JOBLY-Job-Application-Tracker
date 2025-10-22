import { ArrowLeft } from "lucide-react";

const ApplicationDetails = ({ application, onBack }) => {
  return (
    <div className="p-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <h2 className="text-2xl font-semibold mb-4">{application.position}</h2>
      <div className="space-y-2">
        <p><strong>Company:</strong> {application.company}</p>
        <p><strong>Status:</strong> {application.status}</p>
        <p><strong>Date Applied:</strong> {new Date(application.dateApplied).toLocaleDateString()}</p>
        {application.notes && (
          <p><strong>Notes:</strong> {application.notes}</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetails;
