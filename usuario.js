class usuario{

    constructor (id, nombre, clave, perfil){

this.id=id;
this.nombre=nombre;
this.clave=clave;
this.perfil=perfil;
    }//construtor de la clase

crear(){
     console.log(`usuario creado ${this.nombre}, ${this.perfil}`);
}//fin crear
editar(){
    console.log(`usuario editado ${this.nombre}, ${this.perfil}`);
}//fin editar
}//fin de la clase

const admin = new usuario("01","Brayan","123","administrador");
console.log(admin.crear());
// export default usuario;