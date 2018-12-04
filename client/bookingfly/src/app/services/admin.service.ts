import { Piloto } from './../models/piloto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map, retry, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(private http: HttpClient, 
  private router: Router) { }

  SavePilot(pilot: Piloto): Observable<any>{
    return this.http.post<any>(environment.url + '/pilotos', pilot);    
  }

  DeletePilot(id): Observable<any>{
    return this.http.delete(environment.url+'/pilotos/'+id);    
  }

  GetPilots(): Observable<Piloto[]> {
    return this.http.get<Piloto[]>(environment.url+'/pilotos')
  }

}


