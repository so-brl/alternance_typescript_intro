import {Ennemy} from "../class/Enemy";

interface Fighter{
    attack: (fighter:Fighter) => void
    takeDamage: (attack: number) => number
}


export { Fighter }