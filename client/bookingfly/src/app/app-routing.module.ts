import { PublicGuard } from './guards/public.guard';
import { AuthGuard } from './guards/auth.guard';
import { PilotosComponent } from './components/pilotos/pilotos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'vuelos', component: VuelosComponent, canActivate: [AuthGuard]},
  {path: 'pilotos', component: PilotosComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
