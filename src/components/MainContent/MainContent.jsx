import { useContext } from "react";
import { userContext } from "../../context/UsersContext";
import CardGrid from "../CardGrid/CardGrid";

const MainContent = () => {
  const { users, posts } = useContext(userContext);

  return <CardGrid users={users} posts={posts} />;
};

export default MainContent;
