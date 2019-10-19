// Examine Document Object
console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.body);
document.title = 'New title';


// Selecting element by Id
const par1 = document.getElementById('par1');
console.log(par1);
par1.innerHTML = "Hello World";

// Selecting element by class
const h1 = document.getElementsByClassName('h1');
console.log(h1);
h1[0].innerHTML = "Heading One";

// Selecting element by element/tag name
let allPar = document.getElementsByTagName('p');
console.log(allPar);
for (let i = 0; i < allPar.length; i++) {
  allPar[i].innerHTML= "Hello World";
}

// Selecting element using querySelector
console.log(document.querySelector('#par1'));
console.log(document.querySelector('.h1'));
console.log(document.querySelector('p'));
console.log(document.querySelectorAll('p'));

// Event listener
function alertPopup() {
  alert('Hello World');
}
const button = document.querySelector('button');
button.addEventListener("click", alertPopup);


