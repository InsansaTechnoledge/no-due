import React from 'react'
import { Link } from 'react-router-dom'

const PageHeaders = ({header , subheader , handleOnClick , navigate , buttonName , navigateName}) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 w-full">
    <div>
      <h1 className="component-header">{header}</h1>
      <p className="component-subheader">{subheader}</p>
    </div>
    <div className="flex flex-wrap items-center gap-2">
      {
        ( buttonName || handleOnClick ) && (
          <button onClick={handleOnClick} className="component-button">{buttonName}</button>
        )
      }
      {
        (navigate || navigateName) && (
          <Link replace to={navigate} className="component-button-green">
            {navigateName}
          </Link>
        )
      }
    </div>
  </div>
  )
}

export default PageHeaders
