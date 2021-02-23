import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorContentComponent } from './separator-content.component';

describe('SeparatorContentComponent', () => {
  let component: SeparatorContentComponent;
  let fixture: ComponentFixture<SeparatorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
