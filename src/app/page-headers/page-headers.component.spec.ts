import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeadersComponent } from './page-headers.component';

describe('PageHeadersComponent', () => {
  let component: PageHeadersComponent;
  let fixture: ComponentFixture<PageHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
