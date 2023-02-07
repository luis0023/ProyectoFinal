import { Component } from '@angular/core';
import { newUser } from './userRegister.model';
import {NgForm} from '@angular/forms';
import {newUsersService} from '../newUsers.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
correoUser: string="";
// usuariosNuevo: newUser[];

constructor( public nuevoUsuario: newUsersService){}

registrar(form: NgForm){
  if(form.value.nombre!='' && form.value.apellidos!='' && form.value.correo &&
  form.value.pass!='' && form.value.genero!=null && form.value.fechaNac!=null ){
    const nuevoUsuario= new newUser(form.value.nombre, form.value.apellidos, 
    form.value.correo, form.value.pass,form.value.genero, form.value.fechaNac);
    this.nuevoUsuario.addUser(nuevoUsuario);
   form.reset();

  }else{
    alert("Llene todos los campos")
  }

  

}


}
