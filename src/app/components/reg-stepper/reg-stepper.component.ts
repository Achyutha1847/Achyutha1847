import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-reg-stepper',
  templateUrl: './reg-stepper.component.html',
  styleUrls: ['./reg-stepper.component.css']
})
export class RegStepperComponent implements OnInit {
  private stepper!: Stepper;
  constructor() { }
  name:any;
  next() {
    this.stepper.next();
    // let a=document.getElementById('stepper1');
  }
  previous(){
    this.stepper.previous();
  }
  onSubmit() {
    return false;
  }

  ngOnInit(): void {
    this.name=document.getElementById('stepper1');
    this.stepper = new Stepper(this.name,{
      linear: false,
      animation: true
    })
  }


}
