import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class LoginPage {
  usuario = '';
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