import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./screens/homePage/index";
import LoginPage from "./screens/loginPage/index";
import ProfilePage from "./screens/profilePage/index";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
