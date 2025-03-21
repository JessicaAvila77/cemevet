import { Component, Input, input } from '@angular/core';
import { ITarjetaServicios } from '../../types/ITarjetaServicios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta-servicio',
  imports: [],
  templateUrl: './tarjeta-servicio.component.html',
  styleUrl: './tarjeta-servicio.component.scss'
})
export class TarjetaServicioComponent implements ITarjetaServicios{
  @Input() icono: string = '';
  @Input() texto: string = '';

  ngOnInit() {
    console.log('Icono recibido:', this.icono); 
  }


}
