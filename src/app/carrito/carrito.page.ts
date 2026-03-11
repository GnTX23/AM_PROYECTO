import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CarritoPage {

  carrito = [
    { nombre: 'Galletas', precio: 15, cantidad: 1 },
    { nombre: 'Papitas', precio: 20, cantidad: 3 },
  ];

  get total() {
    return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }
}