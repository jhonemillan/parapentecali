import { AdminService } from './../../services/admin.service';
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

  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.GetPilots();
  }

  AddPilot(){
    this.admin.SavePilot(this.piloto).subscribe(p=>{
      this.GetPilots();
      this.clear();
    });
  }


  DeletePilot(id){
    this.admin.DeletePilot(id).subscribe(d=>{
      this.GetPilots();
    });
  }

  GetPilots(){
    this.admin.GetPilots().subscribe(list=>{
      console.log(list);
      this.pilotos = list;
    });
  }

  clear(){
    this.piloto = {
      cedula: "",
      nombres: "",
      apellidos: "",
      telefono: ""
    }
  }

  




}
