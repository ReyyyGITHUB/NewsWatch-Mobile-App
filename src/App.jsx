import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OnboardingScreen from "./pages/Auth/OnboardingScreen";
import SignUp from "./pages/Auth/SignUp";
import Signin from "./pages/Auth/Signin";
import ResetPassword from "./pages/Auth/ResetPassword";
import SetupPassword from "./pages/Auth/SetupPassword";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

export default function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      // Redirect ke home di first load
      window.history.replaceState(null, "", "/");
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/resetpassword-setup" element={<SetupPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
