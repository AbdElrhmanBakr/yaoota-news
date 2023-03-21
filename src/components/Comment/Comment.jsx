import "./Comment.css";

const Comment = ({ name, email, body }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-img">
          <img src="/assets/profile.png" alt="A man smiling" />
        </div>
        <div className="comment-user">
          <h4>{name}</h4>
          <div className="comment-user-email">
            <span className="handle">{email}</span>
          </div>
        </div>
      </div>
      <div className="comment-body">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Comment;
