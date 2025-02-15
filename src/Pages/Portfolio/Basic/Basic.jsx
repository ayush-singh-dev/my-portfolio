import React from "react";

import calculator from "./Basic-pics/calculator.jpg";
import Todo from "./Basic-pics/Todo.jpg";
import weather from "./Basic-pics/weather.jpg";
import red from "./Basic-pics/red.jpg";
const Basic = () => {
  const basicProject = [
    {
      title: "Calculator",
      image: calculator,
      url: "https://ayush-singh-dev.github.io/Javascript-Projects/calculator/html/",
    },
    {
      title: "Todo",
      image: Todo,
      url: "soon..",
    },
    {
      title: "Weather",
      image: weather,
      url: "https://ayush-singh-dev.github.io/my-weather-app/",
    },
    {
      title: "Red Store",
      image: red,
      url: "https://ayush-singh-dev.github.io/Red-Store/",
    },
  ];
  return (
    <div className=" container p-5 ">
      <div className="  sm:columns-2 gap-4 md:gap-5">
        <div className="pictures mb-4 ">
          {basicProject.map((basic, key) => {
            return (
              <div key={key}>
                <figure className=" w-fit">
                  <img
                    src={basic.image}
                    className=" border rounded-[10px]  w-[19em]  md:w-full md:overflow-hidden"
                    alt=""
                  />
                </figure>
                <figcaption className=" pl-[0.1875rem]">
                  <h1 className=" mt-5 mb-[0.125rem] ">{basic.title}</h1>
                  <a href={basic.url} className="text-blue-500">
                    {basic.url}
                  </a>
                </figcaption>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Basic;
