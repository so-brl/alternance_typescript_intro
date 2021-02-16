import {Ennemy} from "./Enemy";


export class Character {
    protected pseudo: string;
    protected sexe: string;
    protected life: number

    constructor(pseudo: string, sexe: string , life:number) {
        this.pseudo = pseudo;
        this.sexe = sexe;
        this.life = life;
    }

    public summary() {
        console.log(`Salut, je m'appel ${this.pseudo}, personnage de type ${this.sexe} et mon niveau de vie est de ${this.life} points.`);
    }

    public attack(ennemy: Ennemy){
        let levelAttack = Math.floor(Math.random() * 10);
        console.log(`La puissance de l'attaque est de  ${levelAttack} points.`);
        let ennemyLife = ennemy.life;
        ennemy.life = ennemyLife-levelAttack;
    }
}