import { Component, OnInit } from '@angular/core';
import{AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-otp',
  templateUrl: './input-otp.page.html',
  styleUrls: ['./input-otp.page.scss'],
})
export class InputOtpPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  randomNumber: number = Math.floor(Math.random() * 100000) + 1;
  // toString=randomNumber.toString();

  otp: number;

  async checkOTP() {
    if (this.otp === this.randomNumber) {
      this.register()
    }
    else {
      const alertError = await this.alertController.create({
        header: 'OTP code error',
        subHeader: 'User verification',
        message: 'Error',
        buttons: ['Dismiss']
      })
    }
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'OTP code',
      subHeader: 'User Verification',
      message: Math.floor(Math.random() * 100000) + 1,
      buttons: ['Dismiss']
    });
    
    await alert.present();
  }
  ngOnInit() {
  }

  register() {
    this.router.navigate(['']);
  }
}

