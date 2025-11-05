import React from "react";
import { siteAnalysis } from "../../utils/constants";


const Analytics = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-4 p-4 w-full max-w-4xl mx-auto">
      {siteAnalysis.map((stat, i) => (
        <div 
          key={stat.name}
          className="flex mr-5  justify-center items-center  gap-3 lg:gap-4 rounded-full bg-gradient-to-br from-gray-900 to-gray-950 px-5 py-3 lg:px-6 lg:py-3.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-800/50 backdrop-blur-sm w-full lg:w-auto"
        >
          {/* value + label */}
          <div className="leading-tight whitespace-nowrap">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-50 to-gray-100 bg-clip-text text-transparent">
              {stat.data}
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 font-medium">
              {stat.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analytics;