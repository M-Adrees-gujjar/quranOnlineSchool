import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BlogDetail() {
  const [blog,setBlog] = useState({
    title : '',
    description : ''
  })
  const {search} = useLocation();

  useEffect(()=>{
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get('id');
    fetch('https://web-622d8yvwr91k.up-de-fra1-k8s-1.apps.run-on-seenode.com/getBlogById',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        id : id,
      })
    })
    .then(res=>res.json())
    .then(res=>{
      setBlog(res.message)
    })
  },[])

  return (
    <div className="pt-36 max-w-6xl m-auto flex flex-col gap-5">
      <div className="rounded-md p-16 bg-main-color text-white text-center">
        <h1 className="text-3xl font-bold">
          {blog.title}
        </h1>
      </div>
      <div className="rounded-md border-gray-200 border-2 p-5">
        <h2 className="text-xl text-justify text-wrap font-semibold text-main-color">
          <span dangerouslySetInnerHTML={{__html : blog.description}}></span>
        </h2>
      </div>
    </div>
  );
}
