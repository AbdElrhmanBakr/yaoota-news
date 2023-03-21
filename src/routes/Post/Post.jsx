import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { userContext } from "../../context/UsersContext";
import Comment from "../../components/Comment/Comment";
import CommentInput from "../../components/CommentInput/CommentInput";
import "./Post.css";

const Post = () => {
  //Current Post State of all user,postData and comments
  const [postUser, setPostUser] = useState({});
  const [postData, setPostData] = useState({});
  const [postComments, setPostComments] = useState([]);

  //Get Post Id from params
  const { post } = useParams();

  //Get all posts,users,comments from Reducer Context.
  const { users, posts, comments } = useContext(userContext);

  //Filter all Posts Data to the specify Current Post with params identifier
  useEffect(() => {
    const currentPost = posts.filter((singlePost) => singlePost.id == post);
    setPostData(currentPost[0]);
  }, [post, posts]);

  //Filter all Users Data to the specify Post Publisher
  useEffect(() => {
    const currentUser = users.filter(
      (singleUser) => singleUser.id == postData.userId
    );
    setPostUser(currentUser[0]);
  }, [postData]);

  //Filter all Comments Data to the specify Post Comments
  useEffect(() => {
    const currentComments = comments.filter(
      (singleComment) => singleComment.postId == postData.id
    );
    setPostComments(currentComments);
  }, [postData, comments]);
  return (
    <section className="post-section">
      {postUser && postData && postComments.length >= 1 && (
        <div className="post-card">
          <div className="post-card-header">
            <div className="card-post">
              <img
                src={`/assets/users/${postUser.name}.jpg`}
                alt="A man smiling"
              />
            </div>
            <div className="post-card-name">
              <h2>{postUser.name}</h2>
              <div className="card-post-handle">
                <span className="handle">{`@${postUser.username}`}</span>
              </div>
            </div>
          </div>
          <hr className="border" />
          <div className="post-card-insights">
            <div className="post-insights">
              <div className="post-insight">
                <div className="post-heading">Phone: </div>
                <div className="post-number">{postUser.phone}</div>
              </div>
              <div className="post-insight">
                <div className="post-heading">Company :</div>
                <div className="post-number">{postUser.company.name}</div>
              </div>
              <div className="post-insight">
                <div className="post-heading">Website: </div>
                <a
                  className="post-website-link"
                  target="_blank"
                  href={`https://${postUser.website}`}
                >
                  <div className="post-website">{postUser.website}</div>
                </a>
              </div>
            </div>
          </div>
          <hr className="border" />
          <div className="heading">{`Title: ${postData.title}.`}</div>
          <div className="post-body">
            <p>{postData.body}</p>
          </div>
          <hr className="border" />
          <div className="heading">Comments:</div>
          <div className="comments">
            {postComments.map((singleComment) => (
              <Comment
                key={singleComment.id}
                name={singleComment.name}
                email={singleComment.email}
                body={singleComment.body}
              />
            ))}
          </div>
          <hr className="border" />
          <div className="heading">Add a Comment:</div>
          <CommentInput
            postId={postComments[0].postId}
            postComments={postComments}
            setPostComments={setPostComments}
          />
        </div>
      )}
    </section>
  );
};

export default Post;
