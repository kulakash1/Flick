import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const WeekTopCommentsCard = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div>
          <img src="flex.jpg" alt="Top Comments Image" />
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
              <img src="CircleImg.jpg" alt="Circle Image" />
            </div>
            <div>
              <p>Critic Name</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
          </div>
          <div>
            <p>
              {" "}
              Comment Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sequi numquam eum explicabo magnam quidem cumque laborum rerum
              commodi dicta vitae?
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <button onClick={() => window.open("www.mqsoftware.com", "_blank")}>
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
