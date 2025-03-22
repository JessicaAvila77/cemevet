import { Component } from '@angular/core';
import { TarjetaComponent } from "../../Components/tarjeta/tarjeta.component";
import { TarjetaServicioComponent } from '../../Components/tarjeta-servicio/tarjeta-servicio.component';
import { ListadoTarjetaComponent } from '../../Components/listado-tarjeta/listado-tarjeta.component';

import { ITarjetaServicios } from '../../types/ITarjetaServicios';
import { datos } from '../../data/tarjeta-servicios';


@Component({
  selector: 'app-servicios',
  imports: [ListadoTarjetaComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {

  datosTarjetaServicios: ITarjetaServicios[] = datos 

}
