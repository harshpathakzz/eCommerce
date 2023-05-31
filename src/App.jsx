import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
