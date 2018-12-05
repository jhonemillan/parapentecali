import { PublicGuard } from './guards/public.guard';
import { AdminService } from './services/admin.service';
import { ClientService } from './services/client.service';
import { JwtInterceptor } from './services/Interceptor';
import { AuthenticationService } from './services/Authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { PilotosComponent } from './components/pilotos/pilotos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import * as moment from 'moment';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    LoginComponent,
    VuelosComponent,
    PilotosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, 
              PublicGuard,
              AuthenticationService,
              AdminService,
              ClientService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: JwtInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
