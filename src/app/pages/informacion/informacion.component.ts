import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IInfoTarjeta } from '../../types/IInfoTarjeta';
import { InfoService } from '../../services/info.service';
import { InfoTarjetaComponent } from "../../Components/info-tarjeta/info-tarjeta.component";

@Component({
  selector: 'app-informacion',
  imports: [NgFor, InfoTarjetaComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit{

  tarjetas: IInfoTarjeta[] = [];

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.tarjetas = this.infoService.getTarjeta();
  }

  

}
