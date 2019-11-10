import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAllBoxComponent } from './check-all-box.component';

describe('CheckAllBoxComponent', () => {
  let component: CheckAllBoxComponent;
  let fixture: ComponentFixture<CheckAllBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAllBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAllBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
