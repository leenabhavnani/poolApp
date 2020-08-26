import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpoolListComponent } from './userpool-list.component';

describe('UserpoolListComponent', () => {
  let component: UserpoolListComponent;
  let fixture: ComponentFixture<UserpoolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpoolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
