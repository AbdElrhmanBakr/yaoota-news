import Card from "../Card/Card";
import "./CardGrid.css";

const CardGrid = ({ users, posts }) => {
  //Mapping over all posts and calling Card Component to render all.
  const cardItem = posts.map((post) => {
    const { id, userId, title, body } = post;
    const cardTtitle = title.slice(0, 30) + " ...";
    const cardBody = body.slice(0, 100) + " ...";

    return (
      <Card
        key={id}
        user={users[userId - 1]}
        title={cardTtitle}
        body={cardBody}
      />
    );
  });

  return <div className="card-grid">{cardItem}</div>;
};

export default CardGrid;
