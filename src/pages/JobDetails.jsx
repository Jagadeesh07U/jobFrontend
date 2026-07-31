import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    getJob();
  }, [id]);

  async function getJob() {
    try {
      const response = await api.get(`/jobs/${id}`);
      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!job) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="details">
      <img
        src={job.image}
        alt={job.title}
      />

      <h1>{job.title}</h1>

      <p>{job.description}</p>

      <h3>Company</h3>
      <p>{job.company}</p>

      <h3>Location</h3>
      <p>{job.location}</p>

      <h3>Job Type</h3>
      <p>{job.jobType || job.type || "Not specified"}</p>

      <h3>Experience</h3>
      <p>{job.experience || job.exp || "Not specified"}</p>

      <h3>Salary</h3>
      <p>₹ {job.salary}</p>

      <h3>Skills Required</h3>
      <ul>
        {Array.isArray(job?.skills) && job.skills.length > 0 ? (
          job.skills.map((skill, index) => <li key={index}>{skill}</li>)
        ) : (
          <li>{job.skillsRequired || job.skills || "Not specified"}</li>
        )}
      </ul>

      <h3>Qualification</h3>
      <p>{job.qualification || job.qualifications || "Not specified"}</p>

      <h3>Posted Date</h3>
      <p>{job.postedDate || job.createdAt || "Recently posted"}</p>

      <h3>Application Deadline</h3>
      <p>{job.deadline || job.applicationDeadline || "Open until filled"}</p>

      <h3>Contact Email</h3>
      <p>{job.email || job.contactEmail || "Not specified"}</p>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
}

export default JobDetails;