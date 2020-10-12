import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M365pricesection1Component } from './m365pricesection1.component';

describe('M365pricesection1Component', () => {
  let component: M365pricesection1Component;
  let fixture: ComponentFixture<M365pricesection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M365pricesection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M365pricesection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
