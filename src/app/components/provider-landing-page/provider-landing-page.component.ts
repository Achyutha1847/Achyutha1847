import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-landing-page',
  templateUrl: './provider-landing-page.component.html',
  styleUrls: ['./provider-landing-page.component.css']
})
export class ProviderLandingPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoProvConfigurationPage(){
    this.router.navigate(['prov-config-page-one'])
  }
}
