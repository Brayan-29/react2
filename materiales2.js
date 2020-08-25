// {
//     let a = 5;
//     console.log(a);

// }//contexto

let materiales = ['oxigeno', 'helio', 'litio', 'berilio', 'carbono', 'hierro', 'aluminio'];

for (let i=0;i<materiales.length;i++){
console.log("pos ("+i+"): " + materiales[i]);

}//cierra for

console.log(materiales.map(material=>material.length));
console.log(materiales.map(material=>material));
