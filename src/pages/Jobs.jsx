import { useEffect, useState } from "react";
import api from "../services/api";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All");
  const [experience, setExperience] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    try {
      const response = await api.get("/jobs");
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteJob(id) {
    await api.delete(`/jobs/${id}`);

    setJobs(jobs.filter((job) => job.id !== id));
  }

  const filteredJobs = jobs.filter((job) => {
    const searchMatch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const typeMatch =
      jobType === "All" || job.jobType === jobType;

    const experienceMatch =
      experience === "All" ||
      job.experience === experience;

    return searchMatch && typeMatch && experienceMatch;
  });

  let finalJobs = [...filteredJobs];

  if (sort === "high") {
    finalJobs.sort((a, b) => b.salary - a.salary);
  }

  if (sort === "low") {
    finalJobs.sort((a, b) => a.salary - b.salary);
  }

  return (
    <>
      <h1 className="jobs-title">AVAILABLE  JOBS</h1>

      <Link to="/add-job" className="submit-btn">
        Add Job
      </Link>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Job"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option>All</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
        </select>

        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option>All</option>
          <option>Fresher</option>
          <option>1-3 Years</option>
          <option>3+ Years</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Select</option>
          <option value="high">High Salary</option>
          <option value="low">Low Salary</option>
        </select>
      </div>

      <div className="jobs">
        {finalJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDelete={deleteJob}
          />
        ))}
      </div>
    </>
  );
}

export default Jobs;