import { useState , useEffect} from "react";

function useCourseHook(id) {
    const [data,setData] = useState([]);

    useEffect(()=>{
      fetch('https://web-622d8yvwr91k.up-de-fra1-k8s-1.apps.run-on-seenode.com/getCourseById',{
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