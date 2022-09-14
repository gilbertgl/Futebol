import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLocalComponent } from './set-local.component';

describe('SetLocalComponent', () => {
  let component: SetLocalComponent;
  let fixture: ComponentFixture<SetLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
