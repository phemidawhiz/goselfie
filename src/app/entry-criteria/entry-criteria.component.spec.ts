import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCriteriaComponent } from './entry-criteria.component';

describe('EntryCriteriaComponent', () => {
  let component: EntryCriteriaComponent;
  let fixture: ComponentFixture<EntryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
