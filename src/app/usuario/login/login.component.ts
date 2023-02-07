import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms"




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private router: Router){}


  submit(form: NgForm){
    if(form.value.user!='' && form.value.pass!=''){
      this.router.navigate(['./home']);
      return  

    }else{
      alert("Ingrese sus crendenciales")
    }
  }



}
