import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Windows10Component } from './windows10.component';

describe('Windows10Component', () => {
  let component: Windows10Component;
  let fixture: ComponentFixture<Windows10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Windows10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Windows10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
