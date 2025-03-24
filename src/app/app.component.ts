import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BannerComponent } from "./Components/banner/banner.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgbModule,
    NavbarComponent,
    FooterComponent,
    BannerComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cemevet';
}
