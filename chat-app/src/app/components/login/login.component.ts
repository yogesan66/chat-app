import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControlName} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm: FormGroup | any;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastr:ToastrService,
    private auth:AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    this.loading = true;
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    
   
    setTimeout(() => {
      this.loading = false;
      this.auth.loginUser(email,password)
      this.loginForm.reset()
    }, 1000);
  }
}
