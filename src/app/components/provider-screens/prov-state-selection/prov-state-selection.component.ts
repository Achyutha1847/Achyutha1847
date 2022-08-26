import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prov-state-selection',
  templateUrl: './prov-state-selection.component.html',
  styleUrls: ['./prov-state-selection.component.css']
})
export class ProvStateSelectionComponent implements OnInit {
  states=[
    {
      state: 'Alabama',
      id:'Alabama'
    },
    {
      state: 'Alaska',
      id:'Alaska'
    },
    {
      state:' Arizona',
      id:'Arizona'
    },
    {state:'Arkansas',
  id:'Arkansas'},
    {state:'California',
  id:'California'},
    {state:'Colorado',
    id:'Colorado'
  },
  {
    state: 'Alabama',
    id:'Alabama'
  },
  {
    state: 'Alaska',
    id:'Alaska'
  },
  {
    state:' Arizona',
    id:'Arizona'
  },
  {state:'Arkansas',
id:'Arkansas'},
  {state:'California',
id:'California'},
  {state:'Colorado',
  id:'Colorado'
},
   
    
    // Connecticut,
    // Delaware,
    // Florida,
    // Georgia,
    // Hawaii,
    // Idaho,
    // Illinois,
    // Indiana,
    // Iowa,
    // Kansas,
    // Kentucky,
    // Louisiana,
    // Maine,
    // Maryland,
    // Massachusetts,
    // Michigan,
    // Minnesota,
    // Mississippi,
    // Missouri,
    // Montana,
    // Nebraska,
    // Nevada,
    // New Hampshire,
    // New Jersey,
    // New Mexico,
    // New York,
    // North Carolina,
    // North Dakota,
    // Ohio,
    // Oklahoma,
    // Oregon,
    // Pennsylvania,
    // Rhode Island,
    // South Carolina,
    // South Dakota,
    // Tennessee,
    // Texas,
    // Utah,
    // Vermont,
    // Virginia,
    // Washington,
    // West Virginia,
    // Wisconsin,
    // Wyoming,
  ]
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoThirdScreen(){
    this.router.navigate(['prov-config-page-three'])
  }
  gotoFourthProvScreen(){
    this.router.navigate(['prov-config-page-four'])
  }
}
