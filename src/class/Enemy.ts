export class Ennemy {
    protected name: string;
    protected life: number

    constructor(name: string, life:number) {
        this.name = name;
        this.life = life;
    }

    public summary() {
        console.log(`Votre ennemi s'appel ${this.name} et son niveau de vie est de ${this.life} points.`);
    }

}