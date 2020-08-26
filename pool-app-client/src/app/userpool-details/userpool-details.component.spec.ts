import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpoolDetailsComponent } from './userpool-details.component';

describe('UserpoolDetailsComponent', () => {
  let component: UserpoolDetailsComponent;
  let fixture: ComponentFixture<UserpoolDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpoolDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpoolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
