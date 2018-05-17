import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,  Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { User } from "../usermodel";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.css"]
})
export class SingupComponent implements OnInit {
  sform: FormGroup;

  constructor(private authService: AuthService) {
   
  }

  ngOnInit() {
    this.sform = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    const user = new User(this.sform.value.email, 
      this.sform.value.password,
      this.sform.value.firstName,
      this.sform.value.lastName
     );
     this.authService.signUp(user).subscribe(
       data => console.log(data),
       error => console.log(error),
     );
     this.sform.reset();
  }
}
