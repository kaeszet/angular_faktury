import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlienciListaComponent } from './klienci-lista.component';

describe('KlienciListaComponent', () => {
  let component: KlienciListaComponent;
  let fixture: ComponentFixture<KlienciListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlienciListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlienciListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
