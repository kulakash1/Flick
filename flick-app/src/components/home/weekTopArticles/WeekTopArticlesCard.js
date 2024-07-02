import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function WeekTopArticlesCard(props) {
  return (
    // <div>
    //   <div>
    //     <h3>{props.links}</h3>

    //     <div className="row">
    //       {props.links.map((link,index) => {
    //         return (
    //           <a href={link[1]} key={index}>
    //             {link[0]}
    //             </a>
    //         );
    //       })}
    //     </div>

    //     <p>{props.description}</p>
    //     <div className="row">
    //       {props.codeLinks.map((codeLink,index) => {
    //         return (
    //           <a href={codeLink[1]} key={index}>
    //             {codeLink[0]}
    //             </a>
    //         );
    //       })}
    //     </div>

    //     <button>Read More</button>

    //     </div>
    // </div>
    <div className="bg-[#6D435A] h-[400px] w-[400px] mb-4 hover:scale-105 transform transition-transform duration-200">
      <div className="flex flex-col">
        <div className="bg-[#D9D9D9] h-[200px] rounded-bl-lg rounded-br-lg">
          <img src={props.image} alt="article.jpg" />
        </div>
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <h5>{props.byPerson}</h5>
        </div>
        <div>
          <p>{props.articleDescription}</p>
        </div>
        <div className="flex flex-row justify-end">
          <button onClick={() => window.open(props.links, "_blank")}>
            <div className="flex flex-row">
              Read More
              <div className="flex flex-col justify-center ml-1">
                <FaLongArrowAltRight />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
