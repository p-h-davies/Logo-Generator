//Import Classes
const { Triangle, Circle, Square } = require('./shapes.js');

//Triangle Testing
describe('Triangle', () => {
    //Tests Triangle Background  
    describe('triangle-colourTest', () => {
        it('return the string with correct colour', () => {
            const shape = new Triangle('blue');
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 20 250, 180 55, 180" fill="blue"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="undefined">undefined</text></g></svg>');
        });
    });
    //Tests Triangle Text  
    describe('triangle-text', () => {
        it('return the string with correct text', () => {
            const shape = new Triangle(undefined, undefined, 'Txt');
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 20 250, 180 55, 180" fill="undefined"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="undefined">Txt</text></g></svg>');
        });
    });
    //Tests Triangle Text Colour  
    describe('triangle-textColour', () => {
        it('return the string with correct text', () => {
            const shape = new Triangle(undefined, 'blue', undefined);
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 20 250, 180 55, 180" fill="undefined"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="blue">undefined</text></g></svg>');
        });
    });
});

//Square Testing
describe('Square', () => {
    //Tests Square Background  
    describe('square-colour', () => {
        it('return the string with correct colour', () => {
            const shape = new Square('blue');
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><rect x="75" y="40" width="160" height="160" fill="blue"/><text x="153" y="130" text-anchor="middle" font-size="40" fill="undefined">undefined</text></g></svg>');
        });
    });
    //Tests Square Text  
    describe('square-text', () => {
        it('return the string with correct text', () => {
            const shape = new Square(undefined, undefined, 'Txt');
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><rect x="75" y="40" width="160" height="160" fill="undefined"/><text x="153" y="130" text-anchor="middle" font-size="40" fill="undefined">Txt</text></g></svg>');
        });
    });
    //Tests Square Text Colour  
    describe('square-text-colour', () => {
        it('return the string with correct text', () => {
            const shape = new Square(undefined, 'blue', undefined);
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><rect x="75" y="40" width="160" height="160" fill="undefined"/><text x="153" y="130" text-anchor="middle" font-size="40" fill="blue">undefined</text></g></svg>');
        });
    });
});

//Triangle Testing
describe('Circle', () => {
    //Tests Triangle Background  
    describe('tcircle-colourTest', () => {
        it('return the string with correct colour', () => {
            const shape = new Circle('blue');
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><circle  cx="150" cy="130" r="70" fill="blue"/><text x="150" y="140" text-anchor="middle" font-size="40" fill="undefined">undefined</text></g></svg>');
        });
    });
    //Tests Triangle Text  
    describe('circle=text', () => {
        it('return the string with correct text', () => {
            const shape = new Circle(undefined, undefined, 'Txt');
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><circle  cx="150" cy="130" r="70" fill="undefined"/><text x="150" y="140" text-anchor="middle" font-size="40" fill="undefined">Txt</text></g></svg>');
        });
    });
    //Tests Triangle Text Colour  
    describe('circle-text-colour', () => {
        it('return the string with correct text', () => {
            const shape = new Circle(undefined, 'blue', undefined);
            shape.display();
            expect(shape.display()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><circle  cx="150" cy="130" r="70" fill="undefined"/><text x="150" y="140" text-anchor="middle" font-size="40" fill="blue">undefined</text></g></svg>');
        });
    });
});