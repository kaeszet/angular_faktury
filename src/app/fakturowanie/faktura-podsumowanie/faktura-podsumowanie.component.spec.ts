import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakturaPodsumowanieComponent } from './faktura-podsumowanie.component';

describe('FakturaPodsumowanieComponent', () => {
  let component: FakturaPodsumowanieComponent;
  let fixture: ComponentFixture<FakturaPodsumowanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakturaPodsumowanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakturaPodsumowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
