import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-page-three',
  templateUrl: './reg-page-three.component.html',
  styleUrls: ['./reg-page-three.component.css']
})
export class RegPageThreeComponent implements OnInit {
  // @ViewChild('editPrbDesc', { static: true })
  // editPrbDesc!: ElementRef;
  selectElement: any=document.querySelector('select');
  option:any=document.querySelectorAll('option[selected]');
  array=[]
  arrayCount=0;
  isShowCountries=false;
  isShowStates=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.option);
  }
  signInData(signUpForm:NgForm){
    console.log(signUpForm.value.email);
  }
  // displayModal(){
  //   this.editPrbDesc.nativeElement.click();
  // }
  displayCountries(){
    this.isShowCountries=!this.isShowCountries;
  }
  displayStates(){
    this.isShowStates=!this.isShowStates;
  }
  gotoSecondScreen(){
    this.router.navigate(['page-two']);
  }
  Create(){
    this.router.navigate(['verify-otp']);
  }
}
