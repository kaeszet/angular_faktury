import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakturaPozycjaComponent } from './faktura-pozycja.component';

describe('FakturaPozycjaComponent', () => {
  let component: FakturaPozycjaComponent;
  let fixture: ComponentFixture<FakturaPozycjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakturaPozycjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakturaPozycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
