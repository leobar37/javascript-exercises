const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color =  document.querySelector('.color');

btn.addEventListener('click' , function(){
let hexcolor = '#';
for (let i = 0; i < 6; i++) { 
     hexcolor+=hex[getRamdomNumber()];
}
  console.log(hexcolor);
  document.body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
});
function getRamdomNumber(){
// multiplicarlo por el tamaño del arreglo hace que 
//este solo este en ese rango
    return Math.floor(Math.random() * hex.length);
}