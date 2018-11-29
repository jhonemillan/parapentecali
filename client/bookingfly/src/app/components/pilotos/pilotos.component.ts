import { Piloto } from './../../models/piloto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css']
})
export class PilotosComponent implements OnInit {

  piloto = {} as Piloto;
  pilotos : Piloto[];

  constructor() { }

  ngOnInit() {
  }

  AgregarPiloto(){
    
  }

}
