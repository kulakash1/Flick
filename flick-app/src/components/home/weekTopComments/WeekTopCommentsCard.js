import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const WeekTopCommentsCard = (props) => {
  return (
    <div className="c">
      <div className="flex flex-row">
        <div>
          <img src={props.weekTopCommentMoovieImages} alt="Top Comments" className="w-[150px] h-full" />
        </div>
        <div className="flex flex-col">
          <div>
            <h2>{props.movieTitles}</h2>
          </div>
          <div>
            <p>{props.movieYear}</p>
          </div>
          <div className="flex flex-row">
            <div>
              <img src={props.weekTopCommentUserImages} alt="Circle" className="w-[60px] h-10 rounded-full" />
            </div>
            <div>
              <p>{props.criticName}</p>
            </div>
            <div>
              <p>{props.movieRatings}</p>
            </div>
          </div>
          <div>
            <p>{props.userComment}</p>
          </div>
          <div className="flex flex-row justify-end">
            <button onClick={() => window.open(props.seeMoreLinks, "_blank")}>
              <div className="flex flex-row">
                ...see more
                <div className="flex flex-col justify-center ml-1">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </button>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row">
                <div>
                <FaLongArrowAltRight />
                </div>
                <div>
                    <h2>Comments</h2>
                </div>
            </div>
            <div className="flex flex-row ml-4">
                <div>
                <FaLongArrowAltRight />
                </div>
                <div>
                    <h2>Likes</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
