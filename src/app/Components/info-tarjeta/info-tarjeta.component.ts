import { Component, Input } from '@angular/core';
import { IInfoTarjeta } from '../../types/IInfoTarjeta';

@Component({
  selector: 'app-info-tarjeta',
  imports: [],
  templateUrl: './info-tarjeta.component.html',
  styleUrl: './info-tarjeta.component.scss'
})
export class InfoTarjetaComponent {

  @Input() tarjeta!: IInfoTarjeta;

}
