import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeliComponent } from './editar-peli.component';

describe('EditarPeliComponent', () => {
  let component: EditarPeliComponent;
  let fixture: ComponentFixture<EditarPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPeliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
