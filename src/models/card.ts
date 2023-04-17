import { Suit } from "@/models/suit";
import { StaticImageData } from "next/image";

export type CardType = {
    name: string;
    image: string | StaticImageData;
    suit: Suit;
    stats: CardStats;
    skill: {
        type: SkillType,
        description: string,
        mechanic: any
    };
    character: string[];
}

export type CardStats = {
    move: number;
    attack: number;
    hp: number;
    attackRange: number;
}

export enum SkillType  {
    ACTIVE= "ACTIVE",
    PASSIVE = "PASSIVE"
}
