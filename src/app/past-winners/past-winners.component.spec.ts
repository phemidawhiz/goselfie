import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastWinnersComponent } from './past-winners.component';

describe('PastWinnersComponent', () => {
  let component: PastWinnersComponent;
  let fixture: ComponentFixture<PastWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
