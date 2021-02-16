import {Ennemy} from "../class/Enemy";

export  interface Fighter{
    attack: (fighter:Fighter) => void
    takeDamage: (attack: number) => number
}


