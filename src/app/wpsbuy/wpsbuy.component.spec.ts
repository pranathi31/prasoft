import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpsbuyComponent } from './wpsbuy.component';

describe('WpsbuyComponent', () => {
  let component: WpsbuyComponent;
  let fixture: ComponentFixture<WpsbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpsbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpsbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
