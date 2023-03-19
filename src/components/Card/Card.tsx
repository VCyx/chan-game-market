import React, { FC } from "react";
import { mockCardItem } from "@/components/Card/mockItems";
import { CardType } from "@/models/card";
import Image from "next/image";
import { SuitIcon } from "@/models/suit";

const Card: FC = () => {
  const card: CardType = mockCardItem;

  return (
    <div className={"w-80 h-96 p-6 bg-gray-400 relative"}>
      <Image className={"w-full h-60"} src={card.image} alt={card.name} />
      <div
        className={
          "w-24 p-2 absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-gray-500 text-center"
        }
      >
        {card.stats.move} / {card.stats.attackRange}
      </div>
      <div
        className={
          "w-12 h-12 p-4 absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 flex justify-center items-center bg-blue-300 rounded-full"
        }
      >
        {card.stats.attack}
      </div>
      <div
        className={
          "w-12 h-12 p-4 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 flex justify-center items-center bg-red-400 rounded-full"
        }
      >
        {card.stats.attack}
      </div>

      <Image
        className={
          "w-12 h-12 absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3"
        }
        src={SuitIcon[card.suit]}
        alt={"suit"}
      />
      <p className={"mt-2.5 p-1 w-full h-20 bg-gray-300"}>description</p>
    </div>
  );
};

export default Card;
