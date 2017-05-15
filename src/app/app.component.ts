import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/vendas" routerLinkActive="active">Vendas</a>
      <a routerLink="/rh" routerLinkActive="active">Recursos Humanos</a>
      <a routerLink="/tecnologia" routerLinkActive="active">Tecnologia</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
}
