import { Clientes } from './../../models/clientes';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  cliente = {} as Clientes;
  clientes : Clientes[]

  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.GetClients();
  }

  GetClients(){
    this.admin.GetClients().subscribe(list=>{
      this.clientes = list;
    });
  }

}
