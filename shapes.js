class Shape {
    constructor() {
        this.color = "";
        this.textColour = ""
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

class Rectangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg> <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = Shape;
module.exports = Triangle;
module.exports = Circle;
module.exports = Rectangle;