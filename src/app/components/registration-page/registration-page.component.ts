import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  isShowCountries=false;
  isShowStates=false;
  headerName:any;
  step='Personal Details';
  page_number=1;
  step1:any;
  step2:any;
  step3:any;
  step1_completed: boolean = false;
  step2_completed: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  displayCountries(){
    this.isShowCountries=!this.isShowCountries;
  }
  displayStates(){
    this.isShowStates=!this.isShowStates;
  }
  gotoFirstScreen(){
    this.step="Personal Details";
    this.page_number=1;
    this.step1_completed = false;
    this.step2_completed=false;
  }
  gotoSecondScreen(){
    this.step="Company Details";
    this.page_number=2;
    this.step1_completed = true;
    this.step2_completed=false;
    // this.router.navigate(['page-two']);
  }
  gotoThirdScreen(){
    this.step="Service Providing Details";
    this.page_number=3;
    this.step2_completed=true;
    
  }
  Create(){
    this.router.navigate(['verify-otp']);
  }
}
