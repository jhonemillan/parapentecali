import { InfoMedica } from './../../models/info-medica';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Clientes } from 'src/app/models/clientes';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  localClient: Clientes = {} as any;
  localMedicInfo: InfoMedica  = {
    embarazo: false,
      cardiaco: false,
      taquicardia: false,
      hipertiroidismo: false,
      extrasistole: false,
      fatiga: false,
      convulsiones: false,
      vertigo: false,
      cadera: false,
      psiquiatria: false,
      diabetes: false,
      cirugia: false,      
      fractura: false,      
  } as any;
  
  edad;

  constructor(private client: ClientService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  

  CalculatedAge(event: MatDatepickerInputEvent<Date>){
    this.edad = moment().diff(Date.parse(this.localClient.fechanacimiento),'years');   
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  clearEntity(){
    this.localClient = {} as Clientes;
    this.localMedicInfo = {} as InfoMedica;
  }

  Save(){
    console.log(this.localClient);
    console.log(this.localMedicInfo);
    this.client.SaveClient(this.localClient, this.localMedicInfo).subscribe(data=>{
      console.log(data);
      this.openSnackBar("Se ha registrado correctamente", "Entendido!!")
      this.clearEntity();
    });
  }



}
