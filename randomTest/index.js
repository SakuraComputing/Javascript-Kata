const path = require('path');
const filesystem = require('fs');

const randomTestSelector = () => {

    const dir = path.join(__dirname, '../');

    let exercises = [];

    filesystem.readdirSync(dir).forEach((file =>  {

        const stat = filesystem.statSync(file);

        if (stat.isDirectory() && file !== 'randomTestSelector' && file !=='node_modules') {
            exercises.push(file)
        }

    }));

    return exercises;

};
module.exports = randomTestSelector;