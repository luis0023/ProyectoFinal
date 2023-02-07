import { Injectable } from "@angular/core";
import { Busqueda } from "./busqueda.model";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from "../../environments/enviroment.development";

// const apiKey = environment.apiKey;
// let headers = new HttpHeaders();
// headers = headers.set('X-Api-Key', apiKey);

@Injectable({providedIn: 'root'})
export class BusquedaService {
  apiKey:string = environment.apiKey;
  headers = new HttpHeaders();
  header = this.headers.set('X-Api-Key', this.apiKey);

  constructor(private http:HttpClient) {}
  private busqueda: Busqueda[] = [];
  private busquedaResults = new Subject<Busqueda[]>();
  public loading = new BehaviorSubject<boolean>(true);
  //https://api-ninjas.com/api/dogs

// Numero de cilindros:2, 3 4, 5, 6, 8, 10, 12, 16.
getCarCilindros(number: string){
  this.loading.next(true)
  this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/cars?cylinders="+number, {headers: this.header})
    .subscribe((result)=>{
      this.busqueda = result;
      this.busquedaResults.next([...this.busqueda]);
    },
    ()=>{},
    ()=>{
     this.loading.next(false)
    });
}

// TIPO DE COMBUSTIBLE: gas, diesel, electricity. 
getCarFuelTypeGas(){
  this.loading.next(true)
  this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/cars?fuel_type=gas", {headers: this.header})
    .subscribe((result)=>{
      this.busqueda = result;
      this.busquedaResults.next([...this.busqueda]);
    },
    ()=>{},
    ()=>{
     this.loading.next(false)
    });
}

getCarFuelTypeDiesel(){
  this.loading.next(true)
  this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/cars?fuel_type=diesel", {headers: this.header})
    .subscribe((result)=>{
      this.busqueda = result;
      this.busquedaResults.next([...this.busqueda]);
    },
    ()=>{},
    ()=>{
     this.loading.next(false)
    });
}

getCarFuelTypeElectricity(){
  this.loading.next(true)
  this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/cars?fuel_type=electricity", {headers: this.header})
    .subscribe((result)=>{
      this.busqueda = result;
      this.busquedaResults.next([...this.busqueda]);
    },
    ()=>{},
    ()=>{
     this.loading.next(false)
    });
}
// ---------------------
// TIPO DE TRANSMISIÓN------------------
getCarTransmisionAutomatica(){
  this.loading.next(true)
  this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/cars?transmission=a", {headers: this.header})
    .subscribe((result)=>{
      this.busqueda = result;
      this.busquedaResults.next([...this.busqueda]);
    },
    ()=>{},
    ()=>{
     this.loading.next(false)
    });
}
getCarTransmisionManual(){
  this.loading.next(true)
  this.http.get<Busqueda[]>("https://api.api-ninjas.com/v1/cars?transmission=m", {headers: this.header})
    .subscribe((result)=>{
      this.busqueda = result;
      this.busquedaResults.next([...this.busqueda]);
    },
    ()=>{},
    ()=>{
     this.loading.next(false)
    });

}
// -----------------------------------------------


  getBusquedaObservable(){
    return this.busquedaResults.asObservable();
  }

  getLoading(){
    return this.loading;
  }
}
