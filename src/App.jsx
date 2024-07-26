import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CourseDetail from "./pages/CourseDetail";
import LogInForm from "./pages/LogInForm";
import AdminDashBoard from "./pages/AdminDashBoard";
import AddNewBlog from "./pages/AddNewBlog";
import AddNewCourse from "./pages/AddNewCourse";
import ViewAllBlogs from "./pages/ViewAllBlogs";
import ViewAllCourses from "./pages/ViewAllCourses";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import CourseContent from "./pages/CourseContent";
import AboutCourse from "./pages/AboutCourse";
import Whatsapp from "./components/Whatsapp";
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
          <Route path="courseDetail" element={<CourseDetail />} >
                <Route path="courseContent" element={<CourseContent />} />
                <Route path="aboutCourse" element={<AboutCourse />} />
          </Route>
          <Route path="logInForm" element={<LogInForm />} />
          <Route path="adminDashBoard" element={<AdminDashBoard />} />
          <Route path="addNewBlog" element={<AddNewBlog />} />
          <Route path="addNewCourse" element={<AddNewCourse />} />
          <Route path="viewAllBlogs" element={<ViewAllBlogs />} />
          <Route path="viewAllCourses" element={<ViewAllCourses />} />
        </Routes>
        <Footer />
        <Whatsapp  />
      </Router>
    </div>
  );
}

export default App;
