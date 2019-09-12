import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostsdetailComponent } from './userpostsdetail.component';

describe('UserpostsdetailComponent', () => {
  let component: UserpostsdetailComponent;
  let fixture: ComponentFixture<UserpostsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpostsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpostsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
