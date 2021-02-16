import {Fighter} from "../interface/Fighter";
import {Weapon} from "./Weapon";


export class Character implements Fighter {

    private _pseudo: string;
    private _sexe: string;
    protected _life: number;
    protected _weapon: Weapon;

    constructor(pseudo: string, sexe: string, life: number, weapon: Weapon) {
        this._pseudo = pseudo;
        this._sexe = sexe;
        this._life = life;
        this._weapon = weapon;
    }

    public summary() {
        console.log(`Salut, je m'appel ${this._pseudo}, personnage de type ${this._sexe}, mon niveau de vie est de ${this._life} points et j'ai une arme ${this._weapon.name} avec une puissance de frappe de ${this._weapon.damage} points.`);
    }

    public attack(fighter: Fighter) {
        let levelAttack = Math.floor(Math.random() * 1000);
        let levelWeapon = this.weapon.damage;
        let globalLevel = levelAttack+levelWeapon;
        console.log(`La puissance de votre attaque est de  ${globalLevel} points. (Puissance du coup : ${levelAttack} + Puissance de votre arme : ${levelWeapon})`);
        fighter.takeDamage(globalLevel);
    }

    takeDamage(attack: number): number {
        let fighterLife = this.life;
        this.life = fighterLife - attack ;
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

    get weapon(): Weapon {
        return this._weapon;
    }

    set weapon(value: Weapon) {
        this._weapon = value;
    }
}