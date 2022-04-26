// let display=document.getElementById("display");
// let allButtons=Array.from(document.getElementsByClassName("button"));
// allButtons.map( function (button)  {
//     button.addEventListener('click', (event) => {
//         switch(event.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch(err) {
//                     display.innerText = "Error"
//                     console.log(err);
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);//array=[1,2,3,4,5,6,7,8,9,10];
//                 }
//                 break;
//             default:
//                 display.innerText += event.target.innerText;
//         }
//     });
// });

// let display=document.getElementById("display");
// let allButtons=Array.from(document.getElementsByClassName("button"));
//  let action=function(event){
//     switch(event.target.innerText){
//         case 'C':
//             display.innerText = '';
//             break;
//         case '=':
//             try{
//                 display.innerText = eval(display.innerText);
//             } catch {
//                 display.innerText = "Error"
//             }
//             break;
//         case '←':
//             if (display.innerText){
//                display.innerText = display.innerText.slice(0, -1);
//             }
//             break;
//         default:
//             display.innerText += event.target.innerText;
//     }
// }
// allButtons.map( function (pressed)  {
//     pressed.addEventListener('click', action); 
// });


let display=document.getElementById("display");
let allButtons=Array.from(document.getElementsByClassName("button"));
allButtons.map((button)=>{
    button.addEventListener("click", (e)=>{
        switch (e.target.innerText) {
            case "C":
                display.innerText="";
                break;
            case "=":
                try{
                    display.innerText=eval(display.innerText);
                }
            catch(err){
                display.innerText="Error!";
            }   
            break;     
            case "←":
                display.innerText=display.innerText.slice(0,-1);
                break;
            default:
                display.innerText+=e.target.innerText;
        }
    })
})