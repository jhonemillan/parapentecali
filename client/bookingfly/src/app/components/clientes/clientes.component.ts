import { InfoMedica } from './../../models/info-medica';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Clientes } from 'src/app/models/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  localClient: Clientes = {} as any;
  localMedicInfo: InfoMedica  = {} as any;

  constructor(private client: ClientService) { }

  ngOnInit() {
  }

  Save(){
    console.log(this.localClient);
    // this.client.SaveClient(this.localClient, this.localMedicInfo).subscribe(data=>{
    //   console.log(data);
    // })
  }



}
