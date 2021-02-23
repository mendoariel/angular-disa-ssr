import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategoriesContentComponent } from './top-categories-content.component';

describe('TopCategoriesContentComponent', () => {
  let component: TopCategoriesContentComponent;
  let fixture: ComponentFixture<TopCategoriesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCategoriesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCategoriesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
