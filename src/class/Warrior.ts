import {Fighter} from "../interface/Fighter";
import {Character} from "./Character";
import {Weapon} from "./Weapon";


export class Warrior extends Character{
    constructor(pseudo: string, sexe: string , weapon: Weapon) {
        super(pseudo,sexe,10000,weapon);
    }
}