import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliacionRegistroComponent } from './afiliacion-registro.component';

describe('AfiliacionRegistroComponent', () => {
  let component: AfiliacionRegistroComponent;
  let fixture: ComponentFixture<AfiliacionRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliacionRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliacionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
