import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProvLandingpageWithReqComponent } from './components/prov-landingpage-with-req/prov-landingpage-with-req.component';
import { ProviderConfigPageOneComponent } from './components/provider-config-page-one/provider-config-page-one.component';
import { ProviderLandingPageComponent } from './components/provider-landing-page/provider-landing-page.component';
import { ProviderConfigPageFourComponent } from './components/provider-screens/provider-config-page-four/provider-config-page-four.component';
import { ProviderConfigPageThreeComponent } from './components/provider-screens/provider-config-page-three/provider-config-page-three.component';
import { ProviderConfigPageTwoComponent } from './components/provider-screens/provider-config-page-two/provider-config-page-two.component';
import { RegPageOneComponent } from './components/reg-page-one/reg-page-one.component';
import { RegPageThreeComponent } from './components/reg-page-three/reg-page-three.component';
import { RegPageTwoComponent } from './components/reg-page-two/reg-page-two.component';
import { RegistrationDonePageComponent } from './components/registration-done-page/registration-done-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { SelectRoleComponent } from './components/select-role/select-role.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  {path:'profile',component:RegistrationPageComponent},
  // {path: 'profile',component: RegPageOneComponent},
  // {path: 'page-two',component: RegPageTwoComponent},
  // {path: 'page-three',component: RegPageThreeComponent},
  {path:'select-role',component:SelectRoleComponent},
  {path: 'verify-otp',component: VerifyComponent},
  {path: 'reg-done',component: RegistrationDonePageComponent},
  {path: 'prov-page-no-req',component:ProviderLandingPageComponent},
  {path: 'prov-config-page-one',component:ProviderConfigPageOneComponent},
  {path: 'prov-config-page-two',component:ProviderConfigPageTwoComponent},
  {path: 'prov-config-page-three',component:ProviderConfigPageThreeComponent},
  {path: 'prov-config-page-four',component:ProviderConfigPageFourComponent},
  
  {path: 'prov-page-with-req',component:ProvLandingpageWithReqComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
