import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Microsoftpricesection5Component } from './microsoftpricesection5.component';

describe('Microsoftpricesection5Component', () => {
  let component: Microsoftpricesection5Component;
  let fixture: ComponentFixture<Microsoftpricesection5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Microsoftpricesection5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Microsoftpricesection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
