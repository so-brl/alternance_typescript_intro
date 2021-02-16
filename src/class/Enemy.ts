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
        console.log(`Votre ennemi s'appel ${this._name} et son niveau de vie est de ${this._life} points.`);
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

}