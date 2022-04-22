import { sleep } from 'src/app/constant';
import { Component, OnInit } from '@angular/core';
import { Validator } from 'src/app/tools/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  callingAPI = false;
  email = "";
  password = "";
  cpassword = "";

  error_email = false;
  error_password = false;
  error_cpassword = false;
  created = false;

  constructor() { }

  ngOnInit(): void {
  }

  async createAccount() {
    this.callingAPI = true;
    await sleep(2000);
    let userData = {
      email: this.email,
      password: this.password,
    }
    localStorage.setItem("userData", JSON.stringify(userData));
    this.callingAPI = false;
    this.created = true;
  }

  removeErrorMessage() {
    this.error_email = false;
    this.error_password = false;
    this.error_cpassword = false;
  }

  createAccountProxy() {
    let fieldOK = true;
    if (!Validator.correctEmail(`${this.email}`)) {
      this.error_email = true;
      fieldOK = false;
    }

    if (!Validator.correctString(`${this.password}`)) {
      this.error_password = true;
      fieldOK = false;
    }

    if (this.password != this.cpassword) {
      this.error_cpassword = true;
      fieldOK = false;
    }

    if (fieldOK) {
      this.removeErrorMessage();
      this.createAccount();
    }
  }

}
