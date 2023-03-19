// let id=Math.floor(Math.random()*100);
// const url =`https://pokeapi.co/api/v2/pokemon/${id}`;


// let pokemonImg;
//  fetch(url).then(response => response.json()).then(data => {
//     const {sprites}= data;
//     console.log(data);
//     const {name}= data;
//     const {front_shiny}= sprites;
//     console.log(front_shiny);
//     imagenPoke.src= front_shiny;
// imagenPoke.height="200";
// imagenPoke.width="200";
// divPoke.append(imagenPoke);
// parrafo.innerHTML=name;

//  } );

// const imagenPoke= document.createElement('img');
// const divPoke=document.getElementById('imagenPoke');
// const parrafo = document.getElementById("nombre-pokemon");


// console.log(divPoke.innerHTML);
const botonPrincipal= document.getElementById("main-button"); 
const botonPrincipalBorrar=document.getElementById("main-button-borrar");
const divPrincipal=document.getElementById("imagenPoke");
let contador=0;

let arregloPrincipal=[];

function crearCarta(){
    let id= Math.floor(Math.random()*100);
const url =`https://pokeapi.co/api/v2/pokemon/${id}`;

const div = document.createElement('div');
div.className="imagenPokeHijo";
divPrincipal.append(div);

const parrafo= document.createElement("p");
parrafo.className="nombre-pokemon";
const titulo = document.createElement("h1");
titulo.innerHTML="Este pokemon";
  


fetch(url).then(datos =>datos.json()).then(pokemon =>{
    const {name}=pokemon;
    const {sprites}=pokemon;
    const {front_default}=sprites;
    
    const imagenPokemon=document.createElement('img');
    imagenPokemon.width=250;
    parrafo.innerHTML=name.toUpperCase();
    imagenPokemon.src=front_default;
    div.append(titulo);
    div.append(parrafo);
    div.append(imagenPokemon);
    
    
    
    
    


});

}
function eliminarCarta(){
    var ultimaCarta= divPrincipal.lastChild;
    divPrincipal.removeChild(ultimaCarta);
    
}

botonPrincipal.addEventListener("click", crearCarta)
botonPrincipalBorrar.addEventListener("click", eliminarCarta)


//CANVAS
document.querySelector('body').style.height="100vh";
document.querySelector('body').style.width="100vw";   

const canvas= document.getElementById("canv");
const ctx =canvas.getContext("2d");


function actualizarDatos(){
  


    const w= canvas.width =document.body.offsetWidth;
    const h = canvas.height= document.documentElement.scrollHeight;

    
    const cols =Math.floor(w/20)+1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle="#000";
    ctx.fillRect(0,0,w,h);

    return [w,h,cols,ypos];
}

function matrix (arreglo){
    
    [w,h, cols,ypos]=arreglo;


    ctx.fillStyle="#0001";
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle="#0f0";
    ctx.font="15pt monospace";
    
    ypos.forEach((y, ind)=>{

        const text= String.fromCharCode(Math.random()*128);
        const x= ind*20;
        ctx.fillText(text, x, y);

        if(y>100+Math.random()*10000){
            ypos[ind]=0;
        }else{
            ypos[ind]=y+20;
        }

    })  
}


  
  // Llamar a la función de ajuste de canvas cuando se carga o se redimensiona la ventana
  ;
  let arreglo=actualizarDatos();;

  window.addEventListener("resize", ()=>{
    arreglo=actualizarDatos();

  });
  window.addEventListener("scroll", ()=>{
    arreglo=actualizarDatos();

  });

 
  setInterval(()=>matrix(arreglo),50);
  
