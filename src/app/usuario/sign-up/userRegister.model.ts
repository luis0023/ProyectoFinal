export class newUser{
    nombre:string;
    apellido:string;
    correo:string;
    pass:string;
    genero:string;
    fechaNac:string;

    constructor(nombre:string, apellido:string, correo:string, pass:string, genero:string, fechaNac: string){

       this.nombre=nombre;
       this.apellido=apellido;
       this.correo=correo;
       this.pass=pass;
       this.genero=genero;
       this.fechaNac=fechaNac;

    }


} 