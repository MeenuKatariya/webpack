import sum from "./sum.js";
import ('./index.css');

console.log(sum(13,13));


let h1 = document.createElement('h1');
h1.classList.add('red-font');
h1.innerText = 'Hello World !';

let div=document.createElement("div");

let input=document.createElement("input");
input.placeholder="Enter";

div.append(input)

document.getElementById('root').append(h1,div);