import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M365pricesection4Component } from './m365pricesection4.component';

describe('M365pricesection4Component', () => {
  let component: M365pricesection4Component;
  let fixture: ComponentFixture<M365pricesection4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M365pricesection4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M365pricesection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
