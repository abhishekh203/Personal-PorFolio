import React from "react";

function Foter() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center px-4">
        {/* Footer text */}
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()}{" "}
          <span className="bg-black">Abhishekh Kumar Kapar.</span> All rights
          reserved.
        </p>
        <p className="text-sm mb-4">
          Specialized in Cloud Computing and modern web technologies.
        </p>

        {/* Social media icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75"
            />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75"
            />
          </a>
          <a
            href="https://t.me/Abhishekh21BCS3691"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="Telegram"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75"
            />
          </a>
          <a
            href="https://wa.me/qr/YBGUJVMIHVOVB1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Foter;
