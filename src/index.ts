import prompts from "prompts";
import {Character} from "./class/Character";


(async () => {
   const newCharacter = await prompts( [
        {
            type: 'text',
            name: 'pseudo',
            message: `Choisissez  le pseudo de votre personnage :`,
        },
        {
            type: 'text',
            name: 'sexe',
            message: `Choisissez  le sexe de votre personnage :`,
        },
        {
            type: 'number',
            name: 'life',
            message: 'Choisissez  le nombre de point de vie de votre personnage :',

        },
    ]);

    let myCharacter:Character = new Character(newCharacter.pseudo,newCharacter.sexe,newCharacter.life);
    myCharacter.summary();
    console.log('Ennemi en approche !');

})();



