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
    {filename: 'gallery1.jpg', tasktitle: 'Bright BBN'},
    {filename: 'gallery2.jpg', tasktitle: 'Mr Funny'},
    {filename: 'gallery3.jpg', tasktitle: 'Eko Hotel'},
    {filename: 'gallery4.jpg', tasktitle: 'Eko Hotel'},
    {filename: 'gallery5.jpg', tasktitle: 'Eko Hotel'},
    {filename: 'gallery6.jpg', tasktitle: 'Eko Hotel'},
    {filename: 'gallery7.jpg', tasktitle: 'Gentuu'},
    {filename: 'gallery8.jpg', tasktitle: 'Ayomidate'},
    {filename: 'gallery9.jpg', tasktitle: 'Bright BBN'},
    {filename: 'gallery10.jpg', tasktitle: 'Destiny Etiko'},
    {filename: 'gallery11.jpg', tasktitle: 'Madiba'},
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
