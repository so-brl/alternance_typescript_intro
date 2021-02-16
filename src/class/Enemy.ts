import {Fighter} from "../interface/Fighter";
import {Provocation} from "./Provocation";

export class Ennemy implements Fighter, Provocation{
    private _name: string;
    private _life: number

    constructor(name: string) {
        this._name = name;
        this._life = checkLife();

        function checkLife() {
            return Math.floor(Math.random() * 1000);
        }
    }

    public summary() {
        console.log(`---------------------------------\nVotre ennemi s'appel ${this._name} et son niveau de vie est de ${this._life} points.\n---------------------------------`);
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get life(): number {
        return this._life;
    }

    set life(value: number) {
        this._life = value;
    }

    public attack(fighter:Fighter) {
        let levelAttack = Math.floor(Math.random() * 100) * 0.5;
        console.log(`La puissance de l'attaque de ${this.name} est de  ${levelAttack} points.`);
        fighter.takeDamage(levelAttack)
    }

    takeDamage(attack: number): number {
        let fighterLife = this.life;
        this.life = fighterLife-attack ;
        return attack;
    }

    public getProvocation() {
        const fetch = require("node-fetch");

        return fetch('https://kaamelott.hotentic.com/api/random/personnage/Le%20Ma%C3%AEtre%20d\'Armes')

            .then((reponse: { json: () => any; }) => reponse.json())
            .then((data:any) => console.log(data.citation.citation));
    }

}