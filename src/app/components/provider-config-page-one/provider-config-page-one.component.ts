import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-config-page-one',
  templateUrl: './provider-config-page-one.component.html',
  styleUrls: ['./provider-config-page-one.component.css']
})
export class ProviderConfigPageOneComponent implements OnInit {
  isShowCountries=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  displayCountries(){
    this.isShowCountries=!this.isShowCountries;
  }
  gotoProviderConfigSecond(){
    this.router.navigate(['prov-config-page-two']);
  }
  

}
