import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Categoria {
  nombre: string;
  icono: string; // Clases de FontAwesome
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  categorias: Categoria[] = [
    { nombre: 'Accesorios', icono: 'fa-solid fa-paw' },
    { nombre: 'Alimentos', icono: 'fa-solid fa-bowl-food' },
    { nombre: 'Medicamentos', icono: 'fa-solid fa-capsules' },
    { nombre: 'Juguetes', icono: 'fa-solid fa-bone' },
    { nombre: 'Perfumeria', icono: 'fa-solid fa-spray-can' },
  ];

  whatsappLink(categoria: string): string {
    return `https://wa.me/50496455137?text=Hola%2C%20quiero%20más%20información%20sobre%20productos%20de%20${encodeURIComponent(categoria)}`;
  }
}
