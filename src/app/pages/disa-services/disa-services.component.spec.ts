import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisaServicesComponent } from './disa-services.component';

describe('DisaServicesComponent', () => {
  let component: DisaServicesComponent;
  let fixture: ComponentFixture<DisaServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisaServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
