import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
