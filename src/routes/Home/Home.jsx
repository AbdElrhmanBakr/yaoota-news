import { useContext, useState } from "react";
import { userContext } from "../../context/UsersContext";
import CardGrid from "../../components/CardGrid/CardGrid";
import InputBox from "../../components/InputBox/InputBox";
import "./Home.css";

const Home = () => {
  // Pagination State
  // FunctionState
  const { users, posts } = useContext(userContext);
  const [searchField, setSearchField] = useState("");

  const onInputChange = (event) => setSearchField(event.target.value);

  //Filtering Posts depends on title in input field state.
  const filteredPosts = posts.filter((post) =>
    post.title
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchField.toLowerCase().replace(/\s/g, ""))
  );

  return (
    <div className="main-container">
      <InputBox onInputChange={onInputChange} />
      <CardGrid users={users} posts={filteredPosts} />
    </div>
  );
};

export default Home;
