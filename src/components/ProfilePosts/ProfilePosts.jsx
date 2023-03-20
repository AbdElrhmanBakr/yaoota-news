import ProfilePostCard from "../ProfilePostCard/ProfilePostCard";
import "./ProfilePosts.css";

const CardGrid = ({ user, posts }) => {
  //Mapping over all posts and calling Card Component to render all.

  return (
    <div className="card-grid">
      {user.id &&
        posts.length > 1 &&
        posts.map((post) => {
          const { id, title, body } = post;
          const cardTtitle = title.slice(0, 30) + " ...";
          const cardBody = body.slice(0, 100) + " ...";

          return (
            <ProfilePostCard
              key={id}
              user={user}
              title={cardTtitle}
              body={cardBody}
            />
          );
        })}
    </div>
  );
};

export default CardGrid;
