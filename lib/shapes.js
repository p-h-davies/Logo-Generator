class Shape {
    constructor(colour, textColour, text) {
        this.colour = colour;
        this.textColour = textColour;
        this.text = text;
    }
}


class Triangle extends Shape {
    display() {
        return `triangle <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColour}">${this.text}</text></g></svg>`;
    }
}

class Rectangle extends Shape {
    display() {
        return ` rectangle <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColour}">${this.text}</text></g></svg>`;
    }
}

class Circle extends Shape {
    display() {
        return `circle <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><rect x="73" y="40" width="160" height="160" fill="${this.colour}"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColour}">${this.text}</text></g></svg>`;
    }
}



module.exports = Shape;
module.exports = Triangle;
module.exports = Circle;
module.exports = Rectangle;