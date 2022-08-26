import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prov-landingpage-with-req',
  templateUrl: './prov-landingpage-with-req.component.html',
  styleUrls: ['./prov-landingpage-with-req.component.css']
})
export class ProvLandingpageWithReqComponent implements OnInit {
  isSwitchToRequster=false;
  constructor() { }

  ngOnInit(): void {
  }
  switchRole(){
    this.isSwitchToRequster=!this.isSwitchToRequster;
  }
}
