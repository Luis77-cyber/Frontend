export class Usuario{
    id:number;
    nombre:String;
    apellido:String;
    titulo:String;
    descripcion:String;
    fotoperfil:String;

    constructor(id:number,nombre:String,apellido:String,titulo:String,descripcion:String,fotoperfil:String){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fotoperfil = fotoperfil;
    }
}