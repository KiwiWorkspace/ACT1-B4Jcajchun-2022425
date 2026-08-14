import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carshop } from './carshop.component';

describe('Carshop', () => {
  let component: Carshop;
  let fixture: ComponentFixture<Carshop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carshop],
    }).compileComponents();

    fixture = TestBed.createComponent(Carshop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
