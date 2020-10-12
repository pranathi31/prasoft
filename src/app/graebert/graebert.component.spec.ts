import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraebertComponent } from './graebert.component';

describe('GraebertComponent', () => {
  let component: GraebertComponent;
  let fixture: ComponentFixture<GraebertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraebertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraebertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
