import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nav = [
    {
      title: 'Home',
      route: '',
      icon: 'home',
      text: 'Plz take me home'
    },
    {
      title: 'Help',
      route: 'help',
      icon: 'help_outline',
      text: 'Plz send halp'
    }
  ];
  title = 'app works!';
}
