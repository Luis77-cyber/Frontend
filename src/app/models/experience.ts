export class Experience{
    id:number;
    titulopuesto:String;
    descripcionpuesto:String;
    periodo:String;
    imagenemp:String;
    empleador:String;

    constructor(id:number,titulopuesto:String,descripcionpuesto:String,periodo:String,imagenemp:String,empleador:String){
        this.id = id;
        this.empleador = empleador;
        this.titulopuesto = titulopuesto;
        this.descripcionpuesto = descripcionpuesto;
        this.periodo = periodo;
        this.imagenemp = imagenemp;
    }
}