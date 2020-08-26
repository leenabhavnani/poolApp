import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpandSuggestionComponent } from './helpand-suggestion.component';

describe('HelpandSuggestionComponent', () => {
  let component: HelpandSuggestionComponent;
  let fixture: ComponentFixture<HelpandSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpandSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpandSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
