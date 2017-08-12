import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private slides: Array<Object>;
  private name: string = 'Ibrahim';

  constructor(public navCtrl: NavController) {
    this.slides = [
      {
        title: 'cool basketball player',
        description: 'kevin durant left thunder for the warriors I mean I like KD but not golden state.',
        image: 'assets/images/kevin-durant.jpg'
      },
      {
        title: 'anime drawing',
        description: 'I like to to draw anime and animation.',
        image: 'assets/images/gaara.jpg'
      },
      {
        title: 'food',
        description: 'I like food because to be honest who doesn\'t like food. HA HA I got you there',
        image: 'assets/images/apple-turnover.jpg'
      }
    ]
  }

}
