import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PreguntasFrecuentesComponent } from './pages/faq/preguntas-frecuentes/preguntas-frecuentes.component';
import { Home1Component } from './pages/home1/home1.component';

export const routes: Routes = [

  { path: '', component: Home1Component }, 
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'faq', component: PreguntasFrecuentesComponent },
  // si la URL no existe
  { path: '**', redirectTo: '' } 


];
