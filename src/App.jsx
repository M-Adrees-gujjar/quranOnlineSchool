import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CourseDetail from "./pages/CourseDetail";
import LogInForm from "./pages/LogInForm";
import AdminDashBoard from "./pages/AdminDashBoard";
// import adminLogIn from "./pages/AdminPanel/adminLogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="blog" element={<Blog />} />
          <Route path="blogDetails" element={<BlogDetail />} />
          <Route path="courseDetail" element={<CourseDetail />} />
          <Route path="logInForm" element={<LogInForm />} />
          <Route path="adminDashBoard" element={<AdminDashBoard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
