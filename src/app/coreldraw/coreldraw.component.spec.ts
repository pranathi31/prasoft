import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreldrawComponent } from './coreldraw.component';

describe('CoreldrawComponent', () => {
  let component: CoreldrawComponent;
  let fixture: ComponentFixture<CoreldrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreldrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreldrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
