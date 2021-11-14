import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth/auth.service';
import {AccountService} from "./auth/account.service";
import {Usuario} from "../model/usuario";
import {UsuarioService} from "../service/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  async onSubmit() {
    console.log(`Flag - login.component : ${this.login.email}`);
    try {
      const result = await this.usuarioService.login(this.login);
      console.log(`Login efetuado: ${result}`);
      this.router.navigate(['menu']); // navego para a rota vazia novamente
    } catch (error) {
      console.log(`Login falhou miseravelmente:`);
      console.error(error);
    }
  }

/*
  username!: string;
  password!: string;
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }
  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe(
      (result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/hello']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
*/
}
