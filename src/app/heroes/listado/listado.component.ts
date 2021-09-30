import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  basketballPlayers: string[] = ['Kobe', 'Lebron', 'Luka', 'James', 'Kevin Durant','Magic Jhonson'];
  playerBorrado: string = '';


  borrarPlayer() {
    this.playerBorrado = this.basketballPlayers.shift() || '';
    
  }


}
