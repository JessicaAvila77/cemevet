import { Component, Input, input } from '@angular/core';
import { ITarjetaServicios } from '../../types/ITarjetaServicios';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-tarjeta-servicio',
  imports: [NgIf, CommonModule, RouterModule],
  templateUrl: './tarjeta-servicio.component.html',
  styleUrl: './tarjeta-servicio.component.scss'
})
export class TarjetaServicioComponent implements ITarjetaServicios{
  @Input() icono: string = '';
  @Input() texto: string = '';
  @Input() ruta?: string;

  ngOnInit() {
    console.log('Icono recibido:', this.icono); 
  }


}
