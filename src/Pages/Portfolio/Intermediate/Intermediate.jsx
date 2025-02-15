import React from "react";
import Chat from "./intermediate-pics/chat.jpg";
import blog from "./intermediate-pics/blog.jpg";
const Intermediate = () => {
  const Intermediate = [
    {
      title: "Blog WebApp",
      image: blog,
      url: "https://hideardiary.netlify.app/",
    },
    {
      title: "Chat WebApp",
      image: Chat,
      url: "link soon",
    },
  ];
  return (
    <div className=" container p-5 ">
      <div className="  sm:columns-2 gap-4 md:gap-5">
        <div className="pictures mb-4 ">
          {Intermediate.map((Int, key) => {
            return (
              <div key={key}>
                <figure className=" w-fit">
                  <img
                    src={Int.image}
                    className=" border rounded-[10px]  w-[19em]  md:w-full md:overflow-hidden"
                    alt=""
                  />
                </figure>
                <figcaption className=" pl-[0.1875rem]">
                  <h1 className=" mt-5 mb-[0.125rem] ">{Int.title}</h1>
                  <a href={Int.url} className="text-blue-500">
                    {Int.url}
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

export default Intermediate;
