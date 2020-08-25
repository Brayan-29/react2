let i=0;
function saludo(){
    i++;
    console.log('Hola mundo : '+i);
    saludo();

}
saludo();