import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Officepp2019Component } from './officepp2019.component';

describe('Officepp2019Component', () => {
  let component: Officepp2019Component;
  let fixture: ComponentFixture<Officepp2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Officepp2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Officepp2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
