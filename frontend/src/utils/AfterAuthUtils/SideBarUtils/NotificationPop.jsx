import { X } from 'lucide-react';
import React, { useState } from 'react'

const NotificationPop = () => {
  const [notification , setNotification] = useState(true);

  return (
    <>
    {
      notification && (
        <div
          id="dropdown-cta"
          className="p-4 mt-6 rounded-lg border-2 border-green-600 shadow-sm"
          role="alert"
        >
        <div className="flex items-center mb-3">
          <span className="bg-green-400/20 text-gray-600 text-xs font-medium px-2.5 py-1 rounded backdrop-blur-sm">
            Notification 
          </span>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 text-gray-600/90 hover:text-gray-600 hover:bg-gray-600/10 inline-flex justify-center items-center w-7 h-7 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600/30"
            aria-label="Close"
            onClick={() => setNotification(false)}
          >
            <span className="sr-only">Close</span>
            <X className="w-4 h-4"/>
          </button>
        </div>
        <p className="mb-3 text-sm text-gray-600/95 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vel eveniet est maiores eaque? Ad magni dolore placeat quam facere labore non ab debitis! Adipisci eum officia cum fuga cupiditate.
        </p>
        <a
          className="text-sm text-green-600 font-medium hover:underline inline-flex items-center transition-all"
          href="#"
        >
          Turn Notification off
          <span className="ml-1">→</span>
        </a>
      </div>
      )
    }
    </>
  )
}

export default NotificationPop