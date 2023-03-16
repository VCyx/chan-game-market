import { Suit } from "@/models/suit";

export type CardType = {
  name: string;
  image: string;
  suit: Suit;
  stats: CardStats;
  skill: any;
  character: string[];
};

export type CardStats = {
  move: number;
  attack: number;
  hp: number;
  attackRange: number;
};
