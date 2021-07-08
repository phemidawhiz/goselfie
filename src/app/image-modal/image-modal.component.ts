import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input() imagePath: string;
  @Input() altText: string;
  @Input() imageId: string;


  constructor() { }

  ngOnInit() {
  }

}
