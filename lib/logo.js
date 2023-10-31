class Logo{
    constructor(){
        this.textEL=""
        this.shapeEl=""
    }

    render(){
        return`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEL}</svg>`
    }

    setText(words, color){
        if(words.length>3){
            throw new Error ("The text cannot exceed 3 characters")
        }
        this.textEL=`  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${words}</text>`
    }

    setShape(shape){
        this.shapeEl=shape.render()
    }
}

module.exports=Logo;