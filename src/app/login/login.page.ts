import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, RouterLink]
})
export class LoginPage {
  correo = '';
  password = '';

  constructor(private router: Router) {}

  entrar(rol: string) {
    if (rol === 'vendedor') {
      this.router.navigate(['/perfil-vendedor']);
    } else {
      this.router.navigate(['/productos']);
    }
  }
}