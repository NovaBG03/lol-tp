import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {RegisterTeamComponent} from './register-team/register-team.component';
import {EmptyComponent} from './shared/empty/empty.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterTeamComponent},
  {
    path: 'twitch',
    component: EmptyComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: 'https://www.twitch.tv/'
    }
  },
  {
    path: 'instagram',
    component: EmptyComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: 'https://www.instagram.com/_loltp_/'
    }
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
