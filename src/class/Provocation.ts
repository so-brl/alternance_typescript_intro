export class Provocation {
    private _provocation: string;

    constructor() {
        function creatProvocation() {
            const fetch = require("node-fetch");

            return fetch('https://kaamelott.hotentic.com/api/random/personnage/Le%20Ma%C3%AEtre%20d\'Armes')

                .then((reponse: { json: () => any; }) => reponse.json())
                .then((data:any) => console.log(data.citation.citation));
        }

        this._provocation = creatProvocation();
    }

    get provocation(): string {
        return this._provocation;
    }

    set provocation(value: string) {
        this._provocation = value;
    }


}