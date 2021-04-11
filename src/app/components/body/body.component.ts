import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/classes/profile';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  pro: Profile;
  isHobbyDisplay: boolean;
  constructor() {
    this.isHobbyDisplay = false;
    this.pro = new Profile(
      1754,
      'ahmed Noaman',
      'https://dummyimage.com/250x100/c4c2c4/ff006f&text=profile+pic',
      '../../../assets/images/pic.png',
      ['reading', 'running', 'football', 'art'],
      new Date()
    );
  }
  toggle() {
    this.isHobbyDisplay = !this.isHobbyDisplay;
  }

  ngOnInit(): void {}
}
