import { useState , useEffect} from "react";

function useCourseHook(id) {
    const [data,setData] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:80/getCourseById',{
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
        setData(res.message);
        console.log("Courses --- ",data);
      })
    },[])

    return data;
}

export default useCourseHook