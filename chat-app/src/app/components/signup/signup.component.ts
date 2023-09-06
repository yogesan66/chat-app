import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  signUpForm: FormGroup | any;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastr:ToastrService,
    private auth:AuthService
  ) {
    this.signUpForm = this.fb.group({
      username:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    this.loading = true;
    let email = this.signUpForm.value.email;
    let password = this.signUpForm.value.password;
    setTimeout(() => {
      this.loading = false;
      this.auth.signUpUser(email,password)
      console.log(email);
      console.log(password)
      console.log('sign up started')
      this.signUpForm.reset()
    }, 1000);
  }
}
