import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  teste(){
    console.log("teste")
    this.http.get("https://front-end-vacilometro.stackblitz.io/login")
    .subscribe(response => console.log(response))
  }

  formLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(event){
    console.log(this.formLogin.get("username").value)
    console.log(this.formLogin.get("password").value)
  }
  ngOnInit() {
  }

  



 
}