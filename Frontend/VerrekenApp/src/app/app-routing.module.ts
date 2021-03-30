import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageSignUpComponent } from './page-sign-up/page-sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PalGroupComponent } from './pal-group/pal-group.component'

const routes: Routes = [
      {path: 'Home', component: PageHomeComponent},
      {path: 'Login', component: PageLoginComponent},
      {path: 'Sign-up', component: PageSignUpComponent},
      {path: 'Pal-Groups', component: PalGroupComponent},
      {path: '', redirectTo: '/Home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
