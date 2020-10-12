import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrrosoftComponent } from './micrrosoft.component';

describe('MicrrosoftComponent', () => {
  let component: MicrrosoftComponent;
  let fixture: ComponentFixture<MicrrosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrrosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
