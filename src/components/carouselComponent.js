import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [current]);

  return (
    
    <div className="flex justify-center items-center overflow-hidden relative  w-full mx-auto ">
      <div
        className="flex transition ease-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} className="w-full object-cover" />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide} className="bg-slate-600 hover:bg-slate-400 rounded-full">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="bg-slate-600 hover:bg-slate-400 rounded-full">
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}
