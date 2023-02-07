import { Injectable } from "@angular/core";
import { newUser } from "./sign-up/userRegister.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class newUsersService {
  private nuevosUsuarios: newUser[] = [];
  private nuevosUsuariosUpdated = new Subject<newUser[]>();
  getPost() {
    return [...this.nuevosUsuarios];
  }

  getPostUpdatedListener(){
    return this.nuevosUsuariosUpdated.asObservable();
  }
//   let nuevoUsuario= new newUser(form.value.nombre, form.value.apellidos, 

  addUser(nuevoUsuario: newUser) {
    const miUsuario: newUser =nuevoUsuario;
    
    this.nuevosUsuarios.push(miUsuario);
    // console.log(this.nuevosUsuarios[0].nombre);
    this.nuevosUsuariosUpdated.next([...this.nuevosUsuarios]);
  }

}