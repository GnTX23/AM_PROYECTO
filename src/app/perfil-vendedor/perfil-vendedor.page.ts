import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, LoadingController } from '@ionic/angular';

interface ProductoDestacado {
  nombre: string;
  precio: number | null;
  foto: string;
}

@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.page.html',
  styleUrls: ['./perfil-vendedor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PerfilVendedorPage {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  vendedor = {
    nombre: '',
    telefono: '',
    foto: '',
    whatsapp: ''
  };

  // Siempre 3 slots de productos destacados
  productosDestacados: ProductoDestacado[] = [
    { nombre: '', precio: null, foto: '' },
    { nombre: '', precio: null, foto: '' },
    { nombre: '', precio: null, foto: '' },
  ];

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  // ── Foto de perfil ──────────────────────────────
  seleccionarFoto() {
    this.fileInput.nativeElement.click();
  }

  onFotoSeleccionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    this.procesarImagen(input.files[0], (resultado) => {
      this.vendedor.foto = resultado;
    });
  }

  // ── Foto de producto destacado ──────────────────
  seleccionarFotoProducto(index: number) {
    const input = document.getElementById('fileProducto' + index) as HTMLInputElement;
    input?.click();
  }

  onFotoProductoSeleccionada(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    this.procesarImagen(input.files[0], (resultado) => {
      this.productosDestacados[index].foto = resultado;
    });
  }

  // ── Utilidad compartida para procesar imágenes ──
  private procesarImagen(archivo: File, callback: (result: string) => void) {
    if (!archivo.type.startsWith('image/')) {
      this.mostrarToast('El archivo debe ser una imagen.', 'danger');
      return;
    }
    if (archivo.size > 5 * 1024 * 1024) {
      this.mostrarToast('La imagen no debe superar 5MB.', 'warning');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => callback(e.target?.result as string);
    reader.readAsDataURL(archivo);
  }

  // ── WhatsApp ────────────────────────────────────
  abrirWhatsapp() {
    if (!this.vendedor.whatsapp) return;
    const numero = this.vendedor.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${numero}`, '_blank');
  }

  // ── Guardar ─────────────────────────────────────
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
    if (!this.vendedor.nombre.trim()) {
      this.mostrarToast('Por favor ingresa tu nombre.', 'warning');
      return false;
    }
    if (!this.vendedor.telefono.trim()) {
      this.mostrarToast('Por favor ingresa tu teléfono.', 'warning');
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