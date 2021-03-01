import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostImportantContentComponent } from './most-important-content.component';

describe('MostImportantContentComponent', () => {
  let component: MostImportantContentComponent;
  let fixture: ComponentFixture<MostImportantContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostImportantContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostImportantContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
