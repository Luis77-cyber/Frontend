export class Education{
    id:number;
    tituloedu:String;
    fechaedu:String;
    institucionedu:String;
    imagenedu:String;

    constructor(id:number,tituloedu:String,fechaedu:String,institucionedu:String,imagenedu:String){
        this.id = id;
        this.tituloedu = tituloedu;
        this.fechaedu = fechaedu;
        this.institucionedu = institucionedu;
        this.imagenedu = imagenedu;
    }
}