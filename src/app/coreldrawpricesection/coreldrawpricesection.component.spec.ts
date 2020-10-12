import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreldrawpricesectionComponent } from './coreldrawpricesection.component';

describe('CoreldrawpricesectionComponent', () => {
  let component: CoreldrawpricesectionComponent;
  let fixture: ComponentFixture<CoreldrawpricesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreldrawpricesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreldrawpricesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
