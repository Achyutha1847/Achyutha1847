import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-done-page',
  templateUrl: './registration-done-page.component.html',
  styleUrls: ['./registration-done-page.component.css']
})
export class RegistrationDonePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoProviderConfig(){
    this.router.navigate(['prov-page-no-req'])
   
  }
}
