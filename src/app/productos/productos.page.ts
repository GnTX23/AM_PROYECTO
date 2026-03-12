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
  { id: 1, nombre: 'Roles de canela', precio: 65, imagen: 'https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/517927434_1281700770325387_7547127993698797745_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=qFW9Wwm2E5cQ7kNvwFcx0dK&_nc_oc=Adm0PWRSLeq0DnChb227oQdi2S7MMaUgJzEaJr0NkT3_FPSwlXttxWAHJnNZAHGpOyIt1KHjazey-pC5_80r9Mkq&_nc_zt=23&_nc_ht=scontent.fagu5-1.fna&_nc_gid=GhHbPjokog_MlV81slAZ2Q&_nc_ss=8&oh=00_AfwM7boVJLC5awLqwVLz1TfXn4MFwryubsBkPyF6OnvHjQ&oe=69B808FB', descripcion: 'Deliciosos roles de canela', vendedor: 'Kalu' },
  { id: 2, nombre: 'Galletas Costco', precio: 15, imagen: 'https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/487153357_694415173162783_5453379550908943225_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rB94xKCx8MUQ7kNvwFbWkaA&_nc_oc=AdlnOd-wNtSths6SlE0eZeztRzug0dEWCflz1MQNxKComPG5rEnAJWwQdjn-tTX3wX9TmoJi0Q3Nc5VhNybmdOIe&_nc_zt=23&_nc_ht=scontent.fagu5-1.fna&_nc_gid=vAO_M1_jNO6iL3I06EdVbg&_nc_ss=8&oh=00_AfxnwUtYK82D8Nki33sY5dygyja91dr3WzWEaYtsw-WvMQ&oe=69B7FA4C', descripcion: 'Galletas de costco', vendedor: 'Valeria' },
  { id: 3, nombre: 'Peelerz', precio: 55, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrWKuirfplpdwknhZl5GXCGb7kzDZ0YED4w&s', descripcion: 'peelerz', vendedor: 'Ana' },
  { id: 4, nombre: 'Bubulubu', precio: 8, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGc3gvOvwXGLIiyVb_IAbYpDx0TXSWGGNFQ&s', descripcion: 'Bubulubu', vendedor: 'Diego' },
  { id: 5, nombre: 'Bolo', precio: 50, imagen: 'https://www.mardedulces.com/img/bolsitas/bolsita-50-dulces.png', descripcion: 'Bolo', vendedor: 'Luisa' },
  { id: 6, nombre: 'Chidas', precio: 18, imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/64549013-800-auto?v=639082673038000000&width=800&height=auto&aspect=true', descripcion: 'Chidas', vendedor: 'George' },
  { id: 7, nombre: 'Gelatinas', precio: 25, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OSJNlP0cgEVpI4l8uFI8pp5x6OdV3pD4bA&s', descripcion: 'Gelatinas', vendedor: 'Karla' },
  { id: 8, nombre: 'Carlotas', precio: 35, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqOR8fkk569hyHwUYswxtmDFIM09RNAMQJg&s', descripcion: 'Carlotas', vendedor: 'Luis' },
  { id: 9, nombre: 'Manzaba carameilizada', precio: 8, imagen: 'https://cdn7.kiwilimon.com/recetaimagen/20394/960x640/10641.jpg.jpg', descripcion: 'manzana', vendedor: 'Moni' },
  { id: 10, nombre: 'Burritos', precio: 17, imagen: 'https://img-global.cpcdn.com/recipes/47dea8735ebcac2e/1200x630cq80/photo.jpg', descripcion: 'Burritos', vendedor: 'Jorge' },
  { id: 11, nombre: 'Birria', precio: 70, imagen: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/6436c31/2147483647/strip/true/crop/1195x672+3+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2021%2F09%2Fcomo-preparar-birria.jpg', descripcion: 'Burria', vendedor: 'Pepe' },
  { id: 13, nombre: 'Banderrillas', precio: 55, imagen: 'https://offloadmedia.feverup.com/cdmxsecreta.com/wp-content/uploads/2023/04/21021532/Mipzar-banderillas-coreanas.jpg', descripcion: 'Banderillas', vendedor: 'Lola' },





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