// src/components/BlogList.js
import { useState, useEffect } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the list of blogs from an API or a static file
    // For this example, we will use static data
    const fetchBlogs = async () => {
      const response = [
        { id: 1, title: 'First Blog', description: 'This is the first blog.' },
        { id: 2, title: 'Second Blog', description: 'This is the second blog.' },
        { id: 3, title: 'Third Blog', description: 'This is the third blog.' }
      ];
      setBlogs(response);
    };
    fetchBlogs();
  }, []);

  const handleEdit = (id) => {
    // Handle edit action
    console.log('Edit blog with id:', id);
  };

  const handleView = (id) => {
    // Handle view action
    console.log('View blog with id:', id);
  };

  const handleDelete = (id) => {
    // Handle delete action
    console.log('Delete blog with id:', id);
    // Optionally, remove the blog from the state
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-2xl font-bold mb-4">Blog List</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Title
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {blog.title}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {blog.description}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    onClick={() => handleEdit(blog.id)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleView(blog.id)}
                    className="text-green-600 hover:text-green-900 mr-3"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
