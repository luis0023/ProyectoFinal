import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Busqueda } from './busqueda.model';
import { BusquedaService } from './busqueda.service';

interface searchRes {
  cars: Busqueda[];
  criteria: string;
}

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnDestroy {
  criteria: string = '';
  loading: boolean = false;
  criteriaSelected: searchRes = { cars: [], criteria: '' };
  private subResponse: Subscription;
  private loadingResponse: Subscription = Subscription.EMPTY;
  constructor(public busquedaService: BusquedaService) {
    this.subResponse = Subscription.EMPTY;
  }

  onCriteriaSelectedFromChild(criteria: number) {
    switch (criteria) {
      case (1):
        this.criteria = "Transmisión automatica";
        this.busquedaService.getCarTransmisionAutomatica();
        break;
      case (2):
        this.criteria = "Transmisión manual";
        this.busquedaService.getCarTransmisionManual();
        break;
      case (3):
        this.criteria = "Tipo de combustible: gas";
        this.busquedaService.getCarFuelTypeGas();
        break;
      case (4):
        this.criteria = "Tipo de combustible: diesel";
        this.busquedaService.getCarFuelTypeDiesel();
        break;
      case (5):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarFuelTypeElectricity();
        break;
      // Numero de cilindros:2, 3 4, 5, 6, 8, 10, 12, 16. -->

      case (6):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('2');
        break;
      case (7):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('3');
        break;
      case (8):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('4');
        break;
      case (9):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('5');
        break;
      case (10):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('6');
        break;
      case (11):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('8');
        break;
      case (12):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('10');
        break;
      case (13):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('12');
        break;
      case (14):
        this.criteria = "Tipo de combustible: electricidad";
        this.busquedaService.getCarCilindros('16');
        break;


    }


    this.loadingResponse = this.busquedaService.getLoading().subscribe(r => {
      // console.log(r)
      this.loading = r;
    })
    this.subResponse = this.busquedaService.getBusquedaObservable().subscribe((r: Busqueda[]) => {
      this.criteriaSelected = { cars: r, criteria: this.criteria };
    })
  }

  ngOnDestroy(): void {
    console.log('Dejando Componente')
    this.subResponse.unsubscribe();
    this.loadingResponse.unsubscribe();
  }
}
