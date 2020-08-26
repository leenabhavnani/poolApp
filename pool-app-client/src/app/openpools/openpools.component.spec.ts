import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpoolsComponent } from './openpools.component';

describe('OpenpoolsComponent', () => {
  let component: OpenpoolsComponent;
  let fixture: ComponentFixture<OpenpoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenpoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
