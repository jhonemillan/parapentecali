import { Observable } from 'rxjs';
import { AuthenticationService } from './services/Authentication.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingfly';
  isLoggedIn$: Observable<boolean>; 
  isNotLogged$: Observable<boolean>
  constructor(private auth: AuthenticationService){
    
  }

  ngOnInit(){
    this.isNotLogged$ = this.auth.isLoggedOut;
    this.isLoggedIn$ = this.auth.isLoggedIn;
    
  }

  logout(){
    this.auth.logout().subscribe(
      data=>{
        
      },error=>{
        console.log(error);
      }
    )
  }
}
