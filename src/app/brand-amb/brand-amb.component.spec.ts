import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAmbComponent } from './brand-amb.component';

describe('BrandAmbComponent', () => {
  let component: BrandAmbComponent;
  let fixture: ComponentFixture<BrandAmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
