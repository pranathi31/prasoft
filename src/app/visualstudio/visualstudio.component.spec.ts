import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualstudioComponent } from './visualstudio.component';

describe('VisualstudioComponent', () => {
  let component: VisualstudioComponent;
  let fixture: ComponentFixture<VisualstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
