import { Component, OnInit } from '@angular/core';
import { IPregunta } from '../../../types/IPreguntas';
import { PreguntasService } from '../../../services/preguntas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preguntas-frecuentes',
  imports: [CommonModule],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrl: './preguntas-frecuentes.component.scss'
})

//cargara las preguntas desde el servicio cuando se incie el componente
export class PreguntasFrecuentesComponent implements OnInit {

  preguntasCategorias: IPregunta[] = [];

  openPreguntaId: string | null = null;

  //inyecta el servicio en el componente, solo se usa internamente (private)
  constructor(private preguntasService : PreguntasService) {}

  //llama al servicio para obtener las preguntas y las guarda en preguntasCategorias
  ngOnInit(): void {
    this.preguntasCategorias = this.preguntasService.getPreguntas();
  }

  togglePregunta(id: string): void {
    this.openPreguntaId = this.openPreguntaId === id ? null : id;
  }

}
