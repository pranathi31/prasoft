import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocadpricesectionComponent } from './autocadpricesection.component';

describe('AutocadpricesectionComponent', () => {
  let component: AutocadpricesectionComponent;
  let fixture: ComponentFixture<AutocadpricesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocadpricesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocadpricesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
