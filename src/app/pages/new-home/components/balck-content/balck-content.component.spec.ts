import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalckContentComponent } from './balck-content.component';

describe('BalckContentComponent', () => {
  let component: BalckContentComponent;
  let fixture: ComponentFixture<BalckContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalckContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalckContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
