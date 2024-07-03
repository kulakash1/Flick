import React from 'react'

export const WeekPopularReviewers = (props) => {
  return (
    <div className="hover:scale-105 transform transition-transform duration-200">
      <div className="flex flex-row">
        <div>
          <img src="popular.jpg" alt="Popular image.jpg" />
        </div>
        <div className="flex flex-col">
          <div>
            <h3>{props.criticNameReviewersPopular}</h3>
          </div>
          <div className="flex flex-row">
            <div>
              <p>{props.totalNumMoviesReviewersPopular}</p>
            </div>
            <span>,</span>
            <div>
              <p>{props.totalNumReviewsPopular}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
