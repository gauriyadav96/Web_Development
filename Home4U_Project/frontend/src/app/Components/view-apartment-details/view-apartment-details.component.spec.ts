import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApartmentDetailsComponent } from './view-apartment-details.component';

describe('ViewApartmentDetailsComponent', () => {
  let component: ViewApartmentDetailsComponent;
  let fixture: ComponentFixture<ViewApartmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApartmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
