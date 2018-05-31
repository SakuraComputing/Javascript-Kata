const path = require('path');
const filesystem = require('fs');

const randomTestSelector = () => {

    const dir = path.join(__dirname, '../');

    let exercises = [];

    // Access file system to return directories
    filesystem.readdirSync(dir).forEach((file =>  {

        const stat = filesystem.statSync(file);

        if (stat.isDirectory() && file !== 'randomTestSelector'
            && file !=='node_modules'
            && file !== '.git') {
            exercises.push(file)
        }

    }));

    // Choose at random an exercise
    const random = Math.floor(Math.random() * exercises.length);
    const chosenExercise = exercises[random];
    console.log(chosenExercise);

    return chosenExercise;

};
module.exports = randomTestSelector;