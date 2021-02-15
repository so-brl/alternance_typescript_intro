const prompts = require('prompts');


(async () => {
    const response = await prompts({
        type: 'text',
        name: 'Name',
        message: 'Choisissez le nom de votre personage : '
    });
    console.log(response);
})();
