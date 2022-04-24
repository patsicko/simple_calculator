// let display=document.getElementById("display");
// let allButtons=Array.from(document.getElementsByClassName("button"));
// allButtons.map( function (pressed)  {
//     pressed.addEventListener('click', (event) => {
//         switch(event.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += event.target.innerText;
//         }
//     });
// });

let display=document.getElementById("display");
let allButtons=Array.from(document.getElementsByClassName("button"));
 let action=function(event){
    switch(event.target.innerText){
        case 'C':
            display.innerText = '';
            break;
        case '=':
            try{
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error"
            }
            break;
        case '←':
            if (display.innerText){
               display.innerText = display.innerText.slice(0, -1);
            }
            break;
        default:
            display.innerText += event.target.innerText;
    }
}
allButtons.map( function (pressed)  {
    pressed.addEventListener('click', action); 
});


