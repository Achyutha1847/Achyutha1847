import { Component, OnInit, ViewChild } from '@angular/core';
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }
  // @ViewChild(NgOtpInputComponent, { static: false })
  // ngOtpInput!: NgOtpInputComponent;

}
