import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpspremiumComponent } from './wpspremium.component';

describe('WpspremiumComponent', () => {
  let component: WpspremiumComponent;
  let fixture: ComponentFixture<WpspremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpspremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpspremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
