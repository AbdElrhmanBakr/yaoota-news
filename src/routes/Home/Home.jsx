import { useContext, useState } from "react";
import { userContext } from "../../context/UsersContext";
import CardGrid from "../../components/CardGrid/CardGrid";
import InputBox from "../../components/InputBox/InputBox";
import "./Home.css";

const Home = () => {
  // Get all users and posts from Reducer [Context]
  const { users, posts } = useContext(userContext);

  // Init new state for search input field for sorting posts with its title.
  const [searchField, setSearchField] = useState("");

  // Setting input field value to the state using setter.
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
