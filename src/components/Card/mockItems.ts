import { CardType } from "@/models/card";
import mockCardImg from "./mockCardImg.png";
import { Suit } from "@/models/suit";

export const mockCardItem: CardType = {
  name: "Droniada",
  image: mockCardImg,
  skill: null,
  suit: Suit.HEARTS,
  stats: {
    move: 3,
    attack: 1,
    attackRange: 2,
    hp: 5,
  },
  character: ["toxic", "soft"],
};
