import prompts, {Answers} from "prompts";
import {Character} from "./class/Character";
import {Ennemy} from "./class/Enemy";
import {Wizzard} from "./class/Wizzard";
import {Warrior} from "./class/Warrior";


(async () => {
    const newCharacter = await prompts([

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
                {title: 'Femme', value: 'Femme'},
                {title: 'Homme', value: 'Homme'},
            ],
        },        {
            type: 'select',
            name: 'type',
            message: `Choisissez  le type de votre personnage :`,
            choices: [
                {title: 'Wizzard', value: 'Wizzard'},
                {title: 'Warrior', value: 'Warrior'},
            ],
        },
    ]);

    console.log('Ennemi en approche !');

    let ennemy: Ennemy = new Ennemy('Jason');
    ennemy.summary();

    let  myCharacter = factoring(newCharacter.type,newCharacter.pseudo,newCharacter.sexe)
    myCharacter.summary();

    await playing(myCharacter, ennemy);



    function factoring(type: string, pseudo: string, sexe: string):Character {
        let myCharacter :Character;
        if (type == 'Wizzard') {
            myCharacter = new Wizzard(pseudo, sexe);

        } else if (type == 'Warrior') {
            myCharacter= new Warrior(pseudo, sexe);

        }
        // @ts-ignore
        return myCharacter;
    }
    async function fnMakeChoice() {
        const choice = await prompts([
            {
                type: 'select',
                name: 'action',
                message: 'Vous voulez ?',
                choices: [
                    {title: 'combattre', value: true},
                    {title: 'battre en retraite (fin de la partie)', value: false},
                ],
            }
        ]);
        return choice;

    }
    async function playing(myCharacter: Character, ennemy: Ennemy) {
        const makeChoice = await fnMakeChoice();
        if (makeChoice.action) {
            myCharacter.attack(ennemy)
            if (ennemy.life > 0) {
                console.log('Il reste ' + ennemy.life + ' point de vie à ' + ennemy.name);
                console.log("---------------------------------\nL'ennemi riposte !\n---------------------------------");
                ennemy.attack(myCharacter);
                if (myCharacter.life > 0) {
                    console.log('Il vous reste ' + myCharacter.life + ' point de vie .');
                    playing(myCharacter, ennemy);
                } else {
                    console.log('THE END !!! You LOOOOSE !!! L\'attaque de ' + ennemy.name + ' a pulvérisé vos point de vie .');
                }
            } else {
                console.log('THE END !!! You Win !!! Votre attaque à pulvérisé les point de vie de ' + ennemy.name);
            }
        } else {
            console.log('THE END !!! Vous avez abandonné');
        }
    }


})();


