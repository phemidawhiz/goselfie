import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSelfieComponent } from './task-selfie.component';

describe('TaskSelfieComponent', () => {
  let component: TaskSelfieComponent;
  let fixture: ComponentFixture<TaskSelfieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSelfieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
