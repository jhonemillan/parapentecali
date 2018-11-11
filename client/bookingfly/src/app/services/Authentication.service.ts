import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);

constructor(private http: HttpClient, 
  private router: Router) { }

get isLoggedIn() {
  return this.loggedIn.asObservable(); // {2}
}

login(username: string, password: string): Observable<any> {
  return this.http.post<any>(environment.url + '/Users/login', { username: username, password: password })
    .pipe(
      map(user => {        
        if (user && user.id) {          
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.loggedIn.next(true);
        }

        return user;
      })
    );
}

logout(): Observable<any> {
  return this.http.post<any>(environment.url + '/Users/logout',{})
    .pipe(
      map(user => {        
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);        
      })
    );
}

}
