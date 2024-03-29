import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-first-reg-page',
  templateUrl: './first-reg-page.component.html',
  styleUrls: ['./first-reg-page.component.css']
})
export class FirstRegPageComponent implements OnInit {
  dropdownList: any= [];
  selectedItems: any= [];
  dropdownSettings:any = {};
  singleItem:any;
  // toppings = new FormControl('');
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  ngOnInit():void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
}
onItemSelect(item: any) {
    console.log(item);
    this.singleItem=item;
  }
  onSelectAll(items: any) {
    console.log(items);
    
  }
 

}
