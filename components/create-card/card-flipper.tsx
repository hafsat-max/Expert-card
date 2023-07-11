import React, { useState } from "react";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);


  return (
    <div
      className={` rounded-lg  cursor-pointer overflow-hidden c ${
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
              transformOrigin: "center"

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
            animation: "flip-animation 1s linear",
            transformOrigin: "center"
          }}
          className="flex p-3 justify-center items-center min-w-[180px]  bg-red-900 text-white border border-gray-700   rounded-lg h-[250px]"
        >
          <h1
            style={isFlipped? { transform: "rotateY(-180deg)" }: { transform: "rotateY(180deg)" }}
            className=" text-3xl bg-center"
          >
            View User
          </h1>
        </div>
      ) : (
        
        // user detail
        <div
          style={isFlipped?{ transform: "rotateY(180deg)" }: { transform: "rotateY(-180deg)" }}
          className="flex flex-col min-w-[180px] border border-gray-700 rounded-lg h-[250px]"
        >
          <div
            className="flex-1 h-10 bg-cover bg-no-repeat bg-top-center overflow-hidden "
            style={{ backgroundImage: "url('/road.jpg')" }}
          ></div>

          <div className="flex-1 flex flex-col gap-2 p-[10px]">
            <h2 className=" font-bold text-2xl text-center whitespace-nowrap">
              Alabi Adewale
            </h2>
            <p className=" text-sm text-center">Back-end Development</p>
            <p className=" text-sm text-center">ATS 2.0</p>
          </div>
        </div>
      )}
      {/* Back side of the card */}

    </div>
  );
};

export default FlippingCard;
