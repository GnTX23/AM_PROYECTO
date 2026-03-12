import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class CarritoPage {

  carrito = [
    { nombre: 'Galletas', precio: 15, cantidad: 1, imagen: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400', vendedor: 'César' },
    { nombre: 'Papitas', precio: 20, cantidad: 3, imagen: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400', vendedor: 'Ana' },
  ];

  get total() {
    return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  aumentar(i: number) {
    this.carrito[i].cantidad++;
  }

  reducir(i: number) {
    if (this.carrito[i].cantidad > 1) {
      this.carrito[i].cantidad--;
    } else {
      this.carrito.splice(i, 1);
    }
  }
}