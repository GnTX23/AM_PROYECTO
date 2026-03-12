import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DetalleProductoComponent {

  @Input() producto: any;

  constructor(private modalController: ModalController) {}

  cerrar() {
    this.modalController.dismiss();
  }

  contactarWhatsapp() {
    const numero = this.producto.whatsapp.replace(/\D/g, '');
    const mensaje = encodeURIComponent(`Hola! Vi tu producto "${this.producto.nombre}" en UTMarket y me interesa 😊`);
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
  }
}