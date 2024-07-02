import React from 'react'

export const WeekTopCommentsCard = () => {
  return (
    <div>
        <div className="flex flex-row">
            <div>
                <img src='flex.jpg' alt='Top Comments Image' />
            </div>
            <div className="flex flex-col">
                <div>
                    <h2>Movie Title</h2>
                </div>
                <div>
                    <p>Movie Year</p>
                </div>
                <div className="flex flex-row">
                    <div>
                        <img src='CircleImg.jpg' alt='Circle Image' />
                    </div>
                    <div>
                        <p>Critic Name</p>
                    </div>
                    <div>
                        <p>Rating</p>
                    </div>
                </div>
                <div>
                    <p> Comment Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi numquam eum explicabo magnam quidem cumque laborum rerum commodi dicta vitae?</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}