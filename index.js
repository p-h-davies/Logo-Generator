const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Rectangle = require('./lib/shapes.js');


const filename = `logo.svg`;
function generateSVG(filename, responses) {

    let svgString = "";
    let userShape;
    if (responses.shape == 'Triangle') {
        userShape = new Triangle(responses.colour, responses.textColour, responses.text);
        svgString = userShape.display()

    }
    else if (responses.shape == 'Circle') {
        userShape = new Circle(responses.colour, responses.textColour, responses.text);
        svgString = userShape.display()

    } else if (responses.shape == 'Rectangle') {
        userShape = new Rectangle()
        svgString = userShape.display(responses.colour, responses.textColour, responses.text)
    }

    fs.writeFile(filename, svgString, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    )
    return
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
            name: 'textColour',
            message: 'What colour would you like your text to be? [Enter either colour name or hexidecimal code]',
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            name: 'shape',
            choices: ['Triangle', 'Rectangle', 'Circle'],
        },
    ])
    .then((responses) => {
        generateSVG(filename, responses)
    });

