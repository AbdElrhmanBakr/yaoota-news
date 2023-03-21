import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { userContext } from "../../context/UsersContext";

import ProfilePosts from "../../components/ProfilePosts/ProfilePosts";
import "./Profile.css";

const Profile = () => {
  const { users, posts } = useContext(userContext);
  const [currentUser, setCurrentUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const { user } = useParams();

  //Specify user data out of all users array.
  useEffect(() => {
    users.forEach((singleUser) => {
      if (singleUser.name.replace(/\s+/g, "").replace(".", "") === user) {
        setCurrentUser(singleUser);
      }
    });
  }, [user, users]);

  //Specify user posts out of all users posts array.
  useEffect(() => {
    posts.forEach((singlePost) => {
      if (singlePost.userId === currentUser.id) {
        setUserPosts((prevPosts) => [...prevPosts, singlePost]);
      }
    });
  }, [currentUser, user]);

  return (
    <section className="profile-section">
      {currentUser.id && (
        <div className="profile-card">
          <div className="profile-card__header">
            <div className="card__profile">
              <img
                src={`./assets/users/${currentUser.name}.jpg`}
                alt="A man smiling"
              />
            </div>
            <div className="card__name">
              <h2>{currentUser.name}</h2>
              <div className="card__handle">
                <span className="handle">{`@${currentUser.username}`}</span>
              </div>
            </div>
          </div>
          <hr className="border" />
          <div className="card__insights">
            <div className="card__heading">
              <div className="heading">Insights</div>
            </div>
            <div className="insights">
              <div className="insight">
                <div className="heading">Posts: </div>
                <div className="number">{userPosts.length}</div>
              </div>
              <div className="insight">
                <div className="heading">Company: </div>
                <div className="number">{currentUser.company.name}</div>
              </div>
              <div className="insight">
                <div className="heading">Website: </div>
                <a
                  className="website-link"
                  target="_blank"
                  href={`https://${currentUser.website}`}
                >
                  <div className="website">{currentUser.website}</div>
                </a>
              </div>
            </div>
          </div>
          <hr className="border" />
          <div className="heading">User's Posts: </div>
          <ProfilePosts user={currentUser} posts={userPosts} />
        </div>
      )}
    </section>
  );
};

export default Profile;
