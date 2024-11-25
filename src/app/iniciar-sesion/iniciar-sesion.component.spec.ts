import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarsesionComponent } from './iniciar-sesion.component';

describe('IniciarSesionComponent', () => {
  let component: IniciarsesionComponent;
  let fixture: ComponentFixture<IniciarsesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarsesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
