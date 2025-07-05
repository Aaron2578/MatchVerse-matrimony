import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import Modal from "react-modal";
import AuthForm from "./components/AuthForm";
import { useState } from "react";

Modal.setAppElement("#root");

const getInitialUserData = () => {
  try {
    const raw = localStorage.getItem("userData");
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
};
function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [formType, setFormType] = useState<"signin" | "signup">("signup");
  const [userData, setUserData] = useState(getInitialUserData());
  const handleOpenModel = (type: "signin" | "signup") => {
    setFormType(type);
    setIsModelOpen(true);
  };
  return (
    <>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <About /> */}
      {/* <Admin /> */}
      <BrowserRouter>
        <AuthForm
          setUserData={setUserData}
          isModelOpen={isModelOpen}
          handleCloseModal={() => setIsModelOpen(false)}
          formType={formType}
          setFormType={setFormType}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                setUserData={setUserData}
                userData={userData}
                handleOpenModel={handleOpenModel}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                userData={userData}
                handleOpenModel={handleOpenModel}
                setUserData={setUserData}
              />
            }
          />
          <Route
            path="/matches"
            element={
              <Matches
                userData={userData}
                handleOpenModel={handleOpenModel}
                setUserData={setUserData}
              />
            }
          />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
