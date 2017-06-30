import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-log-in-coordiator',
  templateUrl: 'log-in-coordinator.html'
})
export class LogInCoordinatorPage {

  constructor(public navCtrl: NavController) {

  }

  goToNextPage() {
    this.navCtrl.push(LogInCoordinatorPage);
  }

}
