const inquirer= require("inquirer")
const fs=require("fs")
const Logo= require("./lib/logo")
const { Triangle, Circle, Square }= require("./lib/shapes")

function init(){
    inquirer.prompt([
        {
            type: "list",
            name:"logoShape",
            message:"what shape would you like your logo to be?",
            choices:["Triangle", "Circle", "Square"]
        },
        {
            type:"input",
            name:"shapeColor",
            message:"Choose a color for your Shape"
        },
        {
            type:"input",
            name:"logoText",
            message:"Enter your logo text - cannot be more than 3 characters",
            validate:(logoText)=> logoText.length <=3 
            || "The text cannot exceed 3 characters"
        },
        {
            type:"input",
            name:"textColor",
            message:"Choose a color for your text"
        }
    ]).then(({logoShape, shapeColor, logoText, textColor})=>{
        let shape;
        switch(logoShape){
            case"Triangle":
            shape= new Triangle()
            break;
            case "Circle":
            shape= new Circle()
            break;
            default:
            shape= new Square()
            break;
        }
        shape.setColor(shapeColor)

        const logo= new Logo()
        logo.setText(logoText, textColor)
        logo.setShape(shape)

        return fs.writeFileSync("./examples/logo.svg", logo.render())
    }).then(()=>{
        console.log("Logo has been generated");
    }).catch((err)=>{
        console.error(err)
        console.log("Something went wrong!");
    })
}

init()