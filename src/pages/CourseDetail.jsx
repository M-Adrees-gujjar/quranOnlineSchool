import { NavLink, Outlet } from "react-router-dom";

export default function CourseDetail() {

  return (
    <div className="pt-20 max-w-6xl m-auto flex flex-col gap-5">
      <div className="rounded-md bg-main-color md:h-80 h-36 text-white text-center">
        <img
          src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463831/CourseTwo_cigjwa.jpg"
          alt="ImgCourse"
          className="rounded-md object-cover w-full h-full"
          width={100}
          height={100}
        />
      </div>
      <div className="border-main-color border-2">
        <div className="w-full flex md:flex-row flex-col justify-between items-center text-center">
          <NavLink
          to="aboutCourse"
          type="button" 
          className={({isActive})=>isActive?"md:w-1/2 w-full px-2 text-xl font-bold bg-main-color text-gray-200 border-gray-300 border-2 p-3":"md:w-1/2 w-full px-2 text-xl font-bold text-main-color bg-gray-200 border-gray-300 border-2 p-3"}
          >
          - About Course -
          </NavLink>
          <NavLink
            type="button"
            to="courseContent"
            className={({isActive})=>isActive?"md:w-1/2 w-full px-2 text-xl font-bold bg-main-color text-gray-200 border-gray-300 border-2 p-3":"md:w-1/2 w-full px-2 text-xl font-bold text-main-color bg-gray-200 border-gray-300 border-2 p-3"}
          >
            - Course Content -
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
