import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = 'lightTheme';
  constructor() {
    console.log("%cHave a nice %cDay :)", "color: #3f51b5; font-size:30px;", "color: green; font-size:30px;");
  }
  changeThemeColors() {
    this.theme = this.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
  }
}
