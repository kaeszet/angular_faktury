import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PojedynczaPozycjaComponent } from './pojedyncza-pozycja.component';

describe('PojedynczaPozycjaComponent', () => {
  let component: PojedynczaPozycjaComponent;
  let fixture: ComponentFixture<PojedynczaPozycjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PojedynczaPozycjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PojedynczaPozycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
