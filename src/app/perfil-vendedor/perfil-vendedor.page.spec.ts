import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilVendedorPage } from './perfil-vendedor.page';

describe('PerfilVendedorPage', () => {
  let component: PerfilVendedorPage;
  let fixture: ComponentFixture<PerfilVendedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
