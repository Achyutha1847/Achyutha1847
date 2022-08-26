import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-config-page-three',
  templateUrl: './provider-config-page-three.component.html',
  styleUrls: ['./provider-config-page-three.component.css']
})
export class ProviderConfigPageThreeComponent implements OnInit {
  isShowCountries=false;
  isShowStates=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  displayCountries(){
    this.isShowCountries=!this.isShowCountries;
  }
  displayStates(){
    this.isShowStates=!this.isShowStates;
  }
  gotoProviderConfigSecond(){
    this.router.navigate(['prov-config-page-four']);
  }
}

