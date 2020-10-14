import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Globais } from '../globais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public submitted = false;
  public form: FormGroup;
  constructor(private _location: Location,private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nota: new FormControl('',
      Validators.required
      ),
      documento: new FormControl('',[
        Validators.minLength(14),
        Validators.maxLength(18),
        Validators.pattern('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})'),
        Validators.required,
      ]),
    },)
  }
  voltar(){
    this._location.back();
  }
  logar(){
    this.submitted=true;
    localStorage.setItem('logado', 'true')
    this.router.navigate(['/painel'])
  }

  msg(m: string, event?){
    event?event.preventDefault(): '';
    alert(m);
  }
}