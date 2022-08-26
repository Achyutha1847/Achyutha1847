import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-config-page-two',
  templateUrl: './provider-config-page-two.component.html',
  styleUrls: ['./provider-config-page-two.component.css']
})
export class ProviderConfigPageTwoComponent implements OnInit {
  isShowCountries=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  displayCountries(){
    this.isShowCountries=!this.isShowCountries;
  }
  // gotoProviderConfigSecond(){
  //   this.router.navigate(['prov-config-page-two']);
  // }
  gotoProviderConfig(){
  this.router.navigate(['prov-config-page-three']);

  }
}
