import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home-component/home.component';
import { BbkSearchResultsComponent } from './bbk-search-results-component/bbk-search-results.component';
import { BbkDetailsComponent } from './bbk-details-component/bbk-details.component';

@Injectable({ providedIn: 'root' })
export class NameGuard implements CanActivate {
  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Guard checked');
    return true;
  }
}

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'bbk/:productId',
    component: BbkDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bbk',
    component: BbkSearchResultsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
