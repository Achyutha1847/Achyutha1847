import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-config-page-four',
  templateUrl: './provider-config-page-four.component.html',
  styleUrls: ['./provider-config-page-four.component.css']
})
export class ProviderConfigPageFourComponent implements OnInit {
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
  gotoProviderDashBoard(){
    this.router.navigate(['prov-page-with-req']);
  }

}
