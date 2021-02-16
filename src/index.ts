import prompts from "prompts";
import {Character} from "./class/Character";
import {Ennemy} from "./class/Enemy";

(async () => {
   const newCharacter = await prompts( [
        {
            type: 'text',
            name: 'pseudo',
            message: `Choisissez  le pseudo de votre personnage :`,
        },
        {
            type: 'select',
            name: 'sexe',
            message: `Choisissez  le sexe de votre personnage :`,
            choices: [
                { title: 'Femme', value: 'Femme' },
                { title: 'Homme', value: 'Homme' },
                { title: 'Limace', value: 'Limace' },
            ],
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

    const makeChoice = await prompts( [
        {
            type: 'select',
            name: 'action',
            message: 'Vous voulez ?',
            choices: [
                { title: 'combattre', value: true },
                { title: 'battre en retraite (fin de la partie)', value: false },
            ],
        }
    ]);

    console.log(makeChoice.action);
if (makeChoice.action){
    let ennemy: Ennemy = new Ennemy('Jason');
    ennemy.summary();
    myCharacter.attack(ennemy);
    console.log(ennemy);
}


})();



