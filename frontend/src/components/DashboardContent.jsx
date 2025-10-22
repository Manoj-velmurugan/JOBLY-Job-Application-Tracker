import React from "react";
import robot from "../assets/robot.png";

const DashboardContent = () => {
    return (
        <div className="flex-1 px-8 py-8 flex flex-col space-y-8">
            <div className="bg-indigo-600 rounded-xl p-8 flex justify-between items-center text-white shadow-lg">
                <div>
                    <h2 className="text-3xl font-bold mb-2">
                        <h2>Good Morning Manoj!</h2>
                    </h2>
                    <p className="text-indigo-100 mb-4">
                        Let's organize your job hunt and land that dream role!
                    </p>
                    <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-50 transition">
                        Add Job
                    </button>
                </div> 
                <img src={ robot } alt="Dashboard Robot" className="h-32 w-auto hidden md-block" />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Application Status
                </h3>

                <div className="flex justify-between text-gray-500 text-sm border-b pb-2 mb-2">
                    <div className="w-1/3 font-semibold">Company Name</div>
                    <div className="w-1/3 font-semibold">Designation</div>
                    <div className="w-11/3 font-semibold">Status</div>
                </div>

                {["Google", "Microsoft", "Amazon"].map((company, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none">
                        <div className="w-1/3 text-gray-700">{company}</div>
                        <div className="w-1/3 text-gray-700">Software Engineer</div>
                        <div className="w-1/3 text-right text-green-600">In Progress</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardContent;