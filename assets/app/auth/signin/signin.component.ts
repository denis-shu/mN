import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "../usermodel";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  sform: FormGroup;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.sform = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const user = new User(this.sform.value.email, this.sform.value.password);
    this.auth.signIn(user).subscribe(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      this.router.navigateByUrl('/');
    });
    this.sform.reset();
  }
}
