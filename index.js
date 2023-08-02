const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./shapes.js');
const Circle = require('./shapes.js');
const Rectangle = require('./shapes.js');



function generateSVG(responses) {

    let userShape = "";

    if (responses.shape === "Triangle") {
        userShape = new Triangle();
    }
    else if (responses.shape === "Circle") {
        userShape = new Circle();
    } else {
        userShape = new Rectangle()
    }
}



inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What would you like your logo text to be? [Three Characters Max]',
        },
        {
            type: 'input',
            name: 'colour',
            message: 'What colour would you like your logo to be? [Enter either colour name or hexidecimal code]',
        },
        {
            type: 'input',
            name: 'text-colour',
            message: 'What colour would you like your text to be? [Enter either colour name or hexidecimal code]',
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            name: 'shape',
            choices: ['Triangle', 'Square', 'Circle'],
        },
    ])
    .then((responses) => {
        const svg = functions.generateSVG(responses);
        const filename = `logo.svg`;
        fs.writeFile(filename, svg, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')
        );
    });

