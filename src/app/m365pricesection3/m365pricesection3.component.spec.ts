import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M365pricesection3Component } from './m365pricesection3.component';

describe('M365pricesection3Component', () => {
  let component: M365pricesection3Component;
  let fixture: ComponentFixture<M365pricesection3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M365pricesection3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M365pricesection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
