import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { userContext } from "../../context/UsersContext";

import CardGrid from "../CardGrid/CardGrid";
import "./Profile.css";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useParams();
  const { users } = useContext(userContext);

  //Specify user data out of all users array.
  useEffect(() => {
    users.forEach((singleUser) => {
      if (singleUser.name.replace(/\s+/g, "") === user) {
        setCurrentUser(singleUser);
      }
    });
  });

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
                {/* <span className="circle"></span>
                <span>{currentUser.website}</span> */}
              </div>
            </div>
          </div>
          <hr className="border" />
          <div className="card__insights">
            <div className="card__heading">
              <div className="heading">Insights</div>
              <div className="date">{currentUser.company.name}</div>
            </div>
            <div className="insights">
              <div className="insight">
                <div className="heading">Posts: </div>
                <div className="number">1,090</div>
              </div>
              <div className="insight">
                <div className="heading">Posts's Comments: </div>
                <div className="number">1,090</div>
              </div>
              <div className="insight">
                <div className="heading">Website: </div>
                <a href={`https:://${currentUser.website}`}>
                  <div className="number">{currentUser.website}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
