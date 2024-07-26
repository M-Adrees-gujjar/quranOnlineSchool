import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const WhatsAppButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    window.open("https://wa.me/+923001436313", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`text-white fixed bottom-5 right-5 rounded-full p-4 text-2xl z-50 flex items-center justify-center transition-colors hover:bg-main-color duration-300 ${
        isActive ? "bg-green-600" : "bg-green-500"
      } focus:outline-none`}
    >
      <SiWhatsapp />
    </button>
  );
};

export default WhatsAppButton;
