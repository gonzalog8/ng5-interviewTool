import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerNameComponent } from './interviewer-name.component';

describe('InterviewerNameComponent', () => {
  let component: InterviewerNameComponent;
  let fixture: ComponentFixture<InterviewerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
