import { PaymentVerificationService } from './../services/usage/verify.payment';
import { PinVerificationService } from './../services/usage/verify.pin';
import { PinUsageService } from './../services/usage/use.pin';
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
  paymentIsMade: boolean;
  isOffline: boolean;
  submitting: boolean = false;
  submittingMethod: boolean;
  regFailed: boolean = true;
  buttonText: string = "Register";
  submitValue: string = "Submit";
  methodButtonText: string = "Submit";
  accessPin: string = "nopin";
  pageMessage: string = "Please read the procedure carefully before\<br > proceeding with registration";
  regFormTitle: string = "Get Started";

  errors: Array<string> = [];

  paymentMethods = [
    {id: 1, name: "Pay with card"},
    {id: 2, name: "Offline or transfer"}
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usePin: PinVerificationService,
    private verifyPayment: PaymentVerificationService,
    private regService: RegService) { }

  payWithPaystack(name: string, email: string) {

    window.location.assign(`${environment.baseDomain}/payment/payment.html?fn=${name}&email=${email}`);
  }

  onOptionsSelected(value: string){
    if(value === "2")
      this.isOffline = true;
    else
      this.isOffline = false;

  }

  submitForm(f) {
    this.errors = [];
    this.methodButtonText = "Processing";
    this.submittingMethod = true;
    if(f.value.paymentMethods === "2") {
      this.accessPin = f.value.accessPin;
      const __this = this;
      this.isOffline = true;
      this.usePin.verifyAccessPin(f.value.accessPin)
      .subscribe(response => {
        if(response.status) {
          __this.paymentIsMade = true;
          this.pageMessage = "Your payment was successful, please fill the form \<br>below to complete your registration";
          this.regFormTitle = "Personal Info";
        } else {
          __this.errors.push(response.message);
        }
        this.submittingMethod = false;
        this.methodButtonText = "Submit";
      });
    } else {
      this.isOffline = false;
      if(f.invalid) {
        this.errors.push("Please provide full name and email");
        this.submittingMethod = false;
        this.methodButtonText = "Submit";
      } else {
        this.payWithPaystack(f.value.fullName, f.value.emailAddress);
      }

    }

  }

  submitRegForm(f) {
    console.log(f);
    this.errors = [];
    if(f.invalid) {
      this.errors.push("Please fill all fields and make sure email is in correct format");
    }

    if(getAge(f.value.dob as Date) < 18) {
      this.errors.push("You must be above 18 years to participate");
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
      this.submitValue = "Processing...";
      this.regService.register(f.value, this.accessPin)
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
        this.submitValue = "Submit";
      });
    }
  }


  ngOnInit() {

    if(this.route.snapshot.paramMap.get('reference')) {

      this.verifyPayment.verifyPayment(this.route.snapshot.paramMap.get('reference'))
      .subscribe(response => {
        const result = response;
        console.log(result);
        if(result.status) {
          this.paymentIsMade = true;
          this.pageMessage = "Your payment was successful, please fill the form \<br>below to complete your registration. Please do not reload this page while filling the form";
          this.regFormTitle = "Personal Info";
        } else {
          this.errors.push("Unable to verify payment: ", result.message);
        }
        this.submitting = false;
        this.submitValue = "Submit";
      });
    }

  }

}
