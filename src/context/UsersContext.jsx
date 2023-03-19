import { useEffect, useReducer, createContext } from "react";

//Initialize userContext
export const userContext = createContext({
  users: [],
  setUsers: () => null,
  posts: [],
  setPosts: () => null,
  comments: [],
  setComments: () => null,
});

//All Reducer Actions Type Object.
const USER_ACTION_TYPE = {
  SET_USERS: "SET_USERS",
  SET_POSTS: "SET_POSTS",
  SET_COMMENTS: "SET_COMMENTS",
};

//Reducer Function.
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_USERS:
      return { ...state, users: payload };

    case USER_ACTION_TYPE.SET_POSTS:
      return { ...state, posts: payload };

    case USER_ACTION_TYPE.SET_COMMENTS:
      return { ...state, comments: payload };
    default:
      throw new Error(`Unknown Type ${type} in User Reducer`);
  }
};

//Reducer Initial State.
const INITIAL_STATE = {
  users: [],
  posts: [],
  comments: [],
};
export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { users, posts, comments } = state;

  //Init Users Reducer Setter.
  const setUsers = (usersArray) => {
    const action = {
      type: USER_ACTION_TYPE.SET_USERS,
      payload: usersArray,
    };
    dispatch(action);
  };

  //Init Posts Reducer Setter.
  const setPosts = (postsArray) => {
    const action = {
      type: USER_ACTION_TYPE.SET_POSTS,
      payload: postsArray,
    };
    dispatch(action);
  };

  //Init Comments Reducer Setter.
  const setComments = (commentsArray) => {
    const action = {
      type: USER_ACTION_TYPE.SET_COMMENTS,
      payload: commentsArray,
    };
    dispatch(action);
  };

  //Fetch Users Data and store[dispatch] it in the Reducer.
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getUsers();
  }, []);

  //Fetch Posts Data and store[dispatch] it in the Reducer.
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getPosts();
  }, []);

  //Fetch Comments Data and store[dispatch] it in the Reducer.
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getComments();
  }, []);

  const value = { users, setUsers, posts, setPosts, comments, setComments };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UsersProvider;
