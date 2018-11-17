import { Clientes } from './../models/clientes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { InfoMedica } from '../models/info-medica';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, 
    private router: Router) { }

  SaveClient(cliente: Clientes, infomedica: InfoMedica): Observable<any>{
    return this.http.post<any>(environment.url + '/clientes', cliente)
    .pipe(
      retry(2),
      map(cliente => {
        this.http.post<any>(environment.url + '/clientes/' + 
                            cliente.id+'/enfermedades/', infomedica)
                            .pipe(
                              map(
                                data=>{
                                  return {cliente, data}
                                }
                              )
                            )
        
      })
    );
  }

  UpdateClient(cliente: Clientes, infomedica: InfoMedica) : Observable<any>{
    return this.http.put<any>(environment.url + '/clientes', cliente)
    .pipe(
      retry(2),
      map(cliente => {
        this.http.put<any>(environment.url + '/clientes/' + 
                            cliente.id+'/enfermedades/', infomedica)
                            .pipe(
                              map(
                                data=>{
                                  return {cliente, data}
                                }
                              )
                            )
        
      })
    );
  }  
}

