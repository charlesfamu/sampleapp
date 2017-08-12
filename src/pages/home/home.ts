import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private slides: Array<Object>;
  private name: string = 'Charles';

  constructor(public navCtrl: NavController) {
    this.slides = [
      {
        title: 'Sports',
        description: 'I like to play and watch sports.',
        image: 'assets/images/sports.png'
      },
      {
        title: 'Traveling',
        description: 'I like to travel. I\'ve been to many countries',
        image: 'assets/images/traveling.jpg'
      },
      {
        title: 'Programming',
        description: 'I like to program. I built the application Little Math Genius.',
        image: 'assets/images/littlemathgenius.png'
      }
    ]
  }

}
