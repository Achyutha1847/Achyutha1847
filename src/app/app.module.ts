import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectRoleComponent } from './components/select-role/select-role.component';
import { RegPageOneComponent } from './components/reg-page-one/reg-page-one.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegPageTwoComponent } from './components/reg-page-two/reg-page-two.component';
import { RegPageThreeComponent } from './components/reg-page-three/reg-page-three.component';
import { VerificationComponent } from './components/verification/verification.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { VerifyComponent } from './components/verify/verify.component';
import { RegistrationDonePageComponent } from './components/registration-done-page/registration-done-page.component';
import { RegStepperComponent } from './components/reg-stepper/reg-stepper.component';
import { FirstRegPageComponent } from './components/first-reg-page/first-reg-page.component';
import { CountrySelectionComponent } from './components/country-selection/country-selection.component';
import { StateSelectionComponent } from './components/state-selection/state-selection.component';
import { ProviderLandingPageComponent } from './components/provider-landing-page/provider-landing-page.component';
import { ProviderConfigPageOneComponent } from './components/provider-config-page-one/provider-config-page-one.component';
import { ProvLandingpageWithReqComponent } from './components/prov-landingpage-with-req/prov-landingpage-with-req.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { SwitchRolesProScreenComponent } from './components/provider-screens/switch-roles-pro-screen/switch-roles-pro-screen.component';
import { ProviderConfigPageTwoComponent } from './components/provider-screens/provider-config-page-two/provider-config-page-two.component';
import { ProvCountrySelectionComponent } from './components/provider-screens/prov-country-selection/prov-country-selection.component';
import { ProviderConfigPageThreeComponent } from './components/provider-screens/provider-config-page-three/provider-config-page-three.component';
import { ProviderConfigPageFourComponent } from './components/provider-screens/provider-config-page-four/provider-config-page-four.component';
import { ProvStateSelectionComponent } from './components/provider-screens/prov-state-selection/prov-state-selection.component';
import { MultiselectDropdownComponent } from './components/provider-screens/multiselect-dropdown/multiselect-dropdown.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectRoleComponent,
    RegPageOneComponent,
    RegPageTwoComponent,
    RegPageThreeComponent,
    VerificationComponent,
    VerifyComponent,
    RegistrationDonePageComponent,
    RegStepperComponent,
    FirstRegPageComponent,
    CountrySelectionComponent,
    StateSelectionComponent,
    ProviderLandingPageComponent,
    ProviderConfigPageOneComponent,
    ProvLandingpageWithReqComponent,
    SwitchRolesProScreenComponent,
    ProviderConfigPageTwoComponent,
    ProvCountrySelectionComponent,
    ProviderConfigPageThreeComponent,
    ProviderConfigPageFourComponent,
    ProvStateSelectionComponent,
    MultiselectDropdownComponent,
    RegistrationPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgOtpInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
