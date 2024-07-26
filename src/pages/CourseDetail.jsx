// import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import useCourseHook from "../hooks/useCourseHook.hook";
import { useState } from "react";
export default function CourseDetail() {
  const [course, setCourse] = useState({
    courseAbout: false,
    courseContent: false,
  });
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
  const data = useCourseHook(id);

  function handleAboutCourse() {
    setCourse({
      courseAbout: true,
      courseContent: false,
    });
  }

  function handleContentCourse() {
    setCourse({
      courseAbout: false,
      courseContent: true,
    });
  }

  return (
    <div className="pt-20 max-w-6xl m-auto flex flex-col gap-5">
      <div className="rounded-md bg-main-color md:h-80 h-36 text-white text-center flex justify-center items-center text-5xl font-bold">
        {
          data?.title
        }
      </div>
      <div className="border-main-color border-2">
        <div className="w-full flex md:flex-row flex-col justify-between items-center text-center">
          <button
            type="button"
            onClick={handleAboutCourse}
            className={
              course.courseAbout
                ? "md:w-1/2 w-full px-2 text-xl font-bold bg-main-color text-gray-200 border-gray-300 border-2 p-3"
                : "md:w-1/2 w-full px-2 text-xl font-bold text-main-color bg-gray-200 border-gray-300 border-2 p-3"
            }
          >
            - About Course -
          </button>
          <button
            type="button"
            onClick={handleContentCourse}
            className={
              course.courseContent
                ? "md:w-1/2 w-full px-2 text-xl font-bold bg-main-color text-gray-200 border-gray-300 border-2 p-3"
                : "md:w-1/2 w-full px-2 text-xl font-bold text-main-color bg-gray-200 border-gray-300 border-2 p-3"
            }
          >
            - Course Content -
          </button>
        </div>
        {course.courseAbout && (
          <p className="text-xl text-main-color text-justify">
            <span dangerouslySetInnerHTML={{ __html: data?.courseAbout }} />;
          </p>
        )}
        {course.courseContent && (
          <p className="text-xl text-main-color text-justify">
            <span dangerouslySetInnerHTML={{ __html: data?.courseContent }} />;
          </p>
        )}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}
