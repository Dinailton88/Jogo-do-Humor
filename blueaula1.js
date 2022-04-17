let img = document.getElementById("fotos_Altera");
let lista_Fotos = [
  "https://cdn.discordapp.com/attachments/964597817966465097/964962148130373702/camisa.rosa.png",
  "https://cdn.discordapp.com/attachments/964597817966465097/964962413336207380/camisa.preta.comflor.amar.png",
  "https://cdn.discordapp.com/attachments/964597817966465097/964933970255036446/camisa.tavendo.png",
  "https://cdn.discordapp.com/attachments/964597817966465097/964843049047978025/camisas.coloridas.tshirts.png",
];
function entrou() {
  button.style.background = "#F79ECA";
}
function saiu(){
  button.style.background = ''
}

let mais_fotos = document.querySelector("fotos_Altera");
let foto = 0;
let frase = document.getElementById("txt");
let button = window.document.getElementById("butao");
button.addEventListener("mouseenter", entrou);
button.addEventListener("mouseout", saiu);

function mudar_foto() {
  if (foto == 0) {
    img.setAttribute("src", ` ${lista_Fotos[1]} `);
    frase.innerHTML = ` Camisas como essa preta, linda `;
  } else if (foto == 1) {
    img.setAttribute("src", ` ${lista_Fotos[2]}`);
    frase.innerHTML = `Ou essa laranja...`;
  } else if (foto == 2) {
    img.setAttribute("src", ` ${lista_Fotos[3]}`);
    frase.innerHTML = `Diversas frases com dizeres baianos`;
  } else {
    img.setAttribute("src", ` ${lista_Fotos[0]}`);
  }
  foto++;
  if (foto > 3) {
    foto = 0;
    frase.innerHTML = `Conforto e personalidade traduzem nossas T-Shirts:`;
  }
}
// else if( img.attributes.src.nodeValue == lista_Fotos[2]){
//     img.setAttribute(
//         "src",
//         ` ${lista_Fotos[3]}`)
// }
// else if( img.attributes.src.nodeValue == lista_Fotos[1]){
//     img.setAttribute(
//         "src",
//         ` ${lista_Fotos[2]}`)
// }

// {
//   /* <script>

// var a = window.document.do
// a.addEventListener('click'.clicar)
// a.addEventListener('mouseenter', entar)
// a.addEventListener('mouseout', sair)

// function clicar(){

//     a.innerText = 'Clicou!'
//     a.style.background = 'red'
// }
// function entrar(){
//     a.innerText = 'Entrou!'
//     a.style.background = 'orange'
// }
// function sair(){
//     a.innerText = 'Saiu!'
//     a.style.background = 'green'
// }

// </script> */
// }
