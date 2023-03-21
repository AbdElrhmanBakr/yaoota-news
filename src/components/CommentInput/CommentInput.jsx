import { useState, useContext } from "react";
import { userContext } from "../../context/UsersContext";
import "./CommentInput.css";

const CommentInput = ({ postId }) => {
  // Getting comments and its dispatch from Reducer [Context]
  const { comments, setComments } = useContext(userContext);

  // Initial Value for the comment input state.
  const INITIAL_VALUE = {
    id: "",
    postId: "",
    name: "",
    email: "",
    body: "",
  };
  // Comment Input State.
  const [inputComment, setInputComment] = useState(INITIAL_VALUE);

  //Update Input Data State
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setInputComment((prevState) => ({ ...inputComment, [name]: value }));
  };

  // Handle form button click to update comment in Reducer [Context]
  // Then cleaning Input Values.
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setComments([
      ...comments,
      { ...inputComment, id: comments.length + 1, postId: postId },
    ]);
    setInputComment(INITIAL_VALUE);
  };

  return (
    <form onSubmit={handleFormSubmit} className="comments-input">
      <div className="user-data-input">
        <input
          name="name"
          value={inputComment.name}
          type="text"
          placeholder="Your Name"
          onChange={onInputChange}
          required
        />
        <input
          name="email"
          value={inputComment.email}
          type="email"
          placeholder="Your Email"
          onChange={onInputChange}
          required
        />
      </div>
      <textarea
        name="body"
        value={inputComment.body}
        cols="30"
        rows="40"
        onChange={onInputChange}
        placeholder="Your Comment"
        required
      ></textarea>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentInput;
