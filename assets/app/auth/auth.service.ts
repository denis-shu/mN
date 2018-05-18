import { Injectable } from "@angular/core";
import { User } from "./usermodel";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  private baseUrl = "https://devasdaddn.herokuapp.com/";

  constructor(private http: Http) {}
  
  signUp(user: User) {
    const body = JSON.stringify(user);
    const hders = new Headers({ "Content-Type": "application/json" });

    return this.http
      .post(this.baseUrl + "/user", body, { headers: hders })
      .map((response: Response) => response.json())
      .catch((err: Response) => Observable.throw(err));
  }

  signIn(user: User) {
    const body = JSON.stringify(user);
    const hders = new Headers({ "Content-Type": "application/json" });

    return this.http
      .post(this.baseUrl + "/user/signin", body, { headers: hders })
      .map((response: Response) => response.json())
      .catch((err: Response) => Observable.throw(err));
  }

  logout(){
    localStorage.clear();
  }

  isLoogedIn(){
    return localStorage.getItem('token')!==null;
  }
}
