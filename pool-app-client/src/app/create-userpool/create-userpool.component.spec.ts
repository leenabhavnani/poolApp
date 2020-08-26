import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserpoolComponent } from './create-userpool.component';

describe('CreateUserpoolComponent', () => {
  let component: CreateUserpoolComponent;
  let fixture: ComponentFixture<CreateUserpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
