import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LoginComponent } from './usuario/login/login.component';
import { SignUpComponent } from './usuario/sign-up/sign-up.component';
import { BusquedaCriteriaComponent } from './busqueda/busqueda-criteria/busqueda-criteria.component';
import { BusquedaResultComponent } from './busqueda/busqueda-result/busqueda-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusquedaService } from './busqueda/busqueda.service';



// Imports de Material Angular
import {MatToolbarModule} from '@angular/material/toolbar'; //Header
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';




import { HttpClientModule } from '@angular/common/http';
import { NewUsersListComponent } from './usuario/sign-up/new-users-list/new-users-list.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    LoginComponent,
    SignUpComponent,
    BusquedaCriteriaComponent,
    BusquedaResultComponent,

    NewUsersListComponent,
    ContactoComponent
  ],
  imports: [
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule
    



  


  ],
  providers: [BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
