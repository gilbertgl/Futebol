import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLocalComponent } from './getAll-local.component';

describe('GetLocalComponent', () => {
  let component: GetAllLocalComponent;
  let fixture: ComponentFixture<GetAllLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
