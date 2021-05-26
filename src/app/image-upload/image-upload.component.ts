import { SelfieImageUploadService } from './../services/usage/upload.selfie';
import { ProfileImageUploadService } from './../services/usage/pim.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { RequestOptions } from '@angular/http';
import { TaskInfoService } from 'app/services/usage/task.info';
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
  isSelfie: boolean;

  constructor(private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private taskService: TaskInfoService,
    private selfieUploadService: SelfieImageUploadService,
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
    }
  }

  uploadSelfie() {
    //upload selfie
    this.message = "";
    this.processing = false;
    const cred = {
      username: this.authService.currentUser.data.username,
      taskid: this.route.snapshot.paramMap.get('id'),
      base64image: this.imgURL.substr(23),
      token: localStorage.getItem('token')
    }

    if(cred.base64image !== "ad.svg") {
      this.message = "";
      this.processing = true;
      this.selfieUploadService.uploadSelfie(cred)
      .subscribe(response => {
        const result = response;
        console.log("Result: ", result);
        if(result.status == 200) {
          this.router.navigate(['/profile']);
        } else if(result.status == 412) {
          this.message = "Unable to complete upload: you have completed this task!";
        } else if(result.status == 408) {
          this.message = "Unable to upload selfie: This task is no longer valid";
        } else {
          this.message = "Unable to upload selfie: Internal server error";
        }

        this.processing = false;
      });
    } else {
      this.message = "please choose an image to upload";
    }

  }

  uploadProfileImage() {
    this.message = "";
    this.processing = false;
    const cred = {
      username: this.authService.currentUser.data.username,
      base64image: this.imgURL.substr(23),
      token: localStorage.getItem('token')
    }

    if(cred.base64image !== "ad.svg") {
      this.message = "";
      this.processing = true;
      this.imageUploadService.uploadProfileImage(cred)
      .subscribe(response => {
        const result = response;
        console.log(result);
        if(result && (result.status == 200)) {
          this.router.navigate(['/profile']);
        } else {
          this.message = result && result.message;
        }

        this.processing = false;
      });
    } else {
      this.message = "please choose an image to upload";
    }

  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')) {
      this.isSelfie = true;
      const __this = this;
      this.taskService.getTaskInfo(this.route.snapshot.paramMap.get('id'))
      .subscribe(taskInfo => {
        if(taskInfo && taskInfo.status) {
          this.title = taskInfo && taskInfo.data && taskInfo.data.title;
          this.notice = taskInfo && taskInfo.data && taskInfo.data.description;
        }
        console.log("Taskinfo: ", taskInfo);
      });
    }
  }

}
