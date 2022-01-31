import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),

    }
  );

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) { }

  get email() : AbstractControl {
    return this.loginForm.get('email') as AbstractControl;
  }

  get password() : AbstractControl {
    return this.loginForm.get('password') as AbstractControl;
  }
  ngOnInit(): void {
  }

  public login(): void {
    console.log(this.loginForm.value);
    this.dataService.changeUserData(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (result) => {
        localStorage.setItem('Token', result.accessToken);
        this.router.navigate(['/pacienti']);
      },
    (error) => {
        console.error(error);
      }
    );
    // localStorage.setItem('Role', 'Admin');

  }
}
