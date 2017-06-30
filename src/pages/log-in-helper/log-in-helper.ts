import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-log-in-helper',
  templateUrl: 'log-in-helper.html'
})
export class LogInHelperPage {

  constructor(public navCtrl: NavController) {

  }

  goToNextPage() {
    this.navCtrl.push(LogInHelperPage);
  }

}
