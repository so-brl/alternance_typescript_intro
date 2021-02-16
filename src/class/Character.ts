import {Fighter} from "../interface/Fighter";


export class Character implements Fighter {
    private _pseudo: string;
    private _sexe: string;
    protected _life: number

    constructor(pseudo: string, sexe: string, life: number) {
        this._pseudo = pseudo;
        this._sexe = sexe;
        this._life = life;
    }

    public summary() {
        console.log(`Salut, je m'appel ${this._pseudo}, personnage de type ${this._sexe} et mon niveau de vie est de ${this._life} points.`);
    }

    public attack(fighter: Fighter) {
        let levelAttack = Math.floor(Math.random() * 100);
        console.log(`La puissance de votre attaque est de  ${levelAttack} points.`);
        fighter.takeDamage(levelAttack);
    }

    takeDamage(attack: number): number {
        let fighterLife = this.life;
        this.life = fighterLife - attack;
        return attack;
    }

    get pseudo(): string {
        return this._pseudo;
    }

    set pseudo(value: string) {
        this._pseudo = value;
    }

    get sexe(): string {
        return this._sexe;
    }

    set sexe(value: string) {
        this._sexe = value;
    }

    get life(): number {
        return this._life;
    }

    set life(value: number) {
        this._life = value;
    }
}