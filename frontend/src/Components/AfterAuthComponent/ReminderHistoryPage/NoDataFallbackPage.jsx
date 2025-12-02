import React from 'react'
import PageHeaders from '../../../utils/AfterAuthUtils/PageHeaders'

const NoDataFallbackPage = ({rotateDeg}) => {
  return (
    <>
      <div className="w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:block hidden">
        <PageHeaders
          header="Reminder History"
          subheader="Track all your past reminders in one place"
        />

        <div className="mt-12 ">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-64 h-64 mb-6">
              <img
                src="https://img.freepik.com/premium-vector/get-flat-illustration-sand-clock_9206-5587.jpg"
                alt="No reminders found"
                style={{
                  transform: `rotate(${rotateDeg}deg)`,
                  transition: "transform 0.8s ease-in-out",
                }}
                className="w-full h-full object-contain opacity-70"
              />
            </div>
            <p className="text-gray-500 text-base font-medium">No reminder history found</p>
            <p className="text-gray-400 text-sm mt-1">Start sending reminders to see them here</p>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6  md:hidden block">
        <PageHeaders
          header="Reminder History"
          subheader="Track all your past reminders in one place"
        />

        <div className="mt-12">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-64 h-64 mb-6">
              <img
                src="https://img.freepik.com/premium-vector/get-flat-illustration-sand-clock_9206-5587.jpg"
                alt="No reminders found"
                style={{
                  transform: `rotate(${rotateDeg}deg)`,
                  transition: "transform 0.8s ease-in-out",
                }}
                className="w-full h-full object-contain opacity-70"
              />
            </div>
            <p className="text-gray-500 text-base font-medium">No reminder history found</p>
            <p className="text-gray-400 text-sm mt-1">Start sending reminders to see them here</p>
          </div>
        </div>

        
      </div>
      </>
  )
}

export default NoDataFallbackPage
