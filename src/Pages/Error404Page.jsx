import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Error404Page = () => {
 
  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/20 via-black/30 to-gray-100/20" />
      {/* Content */}  
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="space-y-2 ">
            <h1 className="text-[10vw] font-light text-white drop-shadow-lg"> <span className="inline-block rotate-18 text-[12vw]">4</span> <span className="inline-block rotate-10">0</span> <span className="inline-block rotate-160 text-[12vw]">4</span></h1>
            <h2 className="text-2xl font-normal text-white/95 drop-shadow">Page Not Found</h2>
          </div>
          
          <p className="text-base text-white/80 drop-shadow leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg primary-button-gradient px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl active:scale-95"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;