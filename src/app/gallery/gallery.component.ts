import { IHomepageGalleryImage, ISelfie } from './../common/types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  imageCount: number = 1;
  imageArray: Array<ISelfie> = [
    {filename: 'gallery1.jpg', tasktitle: 'Some caption'},
    {filename: 'gallery2.jpg', tasktitle: ''},
    {filename: 'gallery3.jpg', tasktitle: ''},
    {filename: 'gallery4.jpg', tasktitle: ''},
    {filename: 'gallery5.jpg', tasktitle: ''},
    {filename: 'gallery6.jpg', tasktitle: ''},
    {filename: 'gallery7.jpg', tasktitle: ''},
    {filename: 'gallery8.jpg', tasktitle: ''},
    {filename: 'gallery9.jpg', tasktitle: ''},
    {filename: 'gallery10.jpg', tasktitle: ''},
    {filename: 'gallery11.jpg', tasktitle: ''},
  ];

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
