import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-page-two',
  templateUrl: './reg-page-two.component.html',
  styleUrls: ['./reg-page-two.component.css']
})
export class RegPageTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  signInData(signUpForm:NgForm){
    console.log(signUpForm.value.email);
  }
  gotoSecondScreen(){
    
  }
  gotoFirstScreen(){
    this.router.navigate(['profile']);
  }
  gotoThirdScreen(){
    this.router.navigate(['page-three']);
  }
}
