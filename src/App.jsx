import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Whatsapp from "./components/Whatsapp";
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const Courses = lazy(() => import("./pages/Courses"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const LogInForm = lazy(() => import("./pages/LogInForm"));
const AdminDashBoard = lazy(() => import("./pages/AdminDashBoard"));
const AddNewBlog = lazy(() => import("./pages/AddNewBlog"));
const AddNewCourse = lazy(() => import("./pages/AddNewCourse"));
const ViewAllBlogs = lazy(() => import("./pages/ViewAllBlogs"));
const ViewAllCourses = lazy(() => import("./pages/ViewAllCourses"));

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="addNewCourse" element={<AddNewCourse />} />
          <Route path="viewAllBlogs" element={<ViewAllBlogs />} />
          <Route path="viewAllCourses" element={<ViewAllCourses />} />
        </Routes>
        </Suspense>
        <Footer />
        <Whatsapp />
      </Router>
    </div>
  );
}

export default App;
