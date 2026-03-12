import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.page.html',
  styleUrls: ['./perfil-user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PerfilUserPage {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  // Foto por defecto (puedes cambiarla por tu asset)
  fotoPerfil: string = 'assets/default-avatar.png';

  nombre: string   = '';
  telefono: string = '';
  aula: string     = '';

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  // Abre el selector de archivos al hacer clic en el avatar o el chip
  seleccionarFoto() {
    this.fileInput.nativeElement.click();
  }

  // Convierte la imagen seleccionada a base64 para previsualizar
  onFotoSeleccionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const archivo = input.files[0];

    // Validar que sea una imagen y no supere 5MB
    if (!archivo.type.startsWith('image/')) {
      this.mostrarToast('El archivo debe ser una imagen.', 'danger');
      return;
    }
    if (archivo.size > 5 * 1024 * 1024) {
      this.mostrarToast('La imagen no debe superar 5MB.', 'warning');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.fotoPerfil = e.target?.result as string;
    };
    reader.readAsDataURL(archivo);
  }

  async guardarCambios() {
    if (!this.validarCampos()) return;

    const loading = await this.loadingController.create({
      message: 'Guardando cambios...',
      duration: 1500,
    });
    await loading.present();

    // Aquí irá la lógica de backend
    await loading.onDidDismiss();

    this.mostrarToast('¡Perfil actualizado correctamente! ✅', 'success');
  }

  private validarCampos(): boolean {
    if (!this.nombre.trim()) {
      this.mostrarToast('Por favor ingresa tu nombre.', 'warning');
      return false;
    }
    if (!this.telefono.trim()) {
      this.mostrarToast('Por favor ingresa tu teléfono.', 'warning');
      return false;
    }
    if (!this.aula) {
      this.mostrarToast('Por favor selecciona tu aula.', 'warning');
      return false;
    }
    return true;
  }

  private async mostrarToast(mensaje: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      color,
      position: 'bottom',
    });
    await toast.present();
  }
}