import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faSkype,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  function handleLogIn() {
    navigate("/logInForm", { replace: true });
  }

  return (
    <div
      className="relative isolate overflow-hidden py-8 mt-8 sm:py-12 lg:py-20 shadow-lg border-t-2 border-gray-200"
      id="footer"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463829/asset1_dmwkas.png"
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-lg font-semibold text-main-color leading-5">
              We provide Muslims worldwide with an opportunity to learn the Holy
              Quran, focusing on those in the West. Our aim is to enable
              learners of all ages to read and recite the Quran accurately and
              to provide basic awareness about Islam teachings.
            </p>
            <div className="flex my-5 gap-5">
              <div className="px-2 py-1 bg-main-color text-white rounded-md">
                <span>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
              </div>
              <div className="px-2 py-1 bg-main-color text-white rounded-md">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="px-2 py-1 bg-main-color text-white rounded-md">
                <FontAwesomeIcon icon={faSkype} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="items-start">
              <dt className="font-bold text-2xl text-main-color">
                Quick Links
              </dt>
            </div>
            <div className="flex-col items-start">
              <li className="text-main-color font-semibold">Blog</li>
              <li className="text-main-color font-semibold">Courses</li>
              <li className="text-main-color font-semibold">About Us</li>
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 pt-5 border-main-color text-center text-main-color font-semibold">
          <a
            onClick={handleLogIn}
            // href="logInForm"
            className="hover:border-b-2 hover:border-b-main-color"
          >
            CopyRight@Admin
          </a>
        </div>
      </div>
    </div>
  );
}
