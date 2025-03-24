import { Component, Input } from '@angular/core';
import { TarjetaServicioComponent } from '../tarjeta-servicio/tarjeta-servicio.component';
import { IListadoTarjeta } from '../../types/IListadoTarjetas';
import { ITarjetaServicios } from '../../types/ITarjetaServicios';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-listado-tarjeta',
  imports: [TarjetaServicioComponent, NgFor, NgIf],
  templateUrl: './listado-tarjeta.component.html',
  styleUrl: './listado-tarjeta.component.scss'
})
export class ListadoTarjetaComponent implements IListadoTarjeta{
  @Input() tarjetas: ITarjetaServicios[] = [];

  constructor(){

  }

}
