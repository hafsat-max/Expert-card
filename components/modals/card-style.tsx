import React, { useState } from "react";
import CardFlipper from "../create-card/card-flipper";
import { PersonalInfoProp } from "./personal-info";

const CardStyle = ({currentFormData, handleCurrentFormData}: PersonalInfoProp) => {
  const [flippedCard, setFlippedCard] = useState(null);

  const images = [
    {
      id: 'Landscape1',
      src1: "/create-card/landscapea1.png",
      src2: "/create-card/landscapea2.png",
    },
    {
      id: 'Landscape2',
      src1: "/create-card/landscapeb1.png",
      src2: "/create-card/landscapeb2.png",
    },
    {
      id: 'Portrait1',
      src1: "/create-card/portraita1.png",
      src2: "/create-card/portraita2.png",
    },
    {
      id: "Portrait2",
      src1: "/create-card/portraitb1.png",
      src2: "/create-card/portraitb2.svg",
    },
  ];

  const handleCardFlip = (cardId:any) => {
    if (flippedCard === cardId) {
      setFlippedCard(null);
    } else {
      setFlippedCard(cardId);
    }
  };

  return <div className="mt-3 w-[80%] mx-auto flex flex-col  gap-[33px]">
     <section className="flex flex-col gap-4 justify-center items-center">
      {images.map((item) => {
        return <div
          key={item.id}
          onClick={(e)=>{
            console.log(item.id)
            handleCurrentFormData({
              ...currentFormData,
              card_type: item.id
            });
          }}
          className={`rounded-lg cursor-pointer overflow-hidden ${
            flippedCard === item.id ? "flipped" : ""
          }`}
          onMouseEnter={() => handleCardFlip(item.id)}
          // onMouseLeave={() => handleCardFlip(item.id)}
          style={{ width: "200px",  }}
        >
          {/* Front side of the card */}
          <div className="card-front">
            <img
              src={item.src1}
              alt="Front Side"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back side of the card */}
          <div className="card-back">
            <img
              src={item.src2}
              alt="Back Side"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
})}
    </section>
  </div>;
};

export default CardStyle;
