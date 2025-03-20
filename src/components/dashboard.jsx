import React, { useState } from "react";

const Dashboard = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobTitle: "Software Engineer",
      company: "xAI",
      location: "Remote",
      link: "https://xai.jobs/123",
      category: "Software Engineering",
      status: "Applied",
      dateApplied: "2025-03-20",
    },
    {
      id: 2,
      jobTitle: "Data Analyst",
      company: "SpaceX",
      location: "Hawthorne, CA",
      link: "https://spacex.com/careers/456",
      category: "Data Science",
      status: "Interview",
      dateApplied: "2025-03-18",
    },
    {
      id: 3,
      jobTitle: "Product Manager",
      company: "Tesla",
      location: "Fremont, CA",
      link: "https://tesla.com/jobs/789",
      category: "Software Engineering",
      status: "Offer",
      dateApplied: "2025-03-15",
    },
    {
      id: 4,
      jobTitle: "Designer",
      company: "Neuralink",
      location: "San Francisco, CA",
      link: "https://neuralink.com/careers/101",
      category: "Other",
      status: "Rejected",
      dateApplied: "2025-03-10",
    },
  ]);

  const [activeSection, setActiveSection] = useState("dashboard");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({
    jobTitle: "",
    company: "",
    location: "",
    link: "",
    category: "Software Developer",
    status: "Applied",
    dateApplied: "",
  });
  const [editJob, setEditJob] = useState(null);

  // Stats for Dashboard
  const totalApplications = jobs.length;
  const interviewsScheduled = jobs.filter((job) => job.status === "Interview").length;
  const offersReceived = jobs.filter((job) => job.status === "Offer").length;

  // Filter jobs for Applications section
  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.status === filter);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editJob) {
      setEditJob((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewJob((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    const jobToAdd = { id: jobs.length + 1, ...newJob };
    setJobs([...jobs, jobToAdd]);
    setNewJob({
      jobTitle: "",
      company: "",
      location: "",
      link: "",
      category: "Software Developer",
      status: "Applied",
      dateApplied: "",
    });
    setShowForm(false);
  };

  const handleEditJob = (job) => {
    setEditJob(job);
    setShowForm(true);
  };

  const handleUpdateJob = (e) => {
    e.preventDefault();
    setJobs(
      jobs.map((job) => (job.id === editJob.id ? { ...editJob } : job))
    );
    setEditJob(null);
    setShowForm(false);
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4">
        <h1 className="text-2xl font-bold mb-6">Job Tracker</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <button
                onClick={() => setActiveSection("dashboard")}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === "dashboard" ? "text-gray-400 font-semibold" : ""
                }`}
              >
                Dashboard
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => setActiveSection("applications")}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === "applications" ? "text-gray-400 font-semibold" : ""
                }`}
              >
                Applications
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => setActiveSection("resumes")}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === "resumes" ? "text-gray-400 font-semibold" : ""
                }`}
              >
                Resumes & Documents
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => setActiveSection("sources")}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === "sources" ? "text-gray-400 font-semibold" : ""
                }`}
              >
                Job Sources
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("settings")}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === "settings" ? "text-gray-400 font-semibold" : ""
                }`}
              >
                Settings
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeSection === "dashboard" && (
          <>
            <h2 className="text-3xl font-semibold mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-lg">Total Applications</h3>
                <p className="text-2xl font-bold">{totalApplications}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-lg">Interviews Scheduled</h3>
                <p className="text-2xl font-bold">{interviewsScheduled}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-lg">Offers Received</h3>
                <p className="text-2xl font-bold">{offersReceived}</p>
              </div>
            </div>
          </>
        )}

        {activeSection === "applications" && (
          <>
            <h2 className="text-3xl font-semibold mb-6">Applications</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              {/* Status Filters */}
              <div className="flex gap-3 mb-6 flex-wrap">
                {["All", "Applied", "Interview", "Offer", "Rejected", "Follow-up needed"].map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => setFilter(status)}
                      className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                        filter === status
                          ? "bg-white text-black"
                          : "bg-gray-700 text-white hover:bg-gray-600"
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
                    <tr className="bg-gray-700 text-left">
                      <th className="p-3 font-semibold">Job Title</th>
                      <th className="p-3 font-semibold">Company</th>
                      <th className="p-3 font-semibold">Location</th>
                      <th className="p-3 font-semibold">Category</th>
                      <th className="p-3 font-semibold">Status</th>
                      <th className="p-3 font-semibold">Date Applied</th>
                      <th className="p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredJobs.map((job) => (
                      <tr
                        key={job.id}
                        className="border-b border-gray-700 hover:bg-gray-600 transition-colors duration-150"
                      >
                        <td className="p-3">
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-400"
                          >
                            {job.jobTitle}
                          </a>
                        </td>
                        <td className="p-3">{job.company}</td>
                        <td className="p-3">{job.location}</td>
                        <td className="p-3">{job.category}</td>
                        <td className="p-3">{job.status}</td>
                        <td className="p-3">{job.dateApplied}</td>
                        <td className="p-3 flex gap-2">
                          <button
                            onClick={() => handleEditJob(job)}
                            className="text-white hover:text-gray-400 underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteJob(job.id)}
                            className="text-white hover:text-gray-400 underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add/Edit Button and Form */}
              <button
                onClick={() => {
                  setShowForm(!showForm);
                  if (showForm) setEditJob(null);
                }}
                className="mt-6 bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                {showForm ? "Cancel" : "Add Application"}
              </button>

              {showForm && (
                <form
                  onSubmit={editJob ? handleUpdateJob : handleAddJob}
                  className="mt-4 flex flex-col gap-4 bg-gray-700 p-4 rounded-md"
                >
                  <input
                    type="text"
                    name="jobTitle"
                    value={editJob ? editJob.jobTitle : newJob.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Job Title"
                    className="bg-gray-900 border border-gray-600 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    value={editJob ? editJob.company : newJob.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="bg-gray-900 border border-gray-600 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    value={editJob ? editJob.location : newJob.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="bg-gray-900 border border-gray-600 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <input
                    type="url"
                    name="link"
                    value={editJob ? editJob.link : newJob.link}
                    onChange={handleInputChange}
                    placeholder="Job Posting Link"
                    className="bg-gray-900 border border-gray-600 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <select
                    name="category"
                    value={editJob ? editJob.category : newJob.category}
                    onChange={handleInputChange}
                    className="bg-gray-900 border border-gray-600 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="Software Developer">Software Developer</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="IT Support">IT Support</option>
                    <option value="ML Engineer">ML Engineer</option>
                    <option value="Other">Other</option>
                  </select>
                  <select
                    name="status"
                    value={editJob ? editJob.status : newJob.status}
                    onChange={handleInputChange}
                    className="bg-gray-900 border border-gray-600 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Follow-up needed">Follow-up needed</option>
                  </select>
                  <input
                    type="date"
                    name="dateApplied"
                    value={editJob ? editJob.dateApplied : newJob.dateApplied}
                    onChange={handleInputChange}
                    className="bg-gray-900 border border-gray-600 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors duration-200 self-start"
                  >
                    {editJob ? "Update" : "Save"}
                  </button>
                </form>
              )}
            </div>
          </>
        )}

        {activeSection === "resumes" && (
          <h2 className="text-3xl font-semibold mb-6">Resumes & Documents (Coming Soon)</h2>
        )}

        {activeSection === "sources" && (
          <h2 className="text-3xl font-semibold mb-6">Job Sources (Coming Soon)</h2>
        )}

        {activeSection === "settings" && (
          <h2 className="text-3xl font-semibold mb-6">Settings (Coming Soon)</h2>
        )}
      </main>
    </div>
  );
};

export default Dashboard;