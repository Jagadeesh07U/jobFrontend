import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function JobCard({ job , onDelete }) {
 const dispatch = useDispatch();

  function handleFavorite() {

    dispatch(
      addFavorite(job)
    );

  }


  return (
  <div className="card">
    <img
      src={job.image}
      alt={job.title}
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/400x220?text=No+Image";
      }}
    />

      <h3>{job.title}</h3>

      <p>🏢 {job.company}</p>

      <p>📍 {job.location}</p>

      <p>💼 {job.jobType}</p>

      <p>💰 {job.salary}</p>

      <div className="card-actions">
 <Link
   className="view-btn"
   to={`/jobs/${job.id}`}
 >
   View
 </Link>

 <Link
   className="edit-btn"
   to={`/edit-job/${job.id}`}
 >
   Edit
 </Link>

 <button
   className="delete-btn"
   onClick={() => onDelete(job.id)}
 >
   Delete
 </button>

 <button
    className="favorite-btn"
    onClick={handleFavorite}
  >
    ❤ Add To Favorites
  </button>



 </div>
    </div>
  );
}

export default JobCard;