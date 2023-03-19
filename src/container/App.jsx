import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";
import Profile from "../components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainContent />} />
          <Route path=":user" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
