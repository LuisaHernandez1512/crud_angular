import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeliComponent } from './lista-peli.component';

describe('ListaPeliComponent', () => {
  let component: ListaPeliComponent;
  let fixture: ComponentFixture<ListaPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPeliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
