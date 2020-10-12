import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobecartoptionsComponent } from './adobecartoptions.component';

describe('AdobecartoptionsComponent', () => {
  let component: AdobecartoptionsComponent;
  let fixture: ComponentFixture<AdobecartoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdobecartoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdobecartoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
