import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VentasFront';

  menuDeshabilitado = true;

  habilitarDeshabilitarMenu():void{
    this.menuDeshabilitado = !this.menuDeshabilitado;
  }

  cerrarMenu():void{
    this.menuDeshabilitado = true;
  }
}
