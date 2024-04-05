import { useState } from "react";
import Quote from "./icons";

const testimonies = [
  {
    content: "This is a blushful testimony us laboriosam recusandae incidunt",
    avatar:
      "https://cdn.dribbble.com/users/117354/avatars/normal/4ebd205a954c10c86e89033ff42946f4.jpg?1467986844&resize=40x40",
    name: "Damion & Melancia Johnson",
    platform: "On Facebook",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor soluta culpa, quos est praesentium maiores necessitatib!",
    avatar:
      "https://cdn.dribbble.com/users/117354/avatars/normal/4ebd205a954c10c86e89033ff42946f4.jpg?1467986844&resize=40x40",
    name: "Jacob Mo",
    platform: "On Facebook",
  },
];

const Testimonial = () => {
  const [activeTestimony, setTestimony] = useState(testimonies[0]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {testimonies.map((testimony, i) => (
          <div
            className={
              testimony.name == activeTestimony.name
                ? "rounded-full shadow inline-flex  gap-2 p-1 items-center pr-3 cursor-pointer transition-colors hover:bg-[#f68338] hover:text-white t-tab active"
                : "rounded-full shadow inline-flex  gap-2 p-1 items-center pr-3 cursor-pointer transition-colors hover:bg-[#f68338] hover:text-white t-tab "
            }
            onClick={() => setTestimony(testimony)}
            key={i}
          >
            <img
              src={testimony.avatar}
              className="rounded-full w-7 h-7 sm:w-9 sm:h-9"
              alt=""
            />
            <span className="text-base">{testimony.name}</span>
          </div>
        ))}
      </div>

      <div className="my-4">
        <div className="shadow-lg p-5">
          <div>
            <Quote />
            <p className="py-5">{activeTestimony.content}</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={activeTestimony.avatar}
              className="rounded-full w-11 h-11"
              alt=""
            />
            <div>
              <div className="font-medium ">{activeTestimony.name}</div>
              <div className="text-gray-400 text-xs">
                {activeTestimony.platform}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
