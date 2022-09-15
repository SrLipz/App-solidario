import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  doarAlimentos(){
    this.abrirUrl( 'https://www.google.com/maps/search/?api=1&query=doacao+alimentos');
  }
  doarRoupas(){
    this.abrirUrl('https://www.google.com/maps/search/?api=1&query=doacao+roupas');
  }
  doarSangue(){
    this.abrirUrl ('https://www.google.com/maps/search/?api=1&query=doacao+sangue');
  }
  abrirUrl(url: string){
    window.open(url, '_blank').focus();
  }
}
