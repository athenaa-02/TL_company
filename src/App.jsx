import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import About from "./pages/About/About.jsx";
import AdminPanel from "./pages/AdminPanel/AdminPanel.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import PracticeAreas from "./pages/practiceAreas/PracticeAreas.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/practiceAreas" element={<PracticeAreas />}></Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
