import React, { useState } from "react";

const Dashboard = () => {
    const [jobs, setJobs] = useState([
        {
          id: 1,
          jobTitle: "Software Engineer",
          company: "xAI",
          status: "Applied",
          dateApplied: "2025-03-20",
        },
        {
          id: 2,
          jobTitle: "Data Analyst",
          company: "SpaceX",
          status: "Interview",
          dateApplied: "2025-03-18",
        },
        {
          id: 3,
          jobTitle: "Product Manager",
          company: "Tesla",
          status: "Offer",
          dateApplied: "2025-03-15",
        },
        {
          id: 4,
          jobTitle: "Designer",
          company: "Neuralink",
          status: "Rejected",
          dateApplied: "2025-03-10",
        },
      ]);
    
      const [filter, setFilter] = useState("All");
      const [showForm, setShowForm] = useState(false);
      const [newJob, setNewJob] = useState({
        jobTitle: "",
        company: "",
        status: "Applied",
        dateApplied: "",
      });
    
      const filteredJobs =
        filter === "All" ? jobs : jobs.filter((job) => job.status === filter);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewJob((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleAddJob = (e) => {
        e.preventDefault();
        const jobToAdd = {
          id: jobs.length + 1,
          ...newJob,
        };
        setJobs([...jobs, jobToAdd]);
        setNewJob({ jobTitle: "", company: "", status: "Applied", dateApplied: "" });
        setShowForm(false);
      };
    
      return (
        <div className="min-h-screen bg-gray-100 text-black p-6 font-sans">
          <h1 className="text-4xl font-extrabold mb-6 text-center tracking-tight">
            Job Application Tracker
          </h1>
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {/* Job Listings */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
    
              {/* Status Filters */}
              <div className="flex gap-3 mb-6 flex-wrap">
                {["All", "Applied", "Interview", "Offer", "Rejected"].map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => setFilter(status)}
                      className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                        filter === status
                          ? "bg-black text-white"
                          : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                    >
                      {status}
                    </button>
                  )
                )}
              </div>
    
              {/* Job Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200 text-left">
                      <th className="p-3 font-semibold">Job Title</th>
                      <th className="p-3 font-semibold">Company</th>
                      <th className="p-3 font-semibold">Status</th>
                      <th className="p-3 font-semibold">Date Applied</th>
                      <th className="p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredJobs.map((job) => (
                      <tr
                        key={job.id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="p-3">{job.jobTitle}</td>
                        <td className="p-3">{job.company}</td>
                        <td className="p-3">{job.status}</td>
                        <td className="p-3">{job.dateApplied}</td>
                        <td className="p-3 flex gap-2">
                          <button className="text-black hover:text-gray-600 underline transition-colors duration-150">
                            Edit
                          </button>
                          <button className="text-black hover:text-gray-600 underline transition-colors duration-150">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
    
              {/* Add Application Button and Form */}
              <button
                onClick={() => setShowForm(!showForm)}
                className="mt-6 bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                {showForm ? "Cancel" : "Add Application"}
              </button>
    
              {showForm && (
                <form
                  onSubmit={handleAddJob}
                  className="mt-4 flex flex-col gap-4 bg-gray-50 p-4 rounded-md shadow-inner"
                >
                  <input
                    type="text"
                    name="jobTitle"
                    value={newJob.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Job Title"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    value={newJob.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <select
                    name="status"
                    value={newJob.status}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  <input
                    type="date"
                    name="dateApplied"
                    value={newJob.dateApplied}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 self-start"
                  >
                    Save
                  </button>
                </form>
              )}
            </div>
    
            {/* Resume Upload */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4">Upload Resume</h2>
              <input
                type="file"
                className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                accept=".pdf,.doc,.docx"
              />
              <button className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200">
                Upload
              </button>
            </div>
          </div>
        </div>
      );
    };
export default Dashboard;