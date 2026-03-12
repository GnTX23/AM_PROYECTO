import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.page').then( m => m.ProductosPage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.page').then( m => m.CarritoPage)
  },
  {
    path: 'pago',
    loadComponent: () => import('./pago/pago.page').then( m => m.PagoPage)
  },
  {
    path: 'perfil-user',
    loadComponent: () => import('./perfil-user/perfil-user.page').then( m => m.PerfilUserPage)
  },
  {
    path: 'perfil-vendedor',
    loadComponent: () => import('./perfil-vendedor/perfil-vendedor.page').then( m => m.PerfilVendedorPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
];
