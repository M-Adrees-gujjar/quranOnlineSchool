import { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:80/getAllCourses")
      .then((res) => res.json())
      .then((res) => {
        setCourses(res.message);
      });
  }, []);

  const handleEdit = (id) => {
    navigate({
      pathname: "/addNewCourse",
      search: createSearchParams({ id: id }).toString(),
    });
  };

  const handleView = (id) => {
    navigate({
      pathname: "/courseDetail",
      search: createSearchParams({ id: id }).toString(),
    });
  };

  const handleDelete = (id) => {
    fetch("http://localhost:80/courseDelete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCourses(res.data);
      });
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl text-center font-bold mb-4">
        All Courses are here
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-5xl m-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-main-color text-left text-xs font-semibold text-white uppercase tracking-wider w-4/5">
                Course Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-main-color text-xs font-semibold text-white uppercase tracking-wider w-1/5 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {course.title}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex md:flex-row flex-col gap-1">
                  <button
                    onClick={() => handleEdit(course._id)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    <span className="flex justify-center items-center">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <span className="ps-1">Edit</span>
                    </span>
                  </button>
                  <button
                    onClick={() => handleView(course._id)}
                    className="text-green-600 hover:text-green-900 mr-3"
                  >
                    <span className="flex justify-center items-center">
                      <FontAwesomeIcon icon={faEye} />
                      <span className="ps-1">View</span>
                    </span>
                  </button>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <span className="flex justify-center items-center">
                      <FontAwesomeIcon icon={faTrash} />
                      <span className="ps-1">Delete</span>
                    </span>
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

export default CourseList;
