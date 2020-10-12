import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Microsoftpricesection1Component } from './microsoftpricesection1.component';

describe('Microsoftpricesection1Component', () => {
  let component: Microsoftpricesection1Component;
  let fixture: ComponentFixture<Microsoftpricesection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Microsoftpricesection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Microsoftpricesection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
