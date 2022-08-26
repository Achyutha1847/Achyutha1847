import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-role',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.css']
})
export class SelectRoleComponent implements OnInit {
  isReqSelected= false;
  isProvSelected=false

  constructor() { }
  roles=[
    {
      icon:"fas fa-user-cog",
      heading:"Service Requester",
      para:"I'm looking for service like repair,preventative maintanance,Installation,Labor & parts for my machine.",
   isReqSelected: false
    },
    {
      icon:"fas fa-user-cog",
      heading:"Service Provider",
      para:"I will be provide services like repair,Preventative maintanance , Installation Labor & parts for your machine.",
    isProvSelected: false

    }
  ]
  ngOnInit(): void {
  }
onSelected(item: any) {

  if (item.heading === 'Service Requester') {
    item.isReqSelected = !item?.isReqSelected;
    this.roles.filter(item => item.heading !== 'Service Requester'? item.isProvSelected = false : '');
    this.isReqSelected=true;
    this.isProvSelected=false;

  }else {
    item.isProvSelected = !item?.isProvSelected;
    this.roles.filter(item => item.heading === 'Service Requester'? item.isReqSelected = false : '');
    this.isReqSelected=false;
    this.isProvSelected=true;

  }
}
clickMe(){
  console.log("clicked")
}
}
