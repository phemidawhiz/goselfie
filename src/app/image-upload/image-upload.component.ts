import { ProfileImageUploadService } from './../services/usage/pim.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { RequestOptions } from '@angular/http';
//import { fileToBase64, handleImageUpload } from 'app/common/utilities';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @Input() title: string;
  @Input() notice: string;

  imagePath: any;
  imgURL: any = '../../assets/icons/upload.svg';
  message: string = '';
  base64ImageString = '';
  processing: boolean;

  constructor(private router: Router,
    private authService: AuthService,
    private imageUploadService: ProfileImageUploadService) { }

  preview(files) {
    //handleImageUpload(files);
    //console.log(fileToBase64(files[0]));
    if (files.length === 0)
      return;

    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      //console.log(this.imgURL.substr(23));
      console.log("user: ", this.authService.currentUser.data.username)
    }
  }

  uploadProfileImage() {
    this.message = "";
    this.processing = false;
    const cred = {
      username: this.authService.currentUser.data.username,
      base64image: this.imgURL.substr(23)
    }

    if(cred.base64image !== "ad.svg") {
      this.message = "";
      let headers      = { 'Authorisation': localStorage.getItem('token') };
      let options       = { headers: headers }; // Create a request option
      //const headers = { 'Authorization': localStorage.getItem('token') };
      this.processing = true;
      console.log("Credentials: ", cred, options);
      this.imageUploadService.uploadProfileImage(cred)
      .subscribe(response => {
        const result = response;
        console.log(result);

        this.processing = false;
      });
    } else {
      this.message = "please choose an image to upload";
    }

  }

  ngOnInit() {
  }

}
