import React from 'react'

const StatCard = ({ title, value, icon, color }) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-100",
      green: "bg-green-50 border-green-100",
      red: "bg-red-50 border-red-100",
      purple: "bg-purple-50 border-purple-100"
    };
    
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-600 mb-1">{title}</div>
            <div className="text-2xl font-semibold text-gray-900">{value}</div>
          </div>
          <div className={`p-3 rounded-lg ${colorMap[color]}`}>{icon}</div>
        </div>
      </div>
    );
  }

export default StatCard
