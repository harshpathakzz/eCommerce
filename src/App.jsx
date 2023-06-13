import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useUserAuth } from "./context/UserAuthContext";
import Protected from "./components/Protected";
import RequestLoginPage from "./pages/RequestLoginPage";

function App() {
  const { isLoggedIn } = useUserAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/cart"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <CartPage />
              </Protected>
            }
          />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/request-login" element={<RequestLoginPage />} />

          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
