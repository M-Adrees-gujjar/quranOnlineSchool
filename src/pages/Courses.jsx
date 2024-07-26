import { useEffect, useState } from "react";
import { createSearchParams ,useNavigate } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Quran Reading",
//     href: "#",
//     imageSrc:
//       "https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463830/courseOne_x0qkzy.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Tajweed Course",
//     href: "#",
//     imageSrc:
//       "https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463831/CourseTwo_cigjwa.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 3,
//     name: "Quran Memorization",
//     href: "#",
//     imageSrc:
//       "https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463830/CourseThree_ejmcpx.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 4,
//     name: "Quran Tafsir",
//     href: "#",
//     imageSrc:
//       "https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463830/CourseFour_vhqet5.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 5,
//     name: "Tarbiyah Classess",
//     href: "#",
//     imageSrc:
//       "https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463830/CourseFive_xoyewo.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 6,
//     name: "Serah Course",
//     href: "#",
//     imageSrc:
//       "https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463831/CourseSix_x62gsj.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
// ];

export default function Courses() {
  const [courses,setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "http://localhost:80/getAllCourses"
    )
      .then((res) => res.json())
      .then((res) => {
        setCourses(res.message);
        console.log("Res ID --- ", res.message);
      });
  }, []);

  function handleCourse(id) {
    console.log("id --- ",id);
    navigate({
      pathname : '/courseDetail',
      search : createSearchParams({id : id}).toString()
    })
    // navigate("/courseDetail", { replace: true });
  }

  return (
    <div className="bg-white shadow-sm" id="course">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-6xl">
        <div className="lg:border-gray-200 lg:border-2 p-2 lg:rounded-md lg:shadow-md">
          <h2 className="font-bold tracking-tight text-main-color text-3xl">
            Our Courses
          </h2>

          <div className="mt-6 flex flex-wrap lg:justify-between justify-center">
            {courses.map((course) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
