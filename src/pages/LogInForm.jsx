import PopUp from "../components/PopUp";
import { useEffect, useState } from "react";
export default function LogInForm() {
  const [open, setOpen] = useState(true);
  const [popUpContent, setPopUpContent] = useState("DummyContent");
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, [open]);

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

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
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
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-main-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-main-color focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-6 px-5"
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
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-main-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-main-color focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-6 px-5 focus-visible:ring-main-color"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-main-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-color"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            This is Just for admin
          </p>
        </div>
      </div>
      <PopUp open={open} setOpen={setOpen} popUpContent={popUpContent} />
    </>
  );
}
