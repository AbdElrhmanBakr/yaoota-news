import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ user, title, body }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src="./assets/post-sample.jpg" alt="card-image" />
      </div>
      <div className="card-body">
        {title && <h4>{title.toUpperCase()}</h4>}
        {body && <p>{body}</p>}
        {user && (
          <div className="user">
            <img src={`./assets/users/${user.name}.jpg`} alt="user-image" />
            <div className="user-info">
              <Link
                to={user.name.replace(/\s+/g, "")}
                style={{ textDecoration: "none" }}
              >
                <h5>{user.name}</h5>
              </Link>

              <small>2h ago</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
