"use script";

const color = document.querySelector('#color');
const result = document.querySelector('.para');
const box = document.querySelector('.cnt2');

color.addEventListener('input',showColor);
function showColor(){
     //get color values and rgbvalues
    let colorVal = color.value;
    let rgbVal = hexTorgb(colorVal);

    result.textContent = color.value;
    box.style.background = color.value;
    
    //show rgb values to the box
    box.innerHTML = rgbVal;
// console.log(color.value);
}
function hexTorgb(hex){
    // return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
    let red = ('0x' + hex[1] + hex[2] | 0);
    let green = ('0x' + hex[3] + hex[4] | 0);
    let blue = ('0x' + hex[5] + hex[6] | 0);

    let txt = `Selected project has rgb as : <br> Red : ${red} <br> Green : ${green} <br> Blue : ${blue} <br> RGB value : rgb(${red}, ${green}, ${blue})`;
    return txt;
}