import PopUp from "../components/PopUp";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
export default function LogInForm() {
  const [open, setOpen] = useState(false);
  const [popUpContent, setPopUpContent] = useState("DummyContent");
  const [inputValue,setInputValue] = useState({
    email : '',
    password : ''
  });
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 2000);
    return  ()=>clearTimeout(timer);
  }, [open]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Data --- ",inputValue);
    fetch('http://localhost:3000/adminLogIn',{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        email : inputValue.email,
        password : inputValue.password
      })
    })
    .then((res)=>res.json())
    .then((res)=>{
      setPopUpContent(res.message);
      setOpen(true)
      if (res.success) {
        navigate('/adminDashBoard', {replace: true})
      } else {
        return
      }
    })
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463829/asset1_dmwkas.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={inputValue.email}
                  onChange={(e)=>setInputValue({...inputValue,email : e.target.value})}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-main-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-main-color focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-6 px-5 focus-visible:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-main-color hover:text-green-900"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={inputValue.password}
                  onChange={(e)=>setInputValue({...inputValue,password : e.target.value})}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-main-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-main-color focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-6 px-5 focus-visible:outline-none"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                // onSubmit={(e)=>handleSubmit(e)}
                // onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-main-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-color"
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            This is Just for admin
          </p>
        </form>
      </div>
      <PopUp open={open} setOpen={setOpen} popUpContent={popUpContent} />
    </>
  );
}
