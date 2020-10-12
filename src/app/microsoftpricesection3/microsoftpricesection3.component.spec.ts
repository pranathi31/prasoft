import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Microsoftpricesection3Component } from './microsoftpricesection3.component';

describe('Microsoftpricesection3Component', () => {
  let component: Microsoftpricesection3Component;
  let fixture: ComponentFixture<Microsoftpricesection3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Microsoftpricesection3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Microsoftpricesection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
