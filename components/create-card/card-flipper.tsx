import React, { useState } from "react";
import Image from "next/image";


const images = [
    {
        image1: '/create-card/frame-a1.svg',
        image2: '/create-card/frame-a2.svg',
    },
    {
        image1: '/create-card/frame-a1.svg',
        image2: '/create-card/frame-a2.svg',
    },
    {
        image1: '/create-card/frame-a1.svg',
        image2: '/create-card/frame-a2.svg',
    },
    {
        image1: '/create-card/frame-a1.svg',
        image2: '/create-card/frame-a2.svg',
    },
]

const CardFlipper = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
        {
            images.map(item =>{
                return (
                  <div
                    className={`w-[70%] mx-auto rounded-lg  cursor-pointer overflow-hidden ${
                      isFlipped ? "flipped" : ""
                    }`}
                    onMouseEnter={() => setIsFlipped(true)}
                    onMouseLeave={() => setIsFlipped(false)}
                    style={
                      isFlipped
                        ? {
                            transformStyle: "preserve-3d",
                            transform: "rotateY(-180deg)",
                            animation: "flip-animation 1s linear ",
                            transformOrigin: "center",
                          }
                        : {}
                    }
                  >
                    {/* Front side of the card */}
                    {!isFlipped ? (
                      <div
                        style={{
                          transformStyle: "preserve-3d",
                          transform: "rotateY(180deg)",
                          animation: "flip-animation  10s linear",
                          animationDelay: "5s",
                          animationDuration: "5s ",
                          transformOrigin: "center",
                        }}
                        className="flex p-3 justify-center items-center  bg-red-900 text-white border border-gray-700   rounded-lg h-[250px]"
                      >
                        <Image src={item.image1} fill alt="card" />

                        {item.image1}
                      </div>
                    ) : (
                      // user detail
                      <div
                        style={
                          isFlipped
                            ? { transform: "rotateY(180deg)" }
                            : { transform: "rotateY(-180deg)" }
                        }
                        className="flex flex-col max-w-[180px] border border-gray-700 rounded-lg h-[250px]"
                      >
                        <div
                          className="flex-1 h-10 bg-cover bg-no-repeat bg-top-center overflow-hidden  !w-full"
                          style={{ backgroundImage: `${item.image2}` }}
                        ></div>

                        <div className="flex-1 flex flex-col gap-2 p-[10px]">
                          <h2 className=" font-bold text-2xl text-center whitespace-nowrap">
                            Alabi Adewale
                          </h2>
                          <p className=" text-sm text-center">
                            Back-end Development
                          </p>
                          <p className=" text-sm text-center">ATS 2.0</p>
                        </div>
                      </div>
                    )}
                    {/* Back side of the card */}
                  </div>
                );
            })
        }
    </>


  );
};

export default CardFlipper;
