import { useNavigate } from "react-router-dom";
import "./ProfilePostCard.css";

const ProfilePostCard = ({ postId, title, body }) => {
  const navigateTo = useNavigate();
  const handleClick = () => navigateTo(`/posts/${postId}`);
  return (
    <div className="card">
      <div className="card-header">
        <img src="./assets/post-sample.jpg" alt="card-image" />
      </div>
      <div className="profile-card-body">
        {title && postId && (
          <h4 onClick={handleClick}>{title.toUpperCase()}</h4>
        )}
        {body && <p>{body}</p>}
      </div>
    </div>
  );
};

export default ProfilePostCard;
