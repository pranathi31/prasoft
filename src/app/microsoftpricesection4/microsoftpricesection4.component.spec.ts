import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Microsoftpricesection4Component } from './microsoftpricesection4.component';

describe('Microsoftpricesection4Component', () => {
  let component: Microsoftpricesection4Component;
  let fixture: ComponentFixture<Microsoftpricesection4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Microsoftpricesection4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Microsoftpricesection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
