import { Component, OnInit } from '@angular/core';
import{AlertController} from '@ionic/angular';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.component.html',
  styleUrls: ['./enter-otp.component.scss'],
})
export class EnterOtpComponent implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'OTP code',
      subHeader: 'User Verification',
      message: 'This is an alert message',
      buttons: ['Dismiss']
    });

    await alert.present();
  }

  ngOnInit() {}

}
