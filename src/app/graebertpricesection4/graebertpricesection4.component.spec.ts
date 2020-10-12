import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graebertpricesection4Component } from './graebertpricesection4.component';

describe('Graebertpricesection4Component', () => {
  let component: Graebertpricesection4Component;
  let fixture: ComponentFixture<Graebertpricesection4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graebertpricesection4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graebertpricesection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
