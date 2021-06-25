import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  imageCount: number = 1;

  increaseCount() {
    if(this.imageCount < 11)
      this.imageCount++;

  }

  decreaseCount() {
    if(this.imageCount > 1)
      this.imageCount--;

  }

  ngOnInit() {
  }

}
