import prompts from "prompts";
import {Character} from "./class/Character";
import {Ennemy} from "./class/Enemy";
import {callbackify} from "util";

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
                {title: 'Limace', value: 'Limace'},
            ],
        },
        {
            type: 'number',
            name: 'life',
            message: 'Choisissez  le nombre de point de vie de votre personnage :',

        },
    ]);

    let myCharacter: Character = new Character(newCharacter.pseudo, newCharacter.sexe, newCharacter.life);
    myCharacter.summary();
    console.log('Ennemi en approche !');

    const makeChoice = await prompts([
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
    console.log(makeChoice.action);

    if (makeChoice.action) {
        let ennemy: Ennemy = new Ennemy('Jason');
        ennemy.summary();
        myCharacter.attack(ennemy);
        if (ennemy.life > 0) {
            console.log('Il reste ' + ennemy.life + ' point de vie à ' + ennemy.name);
            console.log("---------------------------------");
            console.log("L'ennemi riposte !");
            console.log("---------------------------------");
            ennemy.attack(myCharacter);
            if (myCharacter.life > 0) {
                console.log('Il vous reste' + myCharacter.life + ' point de vie.');
                const makeChoice = await prompts([
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
                console.log(makeChoice.action);
                myCharacter.attack(ennemy);
            }else{
                console.log('THE END !!! You LOOOOSE !!! L\'attaque de '+ennemy.name+' a pulvérisé vos point de vie .' );
            }
        } else {
            console.log('THE END !!! You Win !!! Votre attaque à pulvérisé les point de vie de ' + ennemy.name);
        }
    }


})();



