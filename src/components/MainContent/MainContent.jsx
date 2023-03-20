import { useContext, useState, useEffect } from "react";
import { userContext } from "../../context/UsersContext";
import CardGrid from "../CardGrid/CardGrid";
import InputBox from "../InputBox/InputBox";
import "./MainContent.css";

const MainContent = () => {
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

export default MainContent;
