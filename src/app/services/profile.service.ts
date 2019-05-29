import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class ProfileService {


  private _username:string;
  private _clientid = 'e02e13eda1f125f106b8';
  private _clientsecret = '934c11fc1e78d2af9598024304d40e4bbff93548';
  constructor(private http:Http) {
    console.log("Server está pronto!");
    this._username = "Digoyb";
   }

   getProfileInfo(){

    return this.http.get("https://api.github.com/users/" + this._username + "?client_id=" + this._clientid + "&client_secret=" + this._clientsecret)
    .pipe(map(res => res.json()));
   }

   getProfileRepos(){

    return this.http.get("https://api.github.com/users/" + this._username + "/repos?client_id=" + this._clientid + "&client_secret=" + this._clientsecret)
    .pipe(map(res => res.json()));
   }

   updateProfile(username: string){
     this._username = username; 
   }
}
