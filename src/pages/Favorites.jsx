import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../features/favoriteSlice";

function Favorites() {
  const dispatch = useDispatch();

  // FIX: Access the array properly from the store state
  const favorites = useSelector(
    (state) => state.favorites.favorites || state.favorites || []
  );

  return (
    <div className="favorites-container">
      <h1 className="page-title">Favorite Jobs</h1>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h2>No Favorite Jobs</h2>
          <p>Add jobs from the Jobs page.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((job) => (
            <div key={job.id} className="favorite-card">
              <img src={job.image} alt={job.title || job.name} />
              
              <div className="favorite-content">
                <h2>{job.title}</h2>
                <p>🌐 {job.company}</p>
                <p>📍 {job.location}</p>
                <p>💼 {job.jobType}</p>
                <p>💰 ₹{job.salary}</p>

                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => dispatch(removeFavorite(job.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;