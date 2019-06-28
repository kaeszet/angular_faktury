import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StworzKlientaComponent } from './stworz-klienta.component';

describe('StworzKlientaComponent', () => {
  let component: StworzKlientaComponent;
  let fixture: ComponentFixture<StworzKlientaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StworzKlientaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StworzKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
