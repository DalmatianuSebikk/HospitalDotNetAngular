import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('Guest')
    }
  );

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) { }

  get email() : AbstractControl {
    return this.registerForm.get('email') as AbstractControl;
  }

  get password() : AbstractControl {
    return this.registerForm.get('password') as AbstractControl;
  }

  get role() : AbstractControl {
    return this.registerForm.get('role') as AbstractControl;
  }

  ngOnInit(): void {
  }

  public register() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/login']);
      },
      (error) => {

      }
    )
  }
}
