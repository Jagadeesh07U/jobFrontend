import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
//import ProtectedRoute from "../routes/ProtectedRoutes";


function AddJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    image:"",
    jobType:"",
    description: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/jobs", formData);
      navigate("/jobs");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  }


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobType"
          placeholder="Job Type "
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Job Description"
          onChange={handleChange}
        />

        <button className="submit-btn">
          Add Job
        </button>

      </form>
    </div>
  );
}

export default AddJob;