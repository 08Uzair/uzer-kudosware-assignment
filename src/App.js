import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import FileUpload from "./components/FileUpload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
function App() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  let isAuthenticated;

  if (profile === null) {
    isAuthenticated = false;
  } else {
    isAuthenticated = true;
  }
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Auth /> : <Navigate to="/upload" />}
          />
          <Route
            path="/upload"
            element={isAuthenticated ? <FileUpload /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
