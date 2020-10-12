import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M365pricesection2Component } from './m365pricesection2.component';

describe('M365pricesection2Component', () => {
  let component: M365pricesection2Component;
  let fixture: ComponentFixture<M365pricesection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M365pricesection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M365pricesection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
