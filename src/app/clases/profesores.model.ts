export class ProfesoresBean{
  
    id:number;
    nombre:String;
    salario:number;
    fecha:Date;

    constructor(
    id:number,
    nombre:String,
    salario:number,
    fecha:Date,
    ){

        this.id= id;
        this.nombre=nombre;
        this.salario=salario;
        this.fecha=fecha;

    }
}