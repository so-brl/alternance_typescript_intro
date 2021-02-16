import {Fighter} from "../interface/Fighter";
import {Character} from "./Character";


export class Warrior extends Character{
    constructor(pseudo: string, sexe: string ) {
        super(pseudo,sexe,10000);
    }
}