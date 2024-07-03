import React from 'react'

export const WeekTopReviewers = (props) => {
  return (
    <div className="hover:scale-105 transform transition-transform duration-200">
      <div className="flex flex-row">
        <div>
          <img src="popular.jpg" alt="Popular image.jpg" />
        </div>
        <div className="flex flex-col">
          <div>
            <h3>{props.criticNameReviewersTop}</h3>
          </div>
          <div className="flex flex-row">
            <div>
              <p>{props.totalNumMoviesReviewersTop}</p>
            </div>
            <span>,</span>
            <div>
              <p>{props.totalNumReviewsTop}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
