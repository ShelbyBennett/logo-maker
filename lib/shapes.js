class Shapes {
    constructor() {
        this.color=""
    }
    setColor(color){
        this.color=color
    }
}

class Triangle extends Shapes {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shapes{
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shapes{
    render(){
        return` <rect x="90" y="40"  width="130" height="130"  fill="${this.color}"/>`
    }
}

module.exports={Triangle, Circle, Square}