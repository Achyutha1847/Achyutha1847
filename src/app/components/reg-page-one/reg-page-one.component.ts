import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-page-one',
  templateUrl: './reg-page-one.component.html',
  styleUrls: ['./reg-page-one.component.css']
})
export class RegPageOneComponent implements OnInit {
  section_one=true;
  section_two=false;
  section_three=false;

  selectElement: any=document.querySelector('select');
  option:any=document.querySelectorAll('option[selected]');
  array=[]
  arrayCount=0;
  isShowCountries=false;
  isShowStates=false;

  constructor(private router: Router
  ) { }

  ngOnInit(): void {
  }
  signInData(signUpForm:NgForm){
    console.log(signUpForm.value.email);
  }
  gotoSecondScreen(){
    // this.section_two=true;
    // this.section_one=false;
    // this.section_three=false;
   this.router.navigate(['page-two']);
  }
  gotoThirdScreen(){
    // this.section_three=true;
    // this.section_one=false;
    // this.section_two=false;
  }
  fromThirdToSecond(){
    this.section_two=true;
    this.section_one=false;
    this.section_three=false;
   
  }
  fromSecondToOne(){
    this.section_one=true;
    this.section_two=false;
    this.section_three=false;
    
  }



  displayCountries(){
    this.isShowCountries=!this.isShowCountries;
  }
  displayStates(){
    this.isShowStates=!this.isShowStates;
  }
}
