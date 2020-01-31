import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtermcardComponent } from './subtermcard.component';

describe('SubtermcardComponent', () => {
  let component: SubtermcardComponent;
  let fixture: ComponentFixture<SubtermcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtermcardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtermcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
