import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonList, IonItem, IonIcon, IonLabel, IonInput,
  IonSelect, IonSelectOption, IonButton,
  AlertController, LoadingController, ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, mailOutline, callOutline, schoolOutline,
  lockClosedOutline, eyeOutline, eyeOffOutline, personAddOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonHeader, IonToolbar,
    IonButtons, IonBackButton, IonTitle, IonContent, IonList, IonItem,
    IonIcon, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton]
})
export class RegistroPage {
  nombre = ''; correo = ''; telefono = ''; aula = ''; password = '';
  mostrarPassword = false;

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    addIcons({ personOutline, mailOutline, callOutline, schoolOutline,
      lockClosedOutline, eyeOutline, eyeOffOutline, personAddOutline });
  }

  togglePassword() { this.mostrarPassword = !this.mostrarPassword; }

  async registrar() {
    if (!this.nombre || !this.correo.includes('@') || !this.telefono || !this.aula || this.password.length < 8) {
      const alert = await this.alertCtrl.create({ header: 'Error', message: 'Completa todos los campos correctamente.', buttons: ['OK'] });
      return alert.present();
    }

    const loading = await this.loadingCtrl.create({ message: 'Registrando...', spinner: 'crescent' });
    await loading.present();

    try {
      // Tu lógica de registro aquí (API, Firebase, etc.)
      await loading.dismiss();
      const toast = await this.toastCtrl.create({ message: '¡Registro exitoso!', duration: 2000, color: 'warning' });
      await toast.present();
      this.router.navigate(['/login']);
    } catch {
      await loading.dismiss();
      const alert = await this.alertCtrl.create({ header: 'Error', message: 'No se pudo registrar. Intenta de nuevo.', buttons: ['OK'] });
      alert.present();
    }
  }
}