import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  @ViewChild('ngOtpInput') ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    disableAutoFocus: false,
    placeholder: '0',
    inputStyles: {
      'width': '35px',
      'height': '35px',
      // 'border': '0px',
      'border': '2px solid #ccc',
      // 'margin-right': '15px',
      'font-size': '13px',
      'color': '#000',
      'font-weight': '600',
      'outline': '0',
      'text-align': 'center',
      'border-radius': '4px'
    }
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoDonePage(){
    this.router.navigate(['reg-done'])
  }

}
