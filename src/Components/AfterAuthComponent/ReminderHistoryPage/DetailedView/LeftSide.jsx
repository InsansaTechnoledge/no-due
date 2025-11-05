import React from 'react'
import { Check } from 'lucide-react'

const LeftSide = ({CustomerNames, selectedCustomer, setSelectedCustomer, imgFor}) => {
  return (
          <div className="grid grid-cols-1 gap-2">
            {CustomerNames.map((customer, index) => {
              const isActive = selectedCustomer?.id === customer.id;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCustomer(customer)}
                  className={`text-left bg-white border rounded-lg transition-all p-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive 
                      ? 'border-blue-500 bg-blue-50 shadow-sm' 
                      : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className="relative">
                    <img
                      src={imgFor(customer)}
                      alt={customer.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                    />
                    {isActive && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium truncate ${isActive ? 'text-blue-900' : 'text-gray-900'}`}>
                      {customer.name}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                      <span className="capitalize">{customer.gender}</span>
                      <span>•</span>
                      <span className="truncate">ID: {customer.id || 'CUST-1234'}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
  )
}

export default LeftSide