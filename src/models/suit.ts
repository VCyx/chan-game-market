import heartsImg from "../assets/suit/hearts.svg";
import diamondsImg from "../assets/suit/diamonds.svg";
import spadesImg from "../assets/suit/spades.svg";
import clubsImg from "../assets/suit/clubs.svg";

export enum Suit {
    HEARTS ="HEARTS",
    DIAMONDS = "DIAMONDS",
    SPADES = "SPADES",
    CLUBS = "CLUBS"
}

export const SuitIcon: { [key in Suit]: string } = {
  [Suit.HEARTS]: heartsImg,
  [Suit.DIAMONDS]: diamondsImg,
  [Suit.SPADES]: spadesImg,
  [Suit.CLUBS]: clubsImg,
};
