import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Microsoftpricesection2Component } from './microsoftpricesection2.component';

describe('Microsoftpricesection2Component', () => {
  let component: Microsoftpricesection2Component;
  let fixture: ComponentFixture<Microsoftpricesection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Microsoftpricesection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Microsoftpricesection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
