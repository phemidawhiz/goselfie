import { getAge } from './../common/utilities';
import { RegService } from './../services/usage/reg.service';
import { environment } from 'environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSelected: boolean = true;
  paymentIsMade: boolean = true;
  isOffline: boolean;
  submitting: boolean = false;
  regFailed: boolean = true;
  buttonText: string = "Register";

  errors: Array<string> = [];

  paymentMethods = [
    {id: 1, name: "Pay with card"},
    {id: 2, name: "Offline or transfer"}
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private regService: RegService) { }

  payWithPaystack(name: string, email: string) {

    window.location.assign(`${environment.baseDomain}/payment.html?fn=${name}&email=${email}`);
  }

  onOptionsSelected(value: string){
    if(value === "2")
      this.isOffline = true;
    else
      this.isOffline = false;
      //this.payWithPaystack();
  }

  submitForm(f) {
    if(f.value.paymentMethods === "2")
      this.isOffline = true;
    else
      this.isOffline = false;
      this.payWithPaystack(f.value.fullName, f.value.emailAddress);
  }

  submitRegForm(f) {
    console.log(f);
    this.errors = [];

    if(f.invalid) {
      this.errors.push("Please fill all fields and make sure email is in correct format");
    }

    if(this.errors.length === 0) {
      //submit form to backend
      console.log("age: ", getAge(f.value.dob as Date))
      this.submitting = true;
      if(this.isOffline)
        f.value.mop = "offline";
      else
        f.value.mop = "paystack";
      console.log("Form fields: ", f.value);
      this.regService.register(f.value)
      .subscribe(response => {
        const result = response;
        console.log(result);
        if(result.status) {
          this.regFailed = false;
          //this.router.navigate(['/login']);
        } else {
          this.errors.push(result.message);
        }
        this.submitting = false;
      });
    }
  }


  ngOnInit() {
  }

}
