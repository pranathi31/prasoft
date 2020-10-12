import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M365Component } from './m365.component';

describe('M365Component', () => {
  let component: M365Component;
  let fixture: ComponentFixture<M365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
