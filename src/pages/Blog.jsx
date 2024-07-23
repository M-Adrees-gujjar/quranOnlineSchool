import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from 'react-router-dom'


export default function Blog() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/getAllBlogs')
      .then(res => res.json())
      .then(res => {
        setArticles(res.message);
        console.log("Res ID --- ",res.message);
      });
  }, []);

  function handleBlogDetail(details) {
    console.log("Details --- ",details);
    navigate({
      pathname : '/blogDetails',
      search : createSearchParams({id : details}).toString()
    })
    // history.push({
    //   search : details
    // })
    // localStorage.setItem("blogDetails", JSON.stringify(details));
    // location.replace('/blogDetails');
  }

  function stripHtml(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  function truncateText(text, limit) {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + "...";
  }

  return (
    <div className="overflow-hidden py-4 pt-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-5">
        {articles.map((element, index) => (
          <div
            key={index}
            onClick={() => handleBlogDetail(element._id)}
            className="border-gray-200 border-2 rounded-md lg:shadow-md mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-5 hover:cursor-pointer"
          >
            <div className="py-8 px-6">
              <div className="">
                <p className="mt-2 text-2xl font-bold tracking-tight text-main-color sm:text-2xl">
                  {element.title}
                </p>
                <p className="text-gray-800 font-semibold">
                  {element.date}
                </p>
                <p className="mt-2 font-semibold text-justify text-gray-500 leading-5 line-clamp-2">
                  {truncateText(stripHtml(element.description), 200)}
                </p>
              </div>
            </div>
            <div className="">
              <img
                alt="Product screenshot"
                src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1720542418/blogImg_gs7r1v.jpg"
                width={100}
                height={100}
                className="object-fill object-center h-full w-full lg:rounded-r-md rounded-e-md rounded-s-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
