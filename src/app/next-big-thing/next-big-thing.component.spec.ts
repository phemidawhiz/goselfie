import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBigThingComponent } from './next-big-thing.component';

describe('NextBigThingComponent', () => {
  let component: NextBigThingComponent;
  let fixture: ComponentFixture<NextBigThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextBigThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextBigThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
