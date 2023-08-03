const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Rectangle = require('./lib/shapes.js');
const { userInfo } = require('os');

const filename = `logo.svg`;



function generateSVG(filename, responses) {

    let svgString = "";


    if (responses.shape === "Triangle") {
        userShape = new Triangle();
        svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <polygon points="150, 18 244, 182 56, 182" fill="${this.text}"/>`

    }
    else if (responses.shape === "Circle") {
        userShape = new Circle();
        svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <rect x="73" y="40" width="160" height="160" fill="${this.colour}"/>`
    } else {
        userShape = new Rectangle()
        svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/>`
    }

    fs.writeFile(filename, svgString, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    )
    return userShape
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
        generateSVG(filename, responses)
        console.log(userShape)
    });

