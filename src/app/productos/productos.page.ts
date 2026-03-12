import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ProductosPage {

  busqueda = '';
  carrito: any[] = [];
  mostrarToast = false;
  mensajeToast = '';

productos = [
  { id: 1, nombre: 'Hamburguesa', precio: 55, imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', descripcion: 'Deliciosa hamburguesa', vendedor: 'César' },
  { id: 2, nombre: 'Galletas', precio: 15, imagen: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400', descripcion: 'Galletas de choc. 8cm', vendedor: 'César' },
  { id: 3, nombre: 'Papitas', precio: 20, imagen: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400', descripcion: 'Papitas crujientes', vendedor: 'Ana' },
  { id: 4, nombre: 'Smoothie', precio: 35, imagen: 'https://images.unsplash.com/photo-1553530666-ba11a90a3abe?w=400', descripcion: 'Smoothie natural', vendedor: 'Ana' },
];
  get productosFiltrados() {
    if (!this.busqueda) return this.productos;
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      p.vendedor.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  constructor(private router: Router) {}

  agregarAlCarrito(p: any) {
    this.carrito.push(p);
    this.mensajeToast = `✅ ${p.nombre} agregado al carrito`;
    this.mostrarToast = true;
  }

  verProducto(p: any) {
    this.router.navigate(['/home'], { state: { producto: p } });
  }
}