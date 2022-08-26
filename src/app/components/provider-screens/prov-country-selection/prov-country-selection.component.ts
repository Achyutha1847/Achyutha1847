import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prov-country-selection',
  templateUrl: './prov-country-selection.component.html',
  styleUrls: ['./prov-country-selection.component.css']
})
export class ProvCountrySelectionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoThirdProvScreen(){
    this.router.navigate(['prov-config-page-three'])
  }

}
