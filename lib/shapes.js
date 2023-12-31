//Creating Shape Class (Collecting data from user Inquirer responses)
class Shape {
    constructor(colour, textColour, text) {
        this.colour = colour;
        this.textColour = textColour;
        this.text = text;
    }
}

//Creating Triangle Class (Passing data from Shape into a triangle .svg format)
class Triangle extends Shape {
    display() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 20 250, 180 55, 180" fill="${this.colour}"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColour}">${this.text}</text></g></svg>`;
    }
};
//Creating Square Class (Passing data from Shape into a square .svg format)
class Square extends Shape {
    display() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><rect x="75" y="40" width="160" height="160" fill="${this.colour}"/><text x="153" y="130" text-anchor="middle" font-size="40" fill="${this.textColour}">${this.text}</text></g></svg>`;
    }
};
//Creating Circle Class (Passing data from Shape into a circle .svg format)
class Circle extends Shape {
    display() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><circle  cx="150" cy="130" r="70" fill="${this.colour}"/><text x="150" y="140" text-anchor="middle" font-size="40" fill="${this.textColour}">${this.text}</text></g></svg>`;
    }
};


//Exporting classes
module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
}

