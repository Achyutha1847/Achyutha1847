import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:any;
  public titleName= new BehaviorSubject<string>('');
  name:any;
  step: any;
  // titles = [
  //   {
  //     title:'Personal Details',
  //     path: '/profile',
  //     step: 1
  //   },
  //   {
  //     title:'Company Details',
  //     path: '/page-two',
  //     step: 2
  //   },
  //   {
  //     title:'Service Providing Details',
  //     path: '/page-three',
  //     step: 3
  //   }
  // ]
  ngOnInit(): void {
    // for (let item of this.titles) {
    //   if (window.location.pathname === item.path) {
    //         //  this.titleName = item.title;
           
    //         this.titleName.next(item.title);
    //          console.log("name",this.name);
    //          this.step = item.step;
    //   }
    // }
    // for(let item of this.titles){
    //   let obs=of(item);
    //   this.titleName.next(item.title);
    //   obs.subscribe(obs=>{
    //     this.titleName.next(obs.title);
    //   //  this.titleName=obs.title;
    //   if (location.pathname === obs.path){
     
    //    this.name=obs.title;
    //     console.log(obs.title);
    //     this.step=obs.step;
    //   }
    //   })
      // obs.subscribe(data=>{
      //   console.log(data);
      //   this.titleName=data.title;
      //   console.log(this.titleName)
      //   this.step=data.step;
      //   console.log(this.step)
      // })

    // }
  }
  
}

