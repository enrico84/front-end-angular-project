import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Injection del themeService dalla quale si legge la variabile "value" settata dal SettingsComponent
  constructor(public themeService: ThemeService) {
    console.log("NavbarComponent - themeService value: ", themeService.value)
  }

  ngOnInit(): void {
  }

}
