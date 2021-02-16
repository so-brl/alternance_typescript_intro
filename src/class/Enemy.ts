import {Fighter} from "../interface/Fighter";

export class Ennemy implements Fighter {
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
        this.life = fighterLife-attack * 0.5;
        return attack * 0.5;
    }

}