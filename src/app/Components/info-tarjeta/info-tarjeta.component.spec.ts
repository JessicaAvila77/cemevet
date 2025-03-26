import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTarjetaComponent } from './info-tarjeta.component';

describe('InfoTarjetaComponent', () => {
  let component: InfoTarjetaComponent;
  let fixture: ComponentFixture<InfoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
