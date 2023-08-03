class Shape {
    constructor() {
        this.colour = "";
        this.textcolour = "";
        this.text = "";
    }

    setColor(shapeColour) {
        this.colour = shapeColour;
    }
    setColor(textColour) {
        this.textcolour = textColour;
    }
    setColor(userText) {
        this.text = userText;
    }
}


class Triangle extends Shape {
    display() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" />`;
    }
}

class Circle extends Shape {
    display() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <rect x="73" y="40" width="160" height="160" fill="${this.colour}" />`;
    }
}

class Rectangle extends Shape {
    display() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
    }
}

module.exports = Shape;
module.exports = Triangle;
module.exports = Circle;
module.exports = Rectangle;