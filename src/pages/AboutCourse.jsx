import useCourseHook from "../hooks/useCourseHook.hook";
import {useLocation } from "react-router-dom";

export default function AboutCourse() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
  const data = useCourseHook(id);

  console.log("Data --- ", data);

  

  return (
    <div className=" p-3">
      <p className="text-xl text-main-color text-justify">
        {data?.courseAbout}
      </p>
    </div>
  );
}
