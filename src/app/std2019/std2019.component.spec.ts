import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std2019Component } from './std2019.component';

describe('Std2019Component', () => {
  let component: Std2019Component;
  let fixture: ComponentFixture<Std2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
