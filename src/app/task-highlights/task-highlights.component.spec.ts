import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHighlightsComponent } from './task-highlights.component';

describe('TaskHighlightsComponent', () => {
  let component: TaskHighlightsComponent;
  let fixture: ComponentFixture<TaskHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
