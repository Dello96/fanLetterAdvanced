import { BrowserRouter, Route, Routes } from "react-router-dom";
import fakeData from "../components/fakeData";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { useState } from "react";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letters={letters} setLetters={setLetters} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail letters={letters} setLetters={setLetters} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
