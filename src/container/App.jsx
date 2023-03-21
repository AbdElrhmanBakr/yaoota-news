import { Routes, Route } from "react-router-dom";

import Header from "../routes/Header/Header";
import Home from "../routes/Home/Home";
import Profile from "../routes/Profile/Profile";
import Post from "../routes/Post/Post";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path=":user" element={<Profile />} />
          <Route path="posts/:post" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
