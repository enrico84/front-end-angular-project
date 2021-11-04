import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  // Injection del Servizio "ThemeService" nel Component
  constructor(public themeService: ThemeService) { 
    console.log("SettingsComponent - themeService value: ", themeService.value)
  }

  // public setTheme(theme): void {
  //   this.themeService.setTheme(theme);
  // }

}
