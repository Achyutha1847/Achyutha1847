import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css']
})
export class CountrySelectionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoOtp(){
    
  }
}
