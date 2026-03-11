import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class ProductosPage {

  productos = [
    { id: 1, nombre: 'Hamburguesa', precio: 55, imagen: 'assets/burger.png', descripcion: 'Deliciosa hamburguesa', vendedor: 'César' },
    { id: 2, nombre: 'Galletas', precio: 15, imagen: 'assets/cookies.png', descripcion: 'Galletas de choc. 8cm', vendedor: 'César' },
    { id: 3, nombre: 'Papitas', precio: 20, imagen: 'assets/chips.png', descripcion: 'Papitas crujientes', vendedor: 'Ana' },
    { id: 4, nombre: 'Smoothie', precio: 35, imagen: 'assets/smoothie.png', descripcion: 'Smoothie natural', vendedor: 'Ana' },
  ];

  constructor(private router: Router) {}

  verProducto(p: any) {
    this.router.navigate(['/home'], { state: { producto: p } });
  }
}