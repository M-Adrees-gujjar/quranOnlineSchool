import { NavLink } from "react-router-dom";

export default function AdminDashBoard() {
  return (
    <div className="pt-40">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dash Board</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 lg:px-28 lg:py-8">
        {/* Blog Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-main-color">
          <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
          <p className="mb-4">Manage your blog posts here.</p>
          <div className="flex lg:flex-row flex-col gap-3">
            <NavLink to="/addNewBlog" className="bg-main-color text-white px-4 py-2 rounded hover:bg-green-900">
              Add New Blog
            </NavLink>
            <NavLink to="/viewAllBlogs" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              View All Blogs
            </NavLink>
          </div>
        </div>
        
        {/* Courses Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-4">Courses</h2>
          <p className="mb-4">Manage your courses here.</p>
          <div className="flex lg:flex-row flex-col gap-3">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Add New Course
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
