import { useEffect, useState } from "react";
import { createSearchParams ,useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Courses() {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://web-622d8yvwr91k.up-de-fra1-k8s-1.apps.run-on-seenode.com/getAllCourses"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setLoading(false);
          setCourses(res.message);
        } else {
          console.log("Response---",res.message);
        }
      })
      .catch((err)=>{
        console.log("Error is this : ",err);
      });
  }, []);

  function handleCourse(id) {
    console.log("id --- ",id);
    navigate({
      pathname : '/courseDetail',
      search : createSearchParams({id : id}).toString()
    })
  }

  return (
    <div className="bg-white shadow-sm" id="course">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-6xl">
        <div className="lg:border-gray-200 lg:border-2 p-2 lg:rounded-md lg:shadow-md">
          <h2 className="font-bold tracking-tight text-main-color text-3xl">
            Our Courses
          </h2>

          <div className="mt-6 flex flex-wrap lg:justify-between justify-center">
            {loading ? <Loader /> : (courses.map((course) => (
              <div
                key={course._id}
                className="group relative border-main-color rounded-md border-2 my-5"
              >
                <div className="aspect-h-1 aspect-w-1 w-80 overflow-hidden  bg-main-color flex justify-center items-center text-yellow-300 text-3xl font-bold lg:aspect-none lg:h-60">
                  {course.title}
                </div>
                <div className="mt-4">
                  <div className="px-5">
                    <h3 className="text-2xl font-semibold text-main-color text-center">
                      {course.title}
                    </h3>
                    <button
                      onClick={() => handleCourse(course._id)}
                      type="button"
                      className="transition-all border-2 text-2xl bg-main-color hover:bg-white border-main-color text-white hover:text-main-color font-bold w-full py-2 my-5 rounded-md"
                    >
                      Course Details
                    </button>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
    </div>
  );
}
