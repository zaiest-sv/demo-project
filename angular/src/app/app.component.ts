import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  items = [
    {
      label: 'Users List',
      icon: 'pi pi-home',
      routerLink: '/user/list'
    },
    {
      label: 'Users Details',
      icon: 'pi pi-home',
      routerLink: '/user/details/1'
    },
    {
      label: 'TASK - №2',
      icon: 'pi pi-home',
      routerLink: '/numericArray'
    },
  ];
}
