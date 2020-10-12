import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graebertpricesection5Component } from './graebertpricesection5.component';

describe('Graebertpricesection5Component', () => {
  let component: Graebertpricesection5Component;
  let fixture: ComponentFixture<Graebertpricesection5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graebertpricesection5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graebertpricesection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
