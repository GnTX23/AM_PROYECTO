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
    { nombre: 'Galletas costco', precio: 15, cantidad: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1c1SQJogbxGJa0YqKQOnCQbE5DnZnbzgKQ&s', vendedor: 'Valeria' },
    { nombre: 'Chidas', precio: 18, cantidad: 3, imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/64549013-800-auto?v=639082673038000000&width=800&height=auto&aspect=true', vendedor: 'George' },
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