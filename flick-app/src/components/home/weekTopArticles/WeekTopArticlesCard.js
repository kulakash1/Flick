import React, { useState } from 'react'
export default function WeekTopArticlesCard(props) {
    return (
    <div>
      <div>
        <h3>{props.links}</h3>
        
        <div className="row">
          {props.links.map((link,index) => {
            return (
              <a href={link[1]} key={index}>
                {link[0]}
                </a>
            );
          })}
        </div>



        <p>{props.description}</p>
        <div className="row">
          {props.codeLinks.map((codeLink,index) => {
            return (
              <a href={codeLink[1]} key={index}>
                {codeLink[0]}
                </a>
            );
          })}
        </div>

        <button>Go</button>

        </div>
    </div>
  )
}