import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSegmentComponent } from './books-segment.component';

describe('BooksSegmentComponent', () => {
  let component: BooksSegmentComponent;
  let fixture: ComponentFixture<BooksSegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksSegmentComponent]
    });
    fixture = TestBed.createComponent(BooksSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
