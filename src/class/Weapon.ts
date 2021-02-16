export class Weapon {
    private _name: string;
    private _damage: number;


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get damage(): number{
        return this._damage;
    }

    set damage(value: number) {
        this._damage = value;
    }

    constructor( damage: number) {
        this._damage = damage;
        if ( damage == 10){
            this._name = "Légère";
        }else if (damage ==100){
            this._name = "Moyenne";
        }else {
            this._name = "Lourde";
        }
    }


}