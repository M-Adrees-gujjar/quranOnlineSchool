import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CourseDetail from "./pages/CourseDetail";
import LogInForm from "./pages/LogInForm";
import AdminDashBoard from "./pages/AdminDashBoard";
import AddNewBlog from "./pages/AddNewBlog";
import ViewAllBlogs from "./pages/ViewAllBlogs";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
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
          <Route path="courses" element={<Courses />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="blogDetails" element={<BlogDetail />} />
          <Route path="courseDetail" element={<CourseDetail />} />
          <Route path="logInForm" element={<LogInForm />} />
          <Route path="adminDashBoard" element={<AdminDashBoard />} />
          <Route path="addNewBlog" element={<AddNewBlog />} />
          <Route path="viewAllBlogs" element={<ViewAllBlogs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
