import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSegmentComponent } from './news-segment.component';

describe('NewsSegmentComponent', () => {
  let component: NewsSegmentComponent;
  let fixture: ComponentFixture<NewsSegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsSegmentComponent]
    });
    fixture = TestBed.createComponent(NewsSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
