import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private auth:AngularFireAuth,
    private toastr:ToastrService,
    private router:Router
  ) { }

    signUpUser(email:any,password:any){
      this.auth.createUserWithEmailAndPassword(email,password).then((res:any) => {
        console.log(res)
        console.log(res.user.emailVerified,'verified')
        if(res.user.emailVerified == false){
          res.user.sendEmailVerification()
          this.toastr.info('A link has been sent to you mail. Kindly verify')
        }
        this.toastr.success('Signed Up successfully!');
        this.router.navigate(['login'])
      }).catch((error: any) => {
        this.toastr.error('Sign Up failed:' + error.message);
      });
  }

  loginUser(email:any,password:any){
    this.auth.signInWithEmailAndPassword(email,password).then((res:any) => {
      console.log(res.user.emailVerified,'login')
      if(res.user.emailVerified){
        this.toastr.success('Logged in successfully!');
        this.router.navigate(['home'])
        JSON.stringify(localStorage.setItem('loggedUser','true'))
      }
      else{
        this.toastr.info('Kindly verify your email.')
      }
      
    }).catch((error: any) => {
      this.toastr.error('Logged In failed:' + error.message);
    });
  }
}
