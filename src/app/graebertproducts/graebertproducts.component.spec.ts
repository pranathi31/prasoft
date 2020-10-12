import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraebertproductsComponent } from './graebertproducts.component';

describe('GraebertproductsComponent', () => {
  let component: GraebertproductsComponent;
  let fixture: ComponentFixture<GraebertproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraebertproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraebertproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
