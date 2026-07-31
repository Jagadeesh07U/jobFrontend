import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType:"",
    description: ""
  });

  useEffect(() => {
    getJob();
  }, []);

  async function getJob() {
    try {
      const response = await api.get(`/jobs/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching job:", error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/jobs/${id}`, formData);
      navigate("/jobs");
    } catch (error) {
      console.error("Error updating job:", error);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Job Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          placeholder="Company Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          value={formData.salary}
          placeholder="Salary"
          onChange={handleChange}
        />

        <input
          type="text"
          name="jobType"
          value={formData.jobType}
          placeholder="JobType"
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          placeholder="Job Description"
          onChange={handleChange}
        />

        <button className="submit-btn">
          Update Job
        </button>

      </form>
    </div>
  );
}

export default EditJob;