import { Injectable } from '@angular/core';
import { IInfoTarjeta } from '../types/IInfoTarjeta';
import { info_tarjetas } from '../data/info-tarjetas';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getTarjeta(): IInfoTarjeta[]{
    return info_tarjetas;
  }
}
