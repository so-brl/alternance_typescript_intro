import {Character} from "./Character";

export class Ennemy {
    private _name: string;
    private _life: number

    constructor(name: string) {
        this._name = name;
        this._life = checkLife();

        function checkLife() {
            return Math.floor(Math.random() * 100);
        }
    }

    public summary() {
        console.log("---------------------------------");
        console.log(`Votre ennemi s'appel ${this._name} et son niveau de vie est de ${this._life} points.`);
        console.log("---------------------------------");
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

    public attack(character: Character){
        let levelAttack = Math.floor(Math.random() * 10)*0.5;
        console.log(`La puissance de l'attaque de ${this.name} est de  ${levelAttack} points.`);
        let characterLife = character.life;
        character.life = characterLife-levelAttack;
        console.log(`Il vous reste ${character.life} points de vie.`);
    }

}