import { InfoMedica } from './../../models/info-medica';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Clientes } from 'src/app/models/clientes';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  localClient: Clientes = {} as any;
  localMedicInfo: InfoMedica  = {} as any;
  edad;

  constructor(private client: ClientService) { }

  ngOnInit() {
  }

  CalculatedAge(event: MatDatepickerInputEvent<Date>){
    this.edad = moment().diff(Date.parse(this.localClient.fechanacimiento),'years');
    console.log(this.edad);
  }



  Save(){
    console.log(this.localClient);
    console.log(this.localMedicInfo);
    // this.client.SaveClient(this.localClient, this.localMedicInfo).subscribe(data=>{
    //   console.log(data);
    // })
  }



}
