import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './adresse/adresse.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', title: 'Page de connexion', component: LoginComponent },
  {
    path: 'adresse',
    title: "Recherche d'adresse",
    component: AdresseComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
