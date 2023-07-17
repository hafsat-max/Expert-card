import React, { useState } from "react";
import clsx from "clsx";
import ReactCardFlip from "react-card-flip";

import { PersonalInfoProp } from "./personal-info";

const CardStyle = ({
  currentFormData,
  handleCurrentFormData,
}: PersonalInfoProp) => {
  const [flippedCards, setFlippedCards] = useState({});

  const images = [
    {
      id: "Landscape1",
      src1: "/create-card/landscapea1.png",
      src2: "/create-card/landscapea2.png",
      height: 166,
    },
    {
      id: "Landscape2",
      src1: "/create-card/landscapeb1.png",
      src2: "/create-card/landscapeb2.png",
    },
    {
      id: "Portrait1",
      src1: "/create-card/portraita1.png",
      src2: "/create-card/portraita2.png",
      height: 176,
    },
    {
      id: "Portrait2",
      src1: "/create-card/portraitb1.png",
      src2: "/create-card/portraitb2.svg",
      height: 176,
    },
  ];

  const handleCardFlip = (cardId) => {
    setFlippedCards((prevFlippedCards) => ({
      ...prevFlippedCards,
      [cardId]: !prevFlippedCards[cardId],
    }));
  };

  return (
    <div className="mt-3 w-[80%] mx-auto flex flex-col  gap-[33px]">
      <section className="flex flex-col gap-[33px] justify-center items-center">
        {images.map((item) => {
          const isFlipped = flippedCards[item.id];

          return (
            <div
              key={item.id}
              onClick={(e) => {
                handleCurrentFormData({
                  ...currentFormData,
                  card_type: item.id,
                });
              }}
              className={`rounded-lg cursor-pointer overflow-hidden ${
                isFlipped ? "flipped" : ""
              }`}
              onMouseEnter={() => handleCardFlip(item.id)}
              onMouseLeave={() => handleCardFlip(item.id)}
              style={{ width: "200px" }}
            >
              <div>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                  {/* Front side of the card */}
                  <div>
                    <img
                      src={item.src1}
                      alt="Front Side"
                      className="w-full h-full object-cover"
                      width={item.height}
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
                </ReactCardFlip>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CardStyle;
