import "./ProfilePostCard.css";

const ProfilePostCard = ({ user, title, body }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src="./assets/post-sample.jpg" alt="card-image" />
      </div>
      <div className="profile-card-body">
        {title && <h4>{title.toUpperCase()}</h4>}
        {body && <p>{body}</p>}
      </div>
    </div>
  );
};

export default ProfilePostCard;
