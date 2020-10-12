import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graebertpricesection123Component } from './graebertpricesection123.component';

describe('Graebertpricesection123Component', () => {
  let component: Graebertpricesection123Component;
  let fixture: ComponentFixture<Graebertpricesection123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graebertpricesection123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graebertpricesection123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
