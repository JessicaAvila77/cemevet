import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  imports: [NgFor],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent {

  informacion = [
    { titulo: 'Entender las dietas de alto rendimiento', descripcion: 'Lorem ipsum dolor sit amet...' },
    { titulo: 'Los beneficios de la comida húmeda', descripcion: 'Lorem ipsum dolor sit amet...' },
    { titulo: 'Detrás de los olores de los perros', descripcion: 'Lorem ipsum dolor sit amet...' },
    { titulo: 'Alimentación de perros con sobrepeso', descripcion: 'Lorem ipsum dolor sit amet...' },
    { titulo: 'Cómo mantener fresco a tu perro', descripcion: 'Lorem ipsum dolor sit amet...' },
    { titulo: 'Crear hábitos alimenticios saludables', descripcion: 'Lorem ipsum dolor sit amet...' },
  ];

}
