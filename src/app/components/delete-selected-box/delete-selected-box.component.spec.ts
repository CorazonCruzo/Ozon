import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSelectedBoxComponent } from './delete-selected-box.component';

describe('DeleteSelectedBoxComponent', () => {
  let component: DeleteSelectedBoxComponent;
  let fixture: ComponentFixture<DeleteSelectedBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSelectedBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSelectedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
