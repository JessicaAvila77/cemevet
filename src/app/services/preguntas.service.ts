import { Injectable } from '@angular/core';
import { preguntas_agrupadas } from '../data/preguntas-frecuentes';
import { IPregunta,  } from '../types/IPreguntas';

@Injectable({
  providedIn: 'root'
})

//obtiene los datos y la logica para obtener las preguntas
//importa preguntas_data y retorna un arreglo de tipo Ipregunta
//este servicio es una logica externa al componente
export class PreguntasService {

  getPreguntas():IPregunta[] {
    return preguntas_agrupadas;
  }


}
