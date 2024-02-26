console.log("Script is running!");
// rest of your code
document.cookie = "myCookie=myValue; SameSite=Strict; path=/";

const buttons =document.querySelectorAll('.button');
// console.log("buttons",buttons)
const body =document.querySelector("body")

buttons.forEach(button => {
console.log(button);
button.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)
    
    switch (e.target.id) {
        case 'goldenrod':
            body.style.background = e.target.id;
            
            break;
            
            case 'rosybrown':
            body.style.background = e.target.id;
            
            break;
        case 'cadetblue':
            body.style.background = e.target.id;
            
            break;
        case  'palegreen':
            body.style.background = e.target.id;
            
            break;
    
        default:
            console.log("Click the desired")
            break;
    }

})
    
});